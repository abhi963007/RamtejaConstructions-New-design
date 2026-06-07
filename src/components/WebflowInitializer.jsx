import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageAttrsMap = {
  '/': {
    page: '698316aecf20e0a251148da1',
    site: '698316aecf20e0a251148dc6'
  },
  '/about': {
    page: '698316aecf20e0a251148da7',
    site: '698316aecf20e0a251148dc6'
  },
  '/service': {
    page: '698316aecf20e0a251148da8',
    site: '698316aecf20e0a251148dc6'
  },
  '/service-details': {
    page: '698316aecf20e0a251148db6',
    site: '698316aecf20e0a251148dc6',
    collection: '698316aecf20e0a251148e3a',
    item: 'site-preparation-excavation'
  },
  '/project': {
    page: '698316aecf20e0a251148dad',
    site: '698316aecf20e0a251148dc6'
  },
  '/project-details': {
    page: '698316aecf20e0a251148db5',
    site: '698316aecf20e0a251148dc6',
    collection: '698316aecf20e0a251148e19',
    item: 'highway-bridge'
  },
  '/contact': {
    page: '698316aecf20e0a251148da2',
    site: '698316aecf20e0a251148dc6'
  },
  '/form': {
    page: '698316aecf20e0a251148da2',
    site: '698316aecf20e0a251148dc6'
  }
};

const routeScriptMap = {
  '/': '/js/home/webflow.8581ccba.2136686d60aa104e.js',
  '/about': '/js/home/webflow.8581ccba.2136686d60aa104e.js',
  '/service': '/js/home/webflow.8581ccba.2136686d60aa104e.js',
  '/service-details': '/js/home/webflow.8581ccba.2136686d60aa104e.js',
  '/project': '/js/home/webflow.8581ccba.2136686d60aa104e.js',
  '/project-details': '/js/project-details/webflow.ad081a6e.f529453a1d662d78.js',
  '/contact': '/js/contact/webflow.bf6fdb9c.54eec54e7f22a903.js',
  '/form': '/js/contact/webflow.bf6fdb9c.54eec54e7f22a903.js'
};

const loadedScripts = new Set();

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (loadedScripts.has(src)) {
      resolve();
      return;
    }
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      loadedScripts.add(src);
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      loadedScripts.add(src);
      resolve();
    };
    script.onerror = (err) => reject(err);
    document.body.appendChild(script);
  });
}

export default function WebflowInitializer({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Dynamically update data-wf-* attributes on the HTML element
    const attrs = pageAttrsMap[location.pathname] || pageAttrsMap['/'];
    const htmlEl = document.documentElement;

    htmlEl.setAttribute('data-wf-page', attrs.page);
    htmlEl.setAttribute('data-wf-site', attrs.site);

    if (attrs.collection) {
      htmlEl.setAttribute('data-wf-collection', attrs.collection);
      htmlEl.setAttribute('data-wf-item-slug', attrs.item);
    } else {
      htmlEl.removeAttribute('data-wf-collection');
      htmlEl.removeAttribute('data-wf-item-slug');
    }

    const scriptSrc = routeScriptMap[location.pathname] || routeScriptMap['/'];
    let active = true;
    let timer;

    loadScript(scriptSrc)
      .then(() => {
        if (!active) return;
        // Delay slightly to ensure React has fully finished rendering the DOM
        timer = setTimeout(() => {
          if (window.Webflow) {
            try {
              // Re-trigger Webflow core layout & interaction scripts
              window.Webflow.destroy();
              window.Webflow.ready();
              
              const ix2 = window.Webflow.require('ix2');
              if (ix2) {
                ix2.init();
              }

              // Redraw interactive elements like sliders and tabs
              const slider = window.Webflow.require('slider');
              if (slider && typeof slider.redraw === 'function') {
                slider.redraw();
              }

              const tabs = window.Webflow.require('tabs');
              if (tabs && typeof tabs.redraw === 'function') {
                tabs.redraw();
              }

              const dropdown = window.Webflow.require('dropdown');
              if (dropdown && typeof dropdown.ready === 'function') {
                dropdown.ready();
              }
            } catch (err) {
              console.warn('Webflow re-initialization warning:', err);
            }
          }
        }, 150);
      })
      .catch(err => {
        console.error('Failed to load page-specific Webflow runtime script:', scriptSrc, err);
      });

    return () => {
      active = false;
      if (timer) clearTimeout(timer);
    };
  }, [location.pathname]);

  return children;
}

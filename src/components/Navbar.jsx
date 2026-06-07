import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ theme = 'dark' }) {
  const location = useLocation();
  const isLight = theme === 'light';

  // Highlight active menu item with Webflow's active class w--current
  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `fda-menu-link w-inline-block ${isActive ? 'w--current' : ''}`;
  };

  return (
    <div
      data-w-id={isLight ? 'f3f97cb2-a01c-9ed6-177b-0149b39775da' : '386b64da-e5cc-623d-0152-15db2d2032c1'}
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="fda-navbar-main fda-navbar-border-transparent w-nav"
    >
      <div className="fda-container-medium fda-tab-gutter-off w-container">
        <div className="w-layout-hflex fda-navbar-content">
          <Link to="/" className="fda-padding-off fda-left-gap w-nav-brand">
            <div>
              <img
                width="94"
                height="31"
                alt={isLight ? 'kontrek-main-icon-black' : 'kontrek-main-icon-white'}
                src={isLight ? '/images/common/698316aecf20e0a251148f68_kontrek-main-icon-black.svg' : '/images/common/698316aecf20e0a251148f69_kontrek-main-icon-white.svg'}
                loading="lazy"
                className="fda-logo"
              />
            </div>
          </Link>

          <nav role="navigation" className={`fda-nav-menu ${isLight ? 'fda-change-background' : ''} w-nav-menu`}>
            <div className="fda-nav-wrapper">
              <div>
                <div className="fda-navmenu-wrapper">
                  <Link to="/" className={getLinkClass('/')}>
                    <div className="fda-menu-text fda-text-color-white fda-change-text-size fda-change-text-color">Home</div>
                  </Link>
                  <Link to="/about" className={getLinkClass('/about')}>
                    <div className="fda-menu-text fda-text-color-white fda-change-text-size fda-change-text-color">About us</div>
                  </Link>
                  <Link to="/service" className={getLinkClass('/service')}>
                    <div className="fda-menu-text fda-text-color-white fda-change-text-size fda-change-text-color">Service</div>
                  </Link>
                  <Link to="/contact" className={getLinkClass('/contact')}>
                    <div className="fda-menu-text fda-text-color-white fda-change-text-size fda-change-text-color">Contact</div>
                  </Link>
                </div>

                <div className="w-layout-hflex fda-nav-responsive-button-wrap">
                  <div className="fda-nav-resposive-button">
                    <a data-w-id="4d573006-709b-6a8e-9ad4-ca1a78da964f" href="#" className="fda-button-main fda-border-transparent fda-full-width w-inline-block">
                      <div className="fda-button-wrapper fda-full-width">
                        <div className="fda-button-inner-wrapper fda-1 fda-full-width">
                          <div className="fda-button-text-wrapper">
                            <div className="fda-button-text">get started now</div>
                          </div>
                          <div className="fda-button-text-arrow-wrapper">
                            <img width="10" height="10" alt="" src="/images/common/698316aecf20e0a251148dea_kontrek-button-arrow.svg" loading="lazy" className="fda-button-text-arrow" />
                          </div>
                        </div>
                        <div className="fda-button-inner-wrapper fda-2 fda-full-width">
                          <div className="fda-button-text-wrapper">
                            <div className="fda-button-text fda-text-color-golden">get started now</div>
                          </div>
                          <div className="fda-button-text-arrow-wrapper">
                            <img width="10" height="10" alt="" src="/images/common/698316aecf20e0a251148e47_kontrek-button-arrow-golden.svg" loading="lazy" className="fda-button-text-arrow" />
                          </div>
                        </div>
                      </div>
                      <div className="fda-button-black-overlay-corner fda-change-size fda-change-position"></div>
                    </a>
                  </div>
                  <div className="fda-nav-resposive-button">
                    {isLight ? (
                      <Link to="/contact" className="fda-button-main fda-full-width w-inline-block">
                        <div className="fda-button-wrapper fda-full-width">
                          <div className="fda-button-inner-wrapper fda-1 fda-full-width">
                            <div className="fda-button-text-wrapper">
                              <div className="fda-button-text">contact us</div>
                            </div>
                            <div className="fda-button-text-arrow-wrapper">
                              <img width="10" height="10" alt="" src="/images/common/698316aecf20e0a251148dea_kontrek-button-arrow.svg" loading="lazy" className="fda-button-text-arrow" />
                            </div>
                          </div>
                          <div className="fda-button-inner-wrapper fda-2 fda-full-width">
                            <div className="fda-button-text-wrapper">
                              <div className="fda-button-text fda-text-color-white">contact us</div>
                            </div>
                            <div className="fda-button-text-arrow-wrapper">
                              <img width="10" height="10" alt="" src="/images/common/698316aecf20e0a251148dea_kontrek-button-arrow.svg" loading="lazy" className="fda-invert-white fda-button-text-arrow" />
                            </div>
                          </div>
                        </div>
                        <div className="fda-button-black-overlay-corner fda-change-size fda-change-position"></div>
                      </Link>
                    ) : (
                      <Link to="/contact" className="fda-button-main fda-border-transparent fda-full-width w-inline-block">
                        <div className="fda-button-wrapper fda-full-width">
                          <div className="fda-button-inner-wrapper fda-1 fda-full-width">
                            <div className="fda-button-text-wrapper">
                              <div className="fda-button-text">contact us</div>
                            </div>
                            <div className="fda-button-text-arrow-wrapper">
                              <img width="10" height="10" alt="" src="/images/common/698316aecf20e0a251148dea_kontrek-button-arrow.svg" loading="lazy" className="fda-button-text-arrow" />
                            </div>
                          </div>
                          <div className="fda-button-inner-wrapper fda-2 fda-full-width">
                            <div className="fda-button-text-wrapper">
                              <div className="fda-button-text fda-text-color-golden">contact us</div>
                            </div>
                            <div className="fda-button-text-arrow-wrapper">
                              <img width="10" height="10" alt="" src="/images/common/698316aecf20e0a251148e47_kontrek-button-arrow-golden.svg" loading="lazy" className="fda-button-text-arrow" />
                            </div>
                          </div>
                        </div>
                        <div className="fda-button-black-overlay-corner fda-change-size fda-change-position"></div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="fda-nav-bottom-wrap">
                <div className="w-layout-vflex fda-nav-description-v1">
                  <div className="w-layout-hflex fda-footer-social-top">
                    <div className={isLight ? 'fda-sub-text' : 'fda-sub-text fda-text-color-golden'}>Follow us</div>
                    <div className={`fda-small-dash ${isLight ? 'fda-change-color' : ''}`}></div>
                  </div>
                  <div className="w-layout-hflex fda-footer-social-icons-wrap">
                    <a href="https://www.facebook.com/" target="_blank" className={`fda-social-box ${isLight ? 'fda-change-border' : ''} w-inline-block`}>
                      <div className="w-layout-vflex fda-footer-icon-wrap">
                        <img width="9" height="15" alt="" src={isLight ? '/images/common/698316aecf20e0a251148f26_kontrek-facebook-icon-black.svg' : '/images/common/698316aecf20e0a251148e4b_kontrek-facebook-icon-golden.svg'} loading="lazy" />
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" className={`fda-social-box ${isLight ? 'fda-change-border' : ''} w-inline-block`}>
                      <div className="w-layout-vflex fda-footer-icon-wrap">
                        <img width="9" height="15" alt="" src={isLight ? '/images/common/698316aecf20e0a251148f23_kontrek-linkedin-icon-black.svg' : '/images/common/698316aecf20e0a251148e4a_kontrek-linkedin-icon-golden.svg'} loading="lazy" className="fda-icon-v1" />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className={`fda-social-box ${isLight ? 'fda-change-border' : ''} w-inline-block`}>
                      <div className="w-layout-vflex fda-footer-icon-wrap">
                        <img width="9" height="15" alt="" src={isLight ? '/images/common/698316aecf20e0a251148f24_kontrek-instagram-icon-black.svg' : '/images/common/698316aecf20e0a251148e48_kontrek-instagram-icon-golden.svg'} loading="lazy" />
                      </div>
                    </a>
                    <a href="https://x.com/" target="_blank" className={`fda-social-box ${isLight ? 'fda-change-border' : ''} w-inline-block`}>
                      <div className="w-layout-vflex fda-footer-icon-wrap">
                        <img width="9" height="15" alt="" src={isLight ? '/images/common/698316aecf20e0a251148f25_kontrek-twitter-icon-black.svg' : '/images/common/698316aecf20e0a251148e49_kontrek-twitter-icon-golden.svg'} loading="lazy" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className={`w-layout-hflex fda-nav-description-v2 ${isLight ? 'fda-change-border-color' : ''}`}>
                  <div className="w-layout-hflex fda-nav-card-v1">
                    <div className={`w-layout-vflex fda-nav-icon-wrap-v1 ${isLight ? 'fda-change-border' : ''}`}>
                      <div className="fda-nav-icon-v1">
                        <div>
                          <img width="26" loading="lazy" alt="" src={isLight ? '/images/common/698316aecf20e0a251148f22_kontrek-message-icon-black.svg' : '/images/common/698316aecf20e0a251148e4c_kontrek-email-icon-golden.svg'} />
                        </div>
                      </div>
                    </div>
                    <div className="fda-nav-description-v2-text-wrap">
                      <div className={isLight ? 'fda-text-color-black' : 'fda-text-color-golden'}>For more information</div>
                      <a href="tel:8881234567" className={`fda-text-style-h5 ${isLight ? 'fda-text-color-black' : 'fda-text-color-golden'}`}>(888) 123-4567</a>
                    </div>
                  </div>
                  <div className="w-layout-hflex fda-nav-card-v1">
                    <div className={`w-layout-vflex fda-nav-icon-wrap-v1 ${isLight ? 'fda-change-border' : 'fda-radius-tiny'}`}>
                      <div className="fda-nav-icon-v1">
                        <div>
                          <img width="26" loading="lazy" alt="" src={isLight ? '/images/common/698316aecf20e0a251148f27_kontrek-call-icon-black.svg' : '/images/common/698316aecf20e0a251148e5c_kontrek-call-icon-golden.svg'} />
                        </div>
                      </div>
                    </div>
                    <div className="fda-nav-description-v2-text-wrap">
                      <div className={isLight ? 'fda-text-color-black' : 'fda-text-color-golden'}>Email</div>
                      <a href="mailto:info@example.com" className={`fda-text-style-h5 ${isLight ? 'fda-text-color-black' : 'fda-text-color-golden'}`}>info@example.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div
            data-w-id={isLight ? 'f3f97cb2-a01c-9ed6-177b-0149b3977642' : '386b64da-e5cc-623d-0152-15db2d20332b'}
            className="fda-menu-button fda-right-gap w-nav-button"
          >
            <div className={`fda-menu-line fda-line-one ${isLight ? 'fda-version-black' : ''}`}></div>
            <div className={`fda-menu-line fda-line-two ${isLight ? 'fda-version-black' : ''}`}></div>
            <div className={`fda-menu-line fda-line-three ${isLight ? 'fda-version-black' : ''}`}></div>
          </div>

          <div className="fda-navbar-button-wrapper fda-tab-display-none">
            {isLight ? (
              <Link
                data-wf--fda-button-v1--variant="base"
                data-w-id="b2cae229-9343-bb63-3d8d-008342bf0ee6"
                to="/form"
                className="fda-button-main w-inline-block"
              >
                <div className="fda-button-wrapper">
                  <div className="fda-button-inner-wrapper fda-1">
                    <div className="fda-button-text-wrapper">
                      <div className="fda-button-text">get a free quote</div>
                    </div>
                    <div className="fda-button-text-arrow-wrapper">
                      <img width="10" height="10" alt="" src="/images/common/698316aecf20e0a251148dea_kontrek-button-arrow.svg" loading="lazy" className="fda-button-text-arrow" />
                    </div>
                  </div>
                  <div className="fda-button-inner-wrapper fda-2">
                    <div className="fda-button-text-wrapper">
                      <div className="fda-button-text fda-text-color-white">get a free quote</div>
                    </div>
                    <div className="fda-button-text-arrow-wrapper">
                      <img width="10" height="10" alt="" src="/images/common/698316aecf20e0a251148dea_kontrek-button-arrow.svg" loading="lazy" className="fda-invert-white fda-button-text-arrow" />
                    </div>
                  </div>
                </div>
                <div className="fda-button-black-overlay-corner"></div>
                <div className="fda-button-black-overlay"></div>
              </Link>
            ) : (
              <Link
                data-w-id="a8416e24-bcd5-1a27-2990-5e430ccf61ae"
                to="/form"
                className="fda-button-main fda-border-transparent w-inline-block"
              >
                <div className="fda-button-wrapper">
                  <div className="fda-button-inner-wrapper fda-1">
                    <div className="fda-button-text-wrapper">
                      <div className="fda-button-text">get a free quote</div>
                    </div>
                    <div className="fda-button-text-arrow-wrapper">
                      <img width="10" height="10" alt="" src="/images/common/698316aecf20e0a251148dea_kontrek-button-arrow.svg" loading="lazy" className="fda-button-text-arrow" />
                    </div>
                  </div>
                  <div className="fda-button-inner-wrapper fda-2">
                    <div className="fda-button-text-wrapper">
                      <div className="fda-button-text fda-text-color-golden">get a free quote</div>
                    </div>
                    <div className="fda-button-text-arrow-wrapper">
                      <img width="10" height="10" alt="" src="/images/common/698316aecf20e0a251148e47_kontrek-button-arrow-golden.svg" loading="lazy" className="fda-button-text-arrow" />
                    </div>
                  </div>
                </div>
                <div className="fda-button-black-overlay-corner"></div>
                <div className="fda-button-black-overlay"></div>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={`fda-navbar-main-overlay ${isLight ? 'fda-version-white' : ''}`}></div>
    </div>
  );
}

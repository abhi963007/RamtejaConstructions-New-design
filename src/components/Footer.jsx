import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer data-wf--fda-footer--variant="base" className="fda-footer fda-overflow-hidden">
      <div className="w-layout-blockcontainer fda-container-medium w-container">
        <div className="fda-footer-top">
          <div className="fda-footer-top-left">
            <div>
              <div data-w-id="a1cce851-072e-f5d4-bf45-f7f2c77dd2f0" className="fda-footer-heading fda-overflow-hidden">
                <h3 className="fda-gap-off fda-text-color-white fda-mobile-text-align-center">Have a project in mind?</h3>
              </div>
              <div data-w-id="32581804-50c7-5bbd-7f29-f86803add327" className="fda-footer-get-started-wrapper fda-overflow-hidden">
                <Link data-w-id="a8416e24-bcd5-1a27-2990-5e430ccf61ae" to="/contact" className="fda-button-main fda-border-transparent w-inline-block">
                  <div className="fda-button-wrapper">
                    <div className="fda-button-inner-wrapper fda-1">
                      <div className="fda-button-text-wrapper">
                        <div className="fda-button-text">Contact Us →</div>
                      </div>
                      <div className="fda-button-text-arrow-wrapper">
                        <img width="10" height="10" alt="" src="/images/common/698316aecf20e0a251148dea_kontrek-button-arrow.svg" loading="lazy" className="fda-button-text-arrow" />
                      </div>
                    </div>
                    <div className="fda-button-inner-wrapper fda-2">
                      <div className="fda-button-text-wrapper">
                        <div className="fda-button-text fda-text-color-golden">Contact Us →</div>
                      </div>
                      <div className="fda-button-text-arrow-wrapper">
                        <img width="10" height="10" alt="" src="/images/common/698316aecf20e0a251148e47_kontrek-button-arrow-golden.svg" loading="lazy" className="fda-button-text-arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="fda-button-black-overlay-corner"></div>
                  <div className="fda-button-black-overlay"></div>
                </Link>
              </div>
            </div>
          </div>
          <div className="fda-footer-top-right fda-overflow-hidden">
            <div data-w-id="a1cce851-072e-f5d4-bf45-f7f2c77dd302" className="fda-footer-top-left-inner">
              <div className="fda-footer-links-wrapper">
                <div className="fda-text-style-h5 fda-text-color-white">Quick links</div>
                <div className="fda-footer-links-wrapper-inner">
                  <Link to="/" className="fda-text-style-h6 fda-text-color-white fda-hover-golden">Home</Link>
                  <Link to="/about" className="fda-text-style-h6 fda-text-color-white fda-hover-golden">About us</Link>
                  <Link to="/service" className="fda-text-style-h6 fda-text-color-white fda-hover-golden">Service</Link>
                  <a href="#" className="fda-text-style-h6 fda-text-color-white fda-hover-golden">Team</a>
                </div>
              </div>
              <div className="fda-footer-links-wrapper">
                <div className="fda-text-style-h5 fda-text-color-white">Social media</div>
                <div className="fda-footer-links-wrapper-inner">
                  <a href="https://www.facebook.com/" className="fda-text-style-h6 fda-text-color-white fda-hover-golden">Facebook</a>
                  <a href="https://www.behance.net/" className="fda-text-style-h6 fda-text-color-white fda-hover-golden">Behance</a>
                  <a href="https://www.instagram.com/" className="fda-text-style-h6 fda-text-color-white fda-hover-golden">Instagram</a>
                  <a href="https://dribbble.com/" className="fda-text-style-h6 fda-text-color-white fda-hover-golden">Dribbble</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

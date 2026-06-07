import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProjectDetails() {
  const lightboxData1 = {
    "items": [
      {
        "_id": "6979e3b60cf3d17f11d432f3",
        "origFileName": "kontrek-project-details-gallery-image-one.webp",
        "fileName": "kontrek-project-details-gallery-image-one.webp",
        "fileSize": 319696,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b60cf3d17f11d432f3_kontrek-project-details-gallery-image-one.webp",
        "width": 1570,
        "type": "image"
      },
      {
        "_id": "6979e3b6b16e04f0ebb428b6",
        "origFileName": "kontrek-project-details-gallery-image-two.webp",
        "fileName": "kontrek-project-details-gallery-image-two.webp",
        "fileSize": 336058,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b6b16e04f0ebb428b6_kontrek-project-details-gallery-image-two.webp",
        "width": 1570,
        "type": "image"
      },
      {
        "_id": "6979e3b60da3ed52320e20af",
        "origFileName": "kontrek-project-details-gallery-image-three.webp",
        "fileName": "kontrek-project-details-gallery-image-three.webp",
        "fileSize": 521834,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b60da3ed52320e20af_kontrek-project-details-gallery-image-three.webp",
        "width": 1570,
        "type": "image"
      },
      {
        "_id": "6979e3b659f59b4b4611eb10",
        "origFileName": "kontrek-project-details-gallery-image-four.webp",
        "fileName": "kontrek-project-details-gallery-image-four.webp",
        "fileSize": 374578,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b659f59b4b4611eb10_kontrek-project-details-gallery-image-four.webp",
        "width": 1570,
        "type": "image"
      }
    ],
    "group": ""
  };

  const lightboxData2 = {
    "items": [
      {
        "_id": "6979e3b6b16e04f0ebb428b6",
        "origFileName": "kontrek-project-details-gallery-image-two.webp",
        "fileName": "kontrek-project-details-gallery-image-two.webp",
        "fileSize": 336058,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b6b16e04f0ebb428b6_kontrek-project-details-gallery-image-two.webp",
        "width": 1570,
        "type": "image"
      },
      {
        "_id": "6979e3b60da3ed52320e20af",
        "origFileName": "kontrek-project-details-gallery-image-three.webp",
        "fileName": "kontrek-project-details-gallery-image-three.webp",
        "fileSize": 521834,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b60da3ed52320e20af_kontrek-project-details-gallery-image-three.webp",
        "width": 1570,
        "type": "image"
      },
      {
        "_id": "6979e3b659f59b4b4611eb10",
        "origFileName": "kontrek-project-details-gallery-image-four.webp",
        "fileName": "kontrek-project-details-gallery-image-four.webp",
        "fileSize": 374578,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b659f59b4b4611eb10_kontrek-project-details-gallery-image-four.webp",
        "width": 1570,
        "type": "image"
      },
      {
        "_id": "6979e3b60cf3d17f11d432f3",
        "origFileName": "kontrek-project-details-gallery-image-one.webp",
        "fileName": "kontrek-project-details-gallery-image-one.webp",
        "fileSize": 319696,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b60cf3d17f11d432f3_kontrek-project-details-gallery-image-one.webp",
        "width": 1570,
        "type": "image"
      }
    ],
    "group": ""
  };

  const lightboxData3 = {
    "items": [
      {
        "_id": "6979e3b60da3ed52320e20af",
        "origFileName": "kontrek-project-details-gallery-image-three.webp",
        "fileName": "kontrek-project-details-gallery-image-three.webp",
        "fileSize": 521834,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b60da3ed52320e20af_kontrek-project-details-gallery-image-three.webp",
        "width": 1570,
        "type": "image"
      },
      {
        "_id": "6979e3b659f59b4b4611eb10",
        "origFileName": "kontrek-project-details-gallery-image-four.webp",
        "fileName": "kontrek-project-details-gallery-image-four.webp",
        "fileSize": 374578,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b659f59b4b4611eb10_kontrek-project-details-gallery-image-four.webp",
        "width": 1570,
        "type": "image"
      },
      {
        "_id": "6979e3b60cf3d17f11d432f3",
        "origFileName": "kontrek-project-details-gallery-image-one.webp",
        "fileName": "kontrek-project-details-gallery-image-one.webp",
        "fileSize": 319696,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b60cf3d17f11d432f3_kontrek-project-details-gallery-image-one.webp",
        "width": 1570,
        "type": "image"
      },
      {
        "_id": "6979e3b6b16e04f0ebb428b6",
        "origFileName": "kontrek-project-details-gallery-image-two.webp",
        "fileName": "kontrek-project-details-gallery-image-two.webp",
        "fileSize": 336058,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b6b16e04f0ebb428b6_kontrek-project-details-gallery-image-two.webp",
        "width": 1570,
        "type": "image"
      }
    ],
    "group": ""
  };

  const lightboxData4 = {
    "items": [
      {
        "_id": "6979e3b659f59b4b4611eb10",
        "origFileName": "kontrek-project-details-gallery-image-four.webp",
        "fileName": "kontrek-project-details-gallery-image-four.webp",
        "fileSize": 374578,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b659f59b4b4611eb10_kontrek-project-details-gallery-image-four.webp",
        "width": 1570,
        "type": "image"
      },
      {
        "_id": "6979e3b60cf3d17f11d432f3",
        "origFileName": "kontrek-project-details-gallery-image-one.webp",
        "fileName": "kontrek-project-details-gallery-image-one.webp",
        "fileSize": 319696,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b60cf3d17f11d432f3_kontrek-project-details-gallery-image-one.webp",
        "width": 1570,
        "type": "image"
      },
      {
        "_id": "6979e3b6b16e04f0ebb428b6",
        "origFileName": "kontrek-project-details-gallery-image-two.webp",
        "fileName": "kontrek-project-details-gallery-image-two.webp",
        "fileSize": 336058,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b6b16e04f0ebb428b6_kontrek-project-details-gallery-image-two.webp",
        "width": 1570,
        "type": "image"
      },
      {
        "_id": "6979e3b60da3ed52320e20af",
        "origFileName": "kontrek-project-details-gallery-image-three.webp",
        "fileName": "kontrek-project-details-gallery-image-three.webp",
        "fileSize": 521834,
        "height": 930,
        "url": "https://cdn.prod.website-files.com/69577df6fd7f3a29287db045/6979e3b60da3ed52320e20af_kontrek-project-details-gallery-image-three.webp",
        "width": 1570,
        "type": "image"
      }
    ],
    "group": ""
  };

  return (
    <>
      <Navbar theme="dark" />
      <main>
        <section className="fda-project-hero">
            <div className="w-layout-blockcontainer fda-container-large w-container">
                <div className="w-layout-vflex fda-project-top">
                    <div data-w-id="f2462f0d-7b3b-6394-a1da-5153abf35dd5" style={{opacity:0}} className="fda-sub-heading-wrapper-inner fda-gap-tiny">
                        <div className="fda-sub-heading-icon"><img src="/images/common/698316aecf20e0a251148dff_kontrek-sub-heading-left-icon.svg" loading="lazy" alt="" /></div>
                        <div className="fda-sub-text">projects</div>
                        <div className="fda-sub-heading-icon"><img src="/images/common/698316aecf20e0a251148e00_kontrek-sub-heading-right-icon.svg" loading="lazy" alt="" /></div>
                    </div>
                    <div className="fda-overflow-hidden">
                        <div data-w-id="7ce0793c-40dc-c58e-423f-939c54ac933b" style={{opacity:0}} className="fda-portfolio-heading-wrapper">
                            <h1 className="fda-gap-off">Highway bridge</h1>
                            <h1 className="fda-gap-off">( Northvale, USA )</h1>
                        </div>
                    </div>
                </div>
                <div className="fda-overflow-hidden">
                    <div data-w-id="7ce0793c-40dc-c58e-423f-939c54ac9340" className="fda-project-hero-image-wrapper fda-position-relative"><img width="1798" height="807" alt="" src="/images/project-details/698316aecf20e0a251148fd6_kontrek-roject-details-Highway-Bridge.webp" className="fda-image-effect" />
                        <div data-w-id="52709feb-03ee-aa06-aeac-99f253a673e1" className="fda-main-overlay">
                            <div className="fda-inside-overlay"></div>
                            <div className="fda-outside-overlay"></div>
                        </div>
                    </div>
                    <div data-w-id="7ce0793c-40dc-c58e-423f-939c54ac9343" style={{opacity:0}} className="fda-project-bottom-content-wrapper">
                        <div className="fda-portfolio-bottom-content">
                            <div>Sector</div>
                            <div className="fda-text-style-h5 fda-mobile-text-center">Industrial / Logistics</div>
                        </div>
                        <div className="fda-portfolio-bottom-content">
                            <div>Location</div>
                            <div className="fda-text-style-h5 fda-mobile-text-center">Northvale, USA</div>
                        </div>
                        <div className="fda-portfolio-bottom-content">
                            <div>Completion date</div>
                            <div className="fda-text-style-h5 fda-mobile-text-center">January 6, 2026</div>
                        </div>
                        <div className="fda-portfolio-bottom-content">
                            <div>Client</div>
                            <div className="fda-text-style-h5 fda-mobile-text-center">Lorem structures ltd</div>
                        </div>
                    </div>
                    <div className="fda-project-bottom-line"></div>
                </div>
            </div>
        </section>
        <section className="fda-portfolio-gallery">
            <div className="w-layout-blockcontainer fda-container-medium w-container">
                <div className="fda-text-align-center">
                    <div className="fda-overflow-hidden fda-h2-gap">
                        <h2 data-w-id="882c258f-40fe-2faf-3308-c6a99d3af8aa" style={{opacity:0}} className="fda-gap-off">Our work speaks for itself</h2>
                    </div>
                    <div className="fda-overflow-hidden">
                        <div data-w-id="882c258f-40fe-2faf-3308-c6a99d3af8ad" style={{opacity:0}} className="fda-project-gallery-text-wrapper">Our construction experts evaluate site conditions, materials, labor coordination, and project timelines to deliver practical solutions that support informed decisions and successful builds.</div>
                    </div>
                </div>
                <div className="fda-project-gallery-wrapper">
                    <a href="#" className="fda-overflow-hidden fda-position-relative w-inline-block w-lightbox">
                        <img src="/images/project-details/698316aecf20e0a251148f60_kontrek-project-details-gallery-image-one.webp" loading="lazy" alt="kontrek-project-details-gallery-image-one" className="fda-image-effect" />
                        <div data-w-id="52709feb-03ee-aa06-aeac-99f253a673e1" className="fda-main-overlay">
                            <div className="fda-inside-overlay"></div>
                            <div className="fda-outside-overlay"></div>
                        </div>
                        <script type="application/json" className="w-json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lightboxData1) }} />
                    </a>
                    <a href="#" className="fda-overflow-hidden fda-position-relative w-inline-block w-lightbox">
                        <img src="/images/project-details/698316aecf20e0a251148f62_kontrek-project-details-gallery-image-two.webp" loading="lazy" sizes="(max-width: 1570px) 100vw, 1570px" srcSet="/images/project-details/698316aecf20e0a251148f62_kontrek-project-details-gallery-image-two-p-500.webp 500w, /images/project-details/698316aecf20e0a251148f62_kontrek-project-details-gallery-image-two-p-800.webp 800w, /images/project-details/698316aecf20e0a251148f62_kontrek-project-details-gallery-image-two-p-1080.webp 1080w, /images/project-details/698316aecf20e0a251148f62_kontrek-project-details-gallery-image-two.webp 1570w" alt="kontrek-project-details-gallery-image-two" className="fda-image-effect" />
                        <div data-w-id="52709feb-03ee-aa06-aeac-99f253a673e1" className="fda-main-overlay">
                            <div className="fda-inside-overlay"></div>
                            <div className="fda-outside-overlay"></div>
                        </div>
                        <script type="application/json" className="w-json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lightboxData2) }} />
                    </a>
                    <a href="#" className="fda-overflow-hidden fda-position-relative w-inline-block w-lightbox">
                        <img src="/images/project-details/698316aecf20e0a251148f63_kontrek-project-details-gallery-image-three.webp" loading="lazy" sizes="(max-width: 1570px) 100vw, 1570px" srcSet="/images/project-details/698316aecf20e0a251148f63_kontrek-project-details-gallery-image-three-p-500.webp 500w, /images/project-details/698316aecf20e0a251148f63_kontrek-project-details-gallery-image-three-p-800.webp 800w, /images/project-details/698316aecf20e0a251148f63_kontrek-project-details-gallery-image-three-p-1080.webp 1080w, /images/project-details/698316aecf20e0a251148f63_kontrek-project-details-gallery-image-three.webp 1570w" alt="kontrek-project-details-gallery-image-three" className="fda-image-effect" />
                        <div data-w-id="52709feb-03ee-aa06-aeac-99f253a673e1" className="fda-main-overlay">
                            <div className="fda-inside-overlay"></div>
                            <div className="fda-outside-overlay"></div>
                        </div>
                        <script type="application/json" className="w-json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lightboxData3) }} />
                    </a>
                    <a href="#" className="fda-overflow-hidden fda-position-relative w-inline-block w-lightbox">
                        <img src="/images/project-details/698316aecf20e0a251148f61_kontrek-project-details-gallery-image-four.webp" loading="lazy" sizes="(max-width: 1570px) 100vw, 1570px" srcSet="/images/project-details/698316aecf20e0a251148f61_kontrek-project-details-gallery-image-four-p-500.webp 500w, /images/project-details/698316aecf20e0a251148f61_kontrek-project-details-gallery-image-four-p-800.webp 800w, /images/project-details/698316aecf20e0a251148f61_kontrek-project-details-gallery-image-four-p-1080.webp 1080w, /images/project-details/698316aecf20e0a251148f61_kontrek-project-details-gallery-image-four.webp 1570w" alt="kontrek-project-details-gallery-image-four" className="fda-image-effect" />
                        <div data-w-id="52709feb-03ee-aa06-aeac-99f253a673e1" className="fda-main-overlay">
                            <div className="fda-inside-overlay"></div>
                            <div className="fda-outside-overlay"></div>
                        </div>
                        <script type="application/json" className="w-json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lightboxData4) }} />
                    </a>
                    <div data-delay="4000" data-animation="slide" className="fda-mobile-slider w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                        <div className="w-slider-mask">
                            <div className="w-slide"><img width="630" height="465" alt="kontrek-project-details-gallery-image-one" src="/images/project-details/698316aecf20e0a251148f60_kontrek-project-details-gallery-image-one.webp" loading="lazy" srcSet="/images/project-details/698316aecf20e0a251148f60_kontrek-project-details-gallery-image-one-p-500.webp 500w, /images/project-details/698316aecf20e0a251148f60_kontrek-project-details-gallery-image-one-p-800.webp 800w, /images/project-details/698316aecf20e0a251148f60_kontrek-project-details-gallery-image-one-p-1080.webp 1080w, /images/project-details/698316aecf20e0a251148f60_kontrek-project-details-gallery-image-one.webp 1570w" sizes="(max-width: 479px) 100vw, 630px" className="fda-image-effect fda-slider-item-height" /></div>
                            <div className="w-slide"><img width="630" height="465" alt="kontrek-project-details-gallery-image-two" src="/images/project-details/698316aecf20e0a251148f62_kontrek-project-details-gallery-image-two.webp" loading="lazy" srcSet="/images/project-details/698316aecf20e0a251148f62_kontrek-project-details-gallery-image-two-p-500.webp 500w, /images/project-details/698316aecf20e0a251148f62_kontrek-project-details-gallery-image-two-p-800.webp 800w, /images/project-details/698316aecf20e0a251148f62_kontrek-project-details-gallery-image-two-p-1080.webp 1080w, /images/project-details/698316aecf20e0a251148f62_kontrek-project-details-gallery-image-two.webp 1570w" sizes="(max-width: 479px) 100vw, 630px" className="fda-image-effect fda-slider-item-height" /></div>
                            <div className="w-slide"><img width="630" height="465" alt="kontrek-project-details-gallery-image-three" src="/images/project-details/698316aecf20e0a251148f63_kontrek-project-details-gallery-image-three.webp" loading="lazy" srcSet="/images/project-details/698316aecf20e0a251148f63_kontrek-project-details-gallery-image-three-p-500.webp 500w, /images/project-details/698316aecf20e0a251148f63_kontrek-project-details-gallery-image-three-p-800.webp 800w, /images/project-details/698316aecf20e0a251148f63_kontrek-project-details-gallery-image-three-p-1080.webp 1080w, /images/project-details/698316aecf20e0a251148f63_kontrek-project-details-gallery-image-three.webp 1570w" sizes="(max-width: 479px) 100vw, 630px" className="fda-image-effect fda-slider-item-height" /></div>
                            <div className="w-slide"><img width="630" height="465" alt="kontrek-project-details-gallery-image-four" src="/images/project-details/698316aecf20e0a251148f61_kontrek-project-details-gallery-image-four.webp" loading="lazy" srcSet="/images/project-details/698316aecf20e0a251148f61_kontrek-project-details-gallery-image-four-p-500.webp 500w, /images/project-details/698316aecf20e0a251148f61_kontrek-project-details-gallery-image-four-p-800.webp 800w, /images/project-details/698316aecf20e0a251148f61_kontrek-project-details-gallery-image-four-p-1080.webp 1080w, /images/project-details/698316aecf20e0a251148f61_kontrek-project-details-gallery-image-four.webp 1570w" sizes="(max-width: 479px) 100vw, 630px" className="fda-image-effect" /></div>
                        </div>
                        <div className="fda-display-none w-slider-arrow-left">
                            <div className="w-icon-slider-left"></div>
                        </div>
                        <div className="fda-display-none w-slider-arrow-right">
                            <div className="w-icon-slider-right"></div>
                        </div>
                        <div className="fda-display-none w-slider-nav w-round w-num"></div>
                    </div>
                </div>
            <div className="fda-project-additional-details-heading-wrapper">
                <div data-w-id="882c258f-40fe-2faf-3308-c6a99d3af8c5" style={{opacity:0}} className="fda-text-style-h3">Creating durable spaces through expert engineering and craftsmanship</div>
            </div>
            <div className="fda-project-bottom-line"></div>
            <div className="fda-project-additional-details-wrapper">
                <div data-w-id="882c258f-40fe-2faf-3308-c6a99d3af8c8" style={{opacity:0}} className="fda-project-additional-details-left-part">
                    <div className="fda-project-details-subheading-wrapper">
                        <div className="fda-text-style-h5">Project Files</div>
                    </div>
                    <div className="fda-text-style-h6 w-richtext">
                        <ul role="list">
                            <li>Commercial projects</li>
                            <li>Residential projects</li>
                            <li>Industrial projects</li>
                            <li>Infrastructure projects</li>
                        </ul>
                    </div>
                </div>
                <div data-w-id="882c258f-40fe-2faf-3308-c6a99d3af8fe" style={{opacity:0}} className="fda-project-additional-details-right-part">
                    <div className="fda-project-details-subheading-wrapper">
                        <div className="fda-text-style-h5">Project overview</div>
                    </div>
                    <div className="w-richtext">
                        <p>A mid-sized construction company faced project delays, rising costs, and inconsistent site coordination. Through structured planning, improved workflows, and skilled execution, our team streamlined operations, strengthened supervision, and aligned every phase with project goals. Within months, efficiency improved, timelines stabilized, and client satisfaction increased significantly.</p>
                        <p>Our construction experts evaluate site conditions, materials, labor coordination, and project timelines to deliver practical solutions that support informed decisions and successful builds.</p>
                        <p>Many construction projects face hidden inefficiencies, unclear scopes, and outdated processes that impact schedules, safety, and budgets. Without the right expertise, these challenges can lead to delays, cost overruns, and compromised quality. Our construction approach brings clarity, identifies root issues, and implements proven building practices.</p>
                        <p>‍</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="fda-latest-project-article">
        <div className="w-layout-blockcontainer fda-container-medium w-container">
            <div className="fda-overflow-hidden">
                <h2 data-w-id="c2aad554-4e09-4f5a-2a3f-78617fe8201b" style={{opacity:0}} className="fda-gap-off">Our latest works</h2>
            </div>
            <div className="fda-project-top-padding">
                <div className="w-dyn-list">
                    <div role="list" className="fda-portfolio-wrapper fda-v2 w-dyn-items">
                        <div role="listitem" className="fda-full-height w-dyn-item">
                            <Link data-w-id="072db1ba-5642-d5c7-da93-5bf0071d895c" style={{opacity:0}} to="/project-details" className="fda-portfolio-item w-inline-block">
                                <div className="fda-position-relative fda-overflow-hidden">
                                    <img width="630" height="468" alt="" src="/images/project-details/698316aecf20e0a251148fdc_kontrek-project-details-steel-bridge-small.webp" loading="lazy" sizes="(max-width: 479px) 100vw, 630px" srcSet="/images/project-details/698316aecf20e0a251148fdc_kontrek-project-details-steel-bridge-small-p-500.webp 500w, /images/project-details/698316aecf20e0a251148fdc_kontrek-project-details-steel-bridge-small-p-800.webp 800w, /images/project-details/698316aecf20e0a251148fdc_kontrek-project-details-steel-bridge-small-p-1080.webp 1080w, /images/project-details/698316aecf20e0a251148fdc_kontrek-project-details-steel-bridge-small.webp 1570w" className="fda-portfolio-image fda-image-effect" />
                                    <div data-w-id="52709feb-03ee-aa06-aeac-99f253a673e1" className="fda-main-overlay">
                                        <div className="fda-inside-overlay"></div>
                                        <div className="fda-outside-overlay"></div>
                                    </div>
                                </div>
                                <div data-w-id="072db1ba-5642-d5c7-da93-5bf0071d8960" className="fda-work-card-text-content fda-position-relative">
                                    <div className="fda-work-card-text-main-wrap fda-overflow-hidden fda-position-relative">
                                        <div data-w-id="072db1ba-5642-d5c7-da93-5bf0071d8962" className="fda-work-card-text-wrapper fda-overflow-hidden">
                                            <div className="fda-work-card-icon-wrapper">
                                                <img width="24" height="12" alt="Kontix-home-one-our-work-arrow-icon-one-webflow-ecommerce-template" src="/images/project-details/698316aecf20e0a251148f44_kontix-home-one-our-work-arrow-icon-one-webflow-ecommerce-template.svg" loading="lazy" data-w-id="072db1ba-5642-d5c7-da93-5bf0071d8964" className="fda-work-grey-arrow" />
                                            </div>
                                            <div className="fda-work-subtext-wrapper">
                                                <div data-w-id="072db1ba-5642-d5c7-da93-5bf0071d8966" className="fda-text-style-h6 fda-text-one">Steel bridge</div>
                                                <div data-w-id="072db1ba-5642-d5c7-da93-5bf0071d8967" className="fda-text-style-h6 fda-text-two">( Ashmount, USA )</div>
                                            </div>
                                        </div>
                                        <div className="fda-work-card-icon-wrapper fda-landscape-display-none">
                                            <img width="24" height="12" alt="Kontix-home-one-our-work-arrow-icon-one-webflow-ecommerce-template" src="/images/project-details/698316aecf20e0a251148f44_kontix-home-one-our-work-arrow-icon-one-webflow-ecommerce-template.svg" loading="lazy" data-w-id="072db1ba-5642-d5c7-da93-5bf0071d8969" className="fda-work-white-arrow" />
                                        </div>
                                        <div data-w-id="072db1ba-5642-d5c7-da93-5bf0071d896a" className="fda-work-grey-line"></div>
                                        <div data-w-id="072db1ba-5642-d5c7-da93-5bf0071d896b" className="fda-work-black-line"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div role="listitem" className="fda-full-height w-dyn-item">
                            <Link data-w-id="072db1ba-5642-d5c7-da93-5bf0071d895c" style={{opacity:0}} to="/project-details" className="fda-portfolio-item w-inline-block">
                                <div className="fda-position-relative fda-overflow-hidden">
                                    <img width="630" height="468" alt="" src="/images/common/698316aecf20e0a251148fdb_kontrek-project-details-Skyline-tower-small.webp" loading="lazy" sizes="(max-width: 479px) 100vw, 630px" srcSet="/images/common/698316aecf20e0a251148fdb_kontrek-project-details-Skyline-tower-small-p-500.webp 500w, /images/common/698316aecf20e0a251148fdb_kontrek-project-details-Skyline-tower-small-p-800.webp 800w, /images/common/698316aecf20e0a251148fdb_kontrek-project-details-Skyline-tower-small-p-1080.webp 1080w, /images/common/698316aecf20e0a251148fdb_kontrek-project-details-Skyline-tower-small.webp 1570w" className="fda-portfolio-image fda-image-effect" />
                                    <div data-w-id="52709feb-03ee-aa06-aeac-99f253a673e1" className="fda-main-overlay">
                                        <div className="fda-inside-overlay"></div>
                                        <div className="fda-outside-overlay"></div>
                                    </div>
                                </div>
                                <div data-w-id="072db1ba-5642-d5c7-da93-5bf0071d8960" className="fda-work-card-text-content fda-position-relative">
                                    <div className="fda-work-card-text-main-wrap fda-overflow-hidden fda-position-relative">
                                        <div data-w-id="072db1ba-5642-d5c7-da93-5bf0071d8962" className="fda-work-card-text-wrapper fda-overflow-hidden">
                                            <div className="fda-work-card-icon-wrapper">
                                                <img width="24" height="12" alt="Kontix-home-one-our-work-arrow-icon-one-webflow-ecommerce-template" src="/images/project-details/698316aecf20e0a251148f44_kontix-home-one-our-work-arrow-icon-one-webflow-ecommerce-template.svg" loading="lazy" data-w-id="072db1ba-5642-d5c7-da93-5bf0071d8964" className="fda-work-grey-arrow" />
                                            </div>
                                            <div className="fda-work-subtext-wrapper">
                                                <div data-w-id="072db1ba-5642-d5c7-da93-5bf0071d8966" className="fda-text-style-h6 fda-text-one">Skyline tower </div>
                                                <div data-w-id="072db1ba-5642-d5c7-da93-5bf0071d8967" className="fda-text-style-h6 fda-text-two">( New York, USA )</div>
                                            </div>
                                        </div>
                                        <div className="fda-work-card-icon-wrapper fda-landscape-display-none">
                                            <img width="24" height="12" alt="Kontix-home-one-our-work-arrow-icon-one-webflow-ecommerce-template" src="/images/project-details/698316aecf20e0a251148f44_kontix-home-one-our-work-arrow-icon-one-webflow-ecommerce-template.svg" loading="lazy" data-w-id="072db1ba-5642-d5c7-da93-5bf0071d8969" className="fda-work-white-arrow" />
                                        </div>
                                        <div data-w-id="072db1ba-5642-d5c7-da93-5bf0071d896a" className="fda-work-grey-line"></div>
                                        <div data-w-id="072db1ba-5642-d5c7-da93-5bf0071d896b" className="fda-work-black-line"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </main>
      <Footer />
    </>
  );
}

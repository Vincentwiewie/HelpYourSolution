"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className="navbar-section">
        <div className="techvio-responsive-nav">
          <div className="container">
            <div className="techvio-responsive-menu">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="/assets/img/logo.png"
                    className="white-logo"
                    alt="logo"
                  />
                  <img
                    src="/assets/img/logo-black.png"
                    className="black-logo"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="techvio-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <img
                  src="/assets/img/logo.png"
                  className="white-logo"
                  alt="logo"
                />
                <img
                  src="/assets/img/logo-black.png"
                  className="black-logo"
                  alt="logo"
                />
              </a>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      onClick={() => {
                        router.push("/main");
                      }}
                      className="nav-link"
                    >
                      Home Page
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={() => {
                        router.push("/about");
                      }}
                      className="nav-link"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      Home Service<i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => {
                            router.push("/HomeService/air-conditioner");
                          }}
                        >
                          Air Conditioner
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => {
                            router.push("/HomeService/pipe");
                          }}
                        >
                          Water Pipe Builder
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => {
                            router.push("/HomeService/welder");
                          }}
                        >
                          Welder services, iron railings
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => {
                            router.push("/HomeService/plafon");
                          }}
                        >
                          Plafon
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => {
                            router.push("/HomeService/furniture");
                          }}
                        >
                          Furniture
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => {
                            router.push("/HomeService/keramik");
                          }}
                        >
                          Keramik
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      Other Service<i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => {
                            router.push("/OtherService/bus");
                          }}
                        >
                          Bus
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => {
                            router.push("/OtherService/consultant");
                          }}
                        >
                          Consultant
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => {
                            router.push("/OtherService/contractor");
                          }}
                        >
                          Contractor
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => {
                            router.push("/OtherService/helper");
                          }}
                        >
                          OutSourcing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => {
                            router.push("/OtherService/garden-animal");
                          }}
                        >
                          Garden Animal Care
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => {
                            router.push("/OtherService/insurance");
                          }}
                        >
                          Insurance
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => {
                            router.push("/OtherService/property");
                          }}
                        >
                          Property
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item">
                    <a href="#" className="nav-link">
                      Portfolio <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="portfolio.html" className="nav-link">
                          Portfolio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="single-portfolio.html" className="nav-link">
                          Portfolio Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Pages <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="about.html" className="nav-link">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="team.html" className="nav-link">
                          Team
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pricing.html" className="nav-link">
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="error-404.html" className="nav-link">
                          404 Error
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">
                          FAQ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="coming-soon.html" className="nav-link">
                          Coming Soon
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="terms-condition.html" className="nav-link">
                          Terms & Conditions
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="privacy-policy.html" className="nav-link">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Blog <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog.html" className="nav-link">
                          Blog Grid
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-2.html" className="nav-link">
                          Blog Right Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="single-blog.html" className="nav-link">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Contact
                    </a>
                  </li> */}
                </ul>
                <div className="other-option">
                  <a
                    className="default-btn"
                    href="https://api.whatsapp.com/send?phone=089632401125"
                  >
                    Contact US <span></span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

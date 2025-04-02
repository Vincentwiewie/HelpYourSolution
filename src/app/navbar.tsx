"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  function Navigate(params: string) {
    router.push(params);
  }

  setTimeout(() => {
    const link = document.querySelectorAll(".nav-link");
    console.log(link);
    link.forEach(function (item) {
      return item.addEventListener("click", function () {
        Navigate(item.id);
      });
    });
  }, 500);

  return (
    <>
      <div className="navbar-section">
        <div className="techvio-responsive-nav">
          <div className="container">
            <div className="techvio-responsive-menu">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="../assets/img/logo.png"
                    className="white-logo"
                    alt="logo"
                  />
                  <img
                    src="../assets/img/logo-black.png"
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
              <a className="navbar-brand">
                <img
                  src="../assets/img/logo.png"
                  className="white-logo"
                  alt="logo"
                />
                <img
                  src="../assets/img/logo-black.png"
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
                    <a id="/" className="nav-link">
                      Home Page
                    </a>
                  </li>
                  <li className="nav-item">
                    <a id="/about" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a>
                      Home Service<i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="/HomeService/air-conditioner"
                        >
                          Air Conditioner
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/pipe">
                          Water Pipe Builder
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/welder">
                          Welder services, iron railings
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/plafon">
                          Plafon
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/furniture">
                          Furniture
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/keramik">
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
                        <a className="nav-link" id="/OtherService/bus">
                          Bus
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/consultant">
                          Consultant
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/contractor">
                          Contractor
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/helper">
                          OutSourcing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="/OtherService/garden-animal"
                        >
                          Garden Animal Care
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/insurance">
                          Insurance
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/property">
                          Property
                        </a>
                      </li>
                    </ul>
                  </li>
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

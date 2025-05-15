"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Navbar() {
  const router = useRouter();

  function Navigate(params: string) {
    router.push(params);
  }

  useEffect(() => {
    setTimeout(() => {
      const link = document.querySelectorAll(".nav-link");
      console.log(link);
      link.forEach(function (item) {
        return item.addEventListener("click", function () {
          Navigate(item.id);
        });
      });
    }, 500);
  }, []);

  return (
    <>
      <div className="navbar-section">
        <div className="techvio-responsive-nav">
          <div className="container">
            <div className="techvio-responsive-menu">
              <div className="logo">
                <a href="index.html">
                  {/* <img
                    src="../assets/img/logo.png"
                    className="white-logo"
                    alt="logo"
                  />
                  <img
                    src="../assets/img/logo-black.png"
                    className="black-logo"
                    alt="logo"
                  /> */}
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
                  src="../assets/img/HYSlogo2.jpeg"
                  className="white-logo"
                  alt="logo"
                  style={{
                    width: "120px",
                    height: "100px",
                    background: "none",
                  }}
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
                      Tentang Kami
                    </a>
                  </li>
                  <li className="nav-item">
                    <a>
                      Layanan Rumah<i className="fas fa-chevron-down"></i>
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
                          Layanan Pipa Bocor
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/welder">
                          Jasa las, pagar besi
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/plafon">
                          Plafon
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/furniture">
                          Furnitur
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/keramik">
                          Keramik
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/lesson">
                          Les private
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      Layanan Lainnya<i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/bus">
                          Bus
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/consultant">
                          Konsultan Hukum Industri
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/contractor">
                          Kontraktor
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/outsourcing">
                          Outsourcing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/helper">
                          Asisten Rumah Tangga
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="/OtherService/garden-animal"
                        >
                          Perawatan Hewan
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/insurance">
                          Ansuransi
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/property">
                          Properti
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/arsitek">
                          Arsitek
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/surat">
                          Surat
                        </a>
                      </li>
                      {/* <li className="nav-item">
                        <a className="nav-link" id="/OtherService/dealer">
                          Dealer
                        </a>
                      </li> */}
                    </ul>
                  </li>
                </ul>
                <div className="other-option">
                  <a
                    className="default-btn"
                    href="https://api.whatsapp.com/send?phone=081284691689"
                  >
                    Hubungi Kami <span></span>
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

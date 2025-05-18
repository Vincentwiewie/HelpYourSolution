"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Navbar() {
  const router = useRouter();

  function Navigate(params: string) {
    router.replace(params);
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
                          Jasa Cuci/Pasang AC
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/pipe">
                          Jasa pemasangan/perbaikan Pipa Air
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/welder">
                          Jasa las teralis/jerjak besi
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/plafon">
                          Jasa Plafon
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/furniture">
                          Jasa Furniture
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/keramik">
                          Jasa Keramik
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/lesson">
                          Jasa Les private
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
                          Jasa Bus
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/consultant">
                          Jasa Konsultan Hukum Industri
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/contractor">
                          Jasa Kontraktor
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/outsourcing">
                          Jasa Outsourcing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/helper">
                          Jasa Layanan rumah
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="/OtherService/garden-animal"
                        >
                          Jasa Perawatan Hewan
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/insurance">
                          Jasa Asuransi
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/property">
                          Jasa Properti
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/arsitek">
                          Jas Arsitek
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/surat">
                          Jas pengurusan surat surat
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

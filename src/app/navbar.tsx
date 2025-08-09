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
            <div className="techvio-responsive-menu d-flex flex-row">
              <div className="logo">
                <img
                  src="./assets/img/hyslogo.png"
                  className="white-logo"
                  alt="logo"
                  style={{
                    width: "55px",
                    height: "25px",
                    background: "none",
                  }}
                />
              </div>
              <h6
                className="margin-auto"
                style={{ color: "Red", margin: "auto" }}
              >
                HYS Service
              </h6>
            </div>
          </div>
        </div>
        <div className="techvio-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand">
                <img
                  src="./assets/img/hyslogo.png"
                  className="white-logo"
                  alt="logo"
                  style={{
                    width: "150px",
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
                      Jasa Layanan Rumah
                      <i className="fas fa-chevron-down"></i>
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
                          Jasa Pemasangan Plafon
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/furniture">
                          Jasa Pembuatan Perabotan/Furniture
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/keramik">
                          Jasa Pemasangan Keramik
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/helper">
                          Jasa Asisten Rumah Tangga
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/HomeService/lesson">
                          Jasa Bimbingan Belajar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      Jasa Layanan Lainnya
                      <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/bus">
                          Jasa Bus
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/consultant">
                          Jasa Konsultan Hukum Hubungan Industrial
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/contractor">
                          Jasa Kontraktor
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/outsourcing">
                          Jasa Outsourcing Tenaga Kerja
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
                          Jasa Asuransi Kesehatan
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/car">
                          Jasa Asuransi Mobil
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/rumah">
                          Jasa Asuransi Property
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/property">
                          Jasa Properti
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/arsitek">
                          Jasa Arsitek
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="/OtherService/surat">
                          Jasa pengurusan surat surat
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
                    href="https://api.whatsapp.com/send?phone=6281282288099"
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

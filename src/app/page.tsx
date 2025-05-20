"use client";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const router = useRouter();
  return (
    <>
      <header className="slider slider-prlx">
        <div className="swiper-container parallax-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="bg-img valign slidetop">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-12">
                      <div className="caption">
                        <ul className="social-icon-list">
                          <li>
                            <a href="https://www.facebook.com/share/16GAX2eF6W/">
                              {" "}
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fab fa-youtube"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/helpyoursolution?igsh=MThlcDVtYmU0Mnk0cw==">
                              {" "}
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                        <h1>
                          Kami Menyediakan Berbagai Macam Solusi Jasa Layanan
                          Untuk Anda
                        </h1>
                        <p>
                          Kami Menyediakan Berbagai Macam Solusi Jasa Layanan
                          untuk Anda, Kami Ahli memberikan Solusi Jasa Layanan
                          dalam segala Hal mulai dari Jasa Cuci/Pasang AC, Jasa
                          Pasang/Cuci ataupun Perbaikan Saluran pipa Dan
                          pemasangan peralatan, plafon, karamik sampai dengan
                          Jasa Layanan skala Industrial
                        </p>
                        <div className="banner-btn home-slider-btn">
                          <a
                            onClick={() =>
                              router.push("/HomeService/air-conditioner")
                            }
                            className="default-btn-one"
                          >
                            Ke Halaman Layanan Rumah<span></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-img valign slideback">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-12">
                      <div className="caption">
                        <ul className="social-icon-list">
                          <li>
                            <a href="https://www.facebook.com/share/16GAX2eF6W/">
                              {" "}
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fab fa-youtube"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/helpyoursolution?igsh=MThlcDVtYmU0Mnk0cw==">
                              {" "}
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                        <h1>
                          Kami juga menyediakan berbagai layanan seperti layanan
                          bus, dan asuransi.
                        </h1>
                        <p>
                          HYS tidak hanya mengkhususkan diri dalam solusi
                          layanan rumah yang komprehensif, tetapi juga
                          memperluas penawarannya ke berbagai layanan penting,
                          memastikan bahwa kebutuhan Anda terpenuhi sepenuhnya.
                          Selain perbaikan, pemeliharaan, dan peningkatan rumah,
                          Dan Jasa Layanan industri kami juga menyediakan
                          layanan bus yang nyaman untuk transportasi yang mudah
                          untuk memastikan kebutuhan kesehatan Anda terpenuhi,
                          dan opsi asuransi yang andal untuk ketenangan pikiran.
                        </p>
                        <div className="banner-btn home-slider-btn">
                          <a
                            onClick={() =>
                              router.push("/HomeService/air-conditioner")
                            }
                            className="default-btn-one"
                          >
                            Ke Halaman Layanan Lainnya <span></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="control-text">
            <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
              <span className="arrow prv"></span>
            </div>
            <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
              <span className="arrow nxt"></span>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </header>
    </>
  );
}

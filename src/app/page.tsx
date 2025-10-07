"use client";
import { useRouter } from "next/navigation";
import About from "../app/about/page";
export default function MainPage() {
  const router = useRouter();

  console.log(process.env.NEXT_PUBLIC_BASE_PATH);
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
                          dalam segala Hal mulai dari berbagai macam kebutuhan
                          Jasa seperti Jasa Perawatan AC,Jasa Perabotan,Jasa
                          Terali Besi,Jasa Perabotan,Jasa Asisten Rumah Tangga,
                          Jasa Bimbingan Belajar,Jasa Perawatan Hewan
                        </p>
                        <div className="banner-btn home-slider-btn">
                          <a
                            onClick={() => router.push("/HomeService/pipe")}
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
                          Kontraktor Dan OutSourcing.
                        </h1>
                        <p>
                          HYS tidak hanya mengkhususkan diri dalam solusi
                          layanan rumah yang komprehensif, tetapi juga
                          memperluas penawarannya ke berbagai layanan penting,
                          memastikan bahwa kebutuhan Anda terpenuhi sepenuhnya.
                          Kami Juga Menyediakan Jasa layanan Lainnya Seperti
                          Jasa Sewa bus, Mobil Ataupun Property,Jasa
                          Pertukangan,Jasa Kontraktor,Jasa Property,Jasa
                          Arsitek,Jasa OutSourcing,Jasa Konsultan Hukum,Jasa
                          Pengurusan Surat Dan Dokumen.
                        </p>
                        <div className="banner-btn home-slider-btn">
                          <a
                            onClick={() =>
                              router.push("/OtherService/contractor")
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

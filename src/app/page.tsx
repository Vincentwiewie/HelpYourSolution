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
              <div
                className="bg-img valign"
                data-background="assets/img/slider-1.jpg"
                data-overlay-dark="5"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-12">
                      <div className="caption">
                        <ul className="social-icon-list">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-x-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
                        <h1>We Provide Many Kind of Home Service Solutions</h1>
                        <p>
                          We specialize in everything from routine maintenance
                          and emergency repairs to home improvements,
                          landscaping, and appliance installations. Our mission
                          is to provide reliable, high-quality services that
                          ensure your home stays safe, functional, and
                          comfortable.
                        </p>
                        <div className="banner-btn home-slider-btn">
                          <a
                            onClick={() =>
                              router.push("/HomeService/air-conditioner")
                            }
                            className="default-btn-one"
                          >
                            Go to Home Services<span></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="bg-img valign"
                data-background="assets/img/slider-2.jpg"
                data-overlay-dark="5"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-12">
                      <div className="caption">
                        <ul className="social-icon-list">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-x-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
                        <h1>
                          We Also Provide Many Services Like Bus Services,
                          Medicine and Insurance
                        </h1>
                        <p>
                          HomeCarePro not only specializes in comprehensive home
                          service solutions but also extends its offerings to a
                          wide range of essential services, ensuring that your
                          needs are fully met. In addition to home repairs,
                          maintenance, and improvements, we also provide
                          convenient bus services for easy transportation,
                          medicine delivery to ensure your health needs are
                          taken care of, and reliable insurance options for
                          peace of mind
                        </p>
                        <div className="banner-btn home-slider-btn">
                          <a
                            onClick={() =>
                              router.push("/HomeService/air-conditioner")
                            }
                            className="default-btn-one"
                          >
                            Go to Other Services <span></span>
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

"use client";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <section className="footer-subscribe-wrapper">
        {/* <div className="subscribe-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="subscribe-content">
                  <h2>Sign Up Our Newsletter</h2>
                  <p>
                    We Offer An Informative Monthly Technology Newsletter -
                    Check It Out.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                    autoComplete="off"
                  />
                  <button type="submit">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
        </div> */}

        <div className="footer-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <a className="footer-logo" href="#">
                    <img
                      src="../assets/img/HYSlogo2.jpeg"
                      className="white-logo"
                      style={{ width: "100px", height: "50px" }}
                      alt="logo"
                    />
                  </a>
                  <p>
                    Di HelpYourSolution, kami mengkhususkan diri dalam
                    memberikan layanan berkualitas tinggi, andal, dan
                    profesional untuk memenuhi semua kebutuhan Anda. Baik Anda
                    mencari instalasi ahli, perawatan berkelanjutan, atau
                    perbaikan cepat dan efisien, perawatan hewan peliharaan,
                    sewa bus, kami siap membantu Anda.
                  </p>
                  <ul className="footer-social">
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
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Layanan Terbaik Kami</h3>
                  </div>
                  <ul className="footer-quick-links">
                    <li>
                      <a
                        onClick={() =>
                          router.push("/HomeService/air-conditioner")
                        }
                      >
                        Air Conditioner
                      </a>
                    </li>
                    <li>
                      <a onClick={() => router.push("/HomeService/pipe")}>
                        Pipa Bocor
                      </a>
                    </li>
                    <li>
                      <a onClick={() => router.push("/HomeService/furniture")}>
                        Furniture
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Tautan Berguna</h3>
                  </div>
                  <ul className="footer-quick-links">
                    <li>
                      <a
                        onClick={() => {
                          router.push("/about");
                        }}
                      >
                        Tentang Kami
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          router.push("/companyProfile");
                        }}
                      >
                        Profile Perusahaan
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Informasi Kontak</h3>
                  </div>
                  <div className="footer-info-contact">
                    <i className="flaticon-phone-call"></i>
                    <h3>Telepon</h3>
                    <span>
                      <a href="https://api.whatsapp.com/send?phone=081282288099">
                        0812-8228-8099
                      </a>
                    </span>
                  </div>
                  <div className="footer-info-contact">
                    <i className="flaticon-envelope"></i>
                    <h3>Email</h3>
                    <span>
                      <a href="https://mail.google.com/mail/u/hysbusinessservice@gmail.com">
                        hysbusinessservice@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="footer-info-contact">
                    <i className="flaticon-placeholder"></i>
                    <h3>Alamat</h3>
                    <span>Cemara Asri, East Medan, North Sumatra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                <i className="far fa-copyright"></i>{" "}
                {new Date().getFullYear() + " "}
                HelpYourSolution - All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <a onClick={() => router.push("/privacyPolicy")}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="go-top">
        <i className="fas fa-chevron-up"></i>
        <i className="fas fa-chevron-up"></i>
      </div>
    </>
  );
}

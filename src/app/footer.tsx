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
                      src="/assets/img/logo.png"
                      className="white-logo"
                      alt="logo"
                    />
                  </a>
                  <p>
                    At MarketJasa, we specialize in delivering high-quality,
                    reliable, and professional services to meet all your needs.
                    Whether you're looking for expert installations, ongoing
                    maintenance, or fast, efficient repairs, pet care, bus rent,
                    we’ve got you covered.
                  </p>
                  <ul className="footer-social">
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Our Services</h3>
                  </div>
                  <ul className="footer-quick-links">
                    <li>
                      <a href="#">Startup Solutions</a>
                    </li>
                    <li>
                      <a href="#">Renting Solutions</a>
                    </li>
                    <li>
                      <a href="#">Consulting Services</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul className="footer-quick-links">
                    <li>
                      <a
                        onClick={() => {
                          router.push("/about");
                        }}
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Contact Info</h3>
                  </div>
                  <div className="footer-info-contact">
                    <i className="flaticon-phone-call"></i>
                    <h3>Phone</h3>
                    <span>
                      <a href="tel:089632401125">089632401125</a>
                    </span>
                  </div>
                  <div className="footer-info-contact">
                    <i className="flaticon-envelope"></i>
                    <h3>Email</h3>
                    <span>
                      <a href="MarketJasa@gmail.com">MarketJasa@gmail.com</a>
                    </span>
                  </div>
                  <div className="footer-info-contact">
                    <i className="flaticon-placeholder"></i>
                    <h3>Address</h3>
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
                <i className="far fa-copyright"></i> {new Date().getFullYear()}
                MarketJasa - All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <a href="terms-condition.html">Terms & Conditions</a>
                </li>
                <li>
                  <a href="privacy-policy.html">Privacy Policy</a>
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

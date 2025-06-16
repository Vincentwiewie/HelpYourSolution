"use client";

import { useState } from "react";

export default function Property() {
  const location: { [index: string]: string } = {
    cemara:
      "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7963.599243939765!2d98.7015678203983!3d3.633170443873319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1746863613787!5m2!1sid!2sid",
    citraland:
      "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7963.795205097148!2d98.73194581069157!3d3.61089794719145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1746864018690!5m2!1sid!2sid",
    asia: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.004007287849!2d98.7020488578134!3d3.5865540599660566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131a9f6c49a59%3A0x89306677b05cb232!2sJl.%20Komp.%20Asia%20Mega%20Mas%2C%20Sukaramai%20II%2C%20Kec.%20Medan%20Area%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020224!5e0!3m2!1sid!2sid!4v1746864143152!5m2!1sid!2sid",
  };

  const [Lockey, setLockey] = useState<string>("cemara");
  return (
    <>
      <div className="page-title-area2 item-bg1 property">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container mt-5" style={{ paddingTop: "20vh" }}>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
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
                    <h2 className="text-white mb-1">
                      HYS Melayani Jual Beli Sewa Property
                    </h2>
                    <p>
                      Sedang mencari properti yang sempurna untuk dijadikan
                      rumah atau peluang investasi baru? Sekaranglah saatnya
                      untuk menjelajahi berbagai properti kami yang sesuai
                      dengan setiap kebutuhan dan anggaran. Baik Anda mencari
                      apartemen yang nyaman, rumah keluarga yang luas, atau
                      ruang komersial utama, kami siap membantu Anda! Properti
                      kami berlokasi di area yang diminati, menawarkan nilai
                      yang besar dan potensi jangka panjang.
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn-one">
                        Hubungi Kami<span></span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-md-12" data-tilt>
                <div className="banner-image">
                  <img src="/assets/img/AcOn.jpg" alt="image" />
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="contact-info-wrapper bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h6 className="sub-title">Temukan Kami</h6>
                <h2>Informasi Kontak</h2>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              onClick={() => {
                setLockey("cemara");
              }}
            >
              <img
                src="../assets/img/property3.jpg"
                alt="image"
                style={{ height: "280px" }}
              />
              <div
                className={
                  Lockey == "cemara"
                    ? "contact-info-content bg-primary bg-opacity-10"
                    : "contact-info-content"
                }
              >
                <h5>Cemara Asri</h5>
                <p>Jalan Cemara Asri</p>
                <a href="https://api.whatsapp.com/send?phone=081282288099">
                  080 707 555-321
                </a>
                <a href="mailto:demo@example.com">demo@example.com</a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              onClick={() => {
                setLockey("citraland");
              }}
            >
              <img
                src="../assets/img/property2.jpg"
                alt="image"
                style={{ height: "280px" }}
              />
              <div
                className={
                  Lockey == "citraland"
                    ? "contact-info-content bg-primary bg-opacity-10"
                    : "contact-info-content"
                }
              >
                <h5>Citraland Pancing</h5>
                <p>Jalan Pancing.</p>
                <a href="https://api.whatsapp.com/send?phone=081282288099">
                  080 707 555-321
                </a>
                <a href="mailto:demo@example.com">demo@example.com</a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              onClick={() => {
                setLockey("asia");
              }}
            >
              <img
                src="../assets/img/property5.jpeg"
                alt="image"
                style={{ height: "280px" }}
              />
              <div
                className={
                  Lockey == "asia"
                    ? "contact-info-content bg-primary bg-opacity-10"
                    : "contact-info-content"
                }
              >
                <h5>Asia Megamas</h5>
                <p>Jalan Asia</p>
                <a href="https://api.whatsapp.com/send?phone=081282288099">
                  081282288099
                </a>
                <a href="mailto:demo@example.com">demo@example.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map-section">
        <div className="google-map">
          <iframe src={location[Lockey]}></iframe>
        </div>
      </div>
    </>
  );
}

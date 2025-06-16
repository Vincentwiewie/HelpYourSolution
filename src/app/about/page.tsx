export default function about() {
  return (
    <>
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>About Us</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="feature-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="feature-single-item">
                <img src="../assets/img/icon/feature-icon-1.svg" alt="icon" />
                <h3>Fleksibilitas & Responsif</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-single-item">
                <img src="assets/img/icon/feature-icon-2.svg" alt="icon" />
                <h3>Tim Yang Berdedikasi</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-single-item">
                <img src="assets/img/icon/feature-icon-3.svg" alt="icon" />
                <h3>Fokus pada Bisnis</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area section-padding">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h6 className="sub-title">Tentang Perusahaan Kami</h6>
                <h2>
                  Memberikan Bisnis Anda Layanan Berkualitas adalah Semangat
                  Kami
                </h2>
                <p>
                  Memberikan layanan terbaik bagi bisnis Anda bukan sekadar
                  pekerjaan kami; itu adalah hasrat kami. Kami memahami bahwa
                  setiap bisnis itu unik, dan kami berusaha untuk menawarkan
                  solusi khusus yang mendorong kesuksesan.
                </p>
                <div className="skills">
                  <div className="skill-item">
                    <h6>
                      Konsulting <em>80%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="progres" data-value="80%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h6>
                      Layanan <em>90%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="progres" data-value="90%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h6>
                      Hasil <em>95%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="progres" data-value="95%"></div>
                    </div>
                  </div>
                </div>
                <div className="about-btn-box">
                  <a className="default-btn" href="about.html">
                    Pelajari lebih lanjut <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="assets/img/blog-details/3.jpg" alt="About image" />
                <div className="years-design">
                  <h2>23</h2>
                  <h5>Tahun Dalam Pengalaman</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="counter-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 counter-item">
              <div className="single-counter">
                <div className="counter-contents">
                  <h2>
                    <span className="counter-number">23</span>
                    <span>+</span>
                  </h2>
                  <h3 className="counter-heading">Tahun Membantu Bisnis</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 counter-item">
              <div className="single-counter">
                <div className="counter-contents">
                  <h2>
                    <span className="counter-number">250</span>
                    <span>+</span>
                  </h2>
                  <h3 className="counter-heading">Karyawan yang Bekerja</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 counter-item">
              <div className="single-counter">
                <div className="counter-contents">
                  <h2>
                    <span className="counter-number">4500</span>
                    <span>+</span>
                  </h2>
                  <h3 className="counter-heading">Proyek Selesai</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 counter-item">
              <div className="single-counter">
                <div className="counter-contents">
                  <h2>
                    <span className="counter-number">3000</span>
                    <span>+</span>
                  </h2>
                  <h3 className="counter-heading">Pelanggan yang Puas</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="team-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h6 className="sub-title">Anggota Tim</h6>
                <h2>Tim Ahli</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-team-box">
                <div className="team-image">
                  <img src="assets/img/team/team-1.jpg" alt="team" />
                  <div className="team-social-icon">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>Herwin Huang</h3>
                  <span>Founder, CEO</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-team-box">
                <div className="team-image">
                  <img src="assets/img/team/team-2.jpg" alt="team" />
                  <div className="team-social-icon">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>----</h3>
                  <span>Co-Founder, CTO</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-team-box">
                <div className="team-image">
                  <img src="assets/img/team/team-3.jpg" alt="team" />
                  <div className="team-social-icon">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>----</h3>
                  <span>Chief Creative Officer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-team-box">
                <div className="team-image">
                  <img src="assets/img/team/team-4.jpg" alt="team" />
                  <div className="team-social-icon">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>----</h3>
                  <span>Creative Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="workprocess-section bg-grey section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h6 className="sub-title">Proses Kerja 4 Langkah</h6>
                <h2>Proses Kerja</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="workprocess-single-item">
                <div className="workprocess-icon-box">
                  <img
                    src="assets/img/icon/workprocess-icon-1.svg"
                    alt="icon"
                  />
                </div>
                <div className="workprocess-info">
                  <h3>Pemesanan & Konsultasi</h3>
                  <p>
                    Hubungi kami di nomor kami untuk berbicara langsung dengan
                    tim layanan pelanggan kami. <br /> Konsultasikan dengan
                    layanan pelanggan kami apa pun kebutuhan Anda, kami akan
                    memberikan solusi untuk setiap masalah Anda
                  </p>
                </div>
                <div className="workprocess-number-bg">
                  <span>01</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="workprocess-single-item">
                <div className="workprocess-icon-box">
                  <img
                    src="assets/img/icon/workprocess-icon-2.svg"
                    alt="icon"
                  />
                </div>
                <div className="workprocess-info">
                  <h3>Pembayaran & Jadwal</h3>
                  <p>
                    Di HelpYourSolution, kami memudahkan Anda untuk menjadwalkan
                    layanan dan menangani pembayaran secara efisien. <br />{" "}
                    metode pembayaran kami beragam termasuk debit, kredit,
                    tunai, eWallet, dan lain-lain
                  </p>
                </div>
                <div className="workprocess-number-bg">
                  <span>02</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="workprocess-single-item">
                <div className="workprocess-icon-box">
                  <img
                    src="assets/img/icon/workprocess-icon-3.svg"
                    alt="icon"
                  />
                </div>
                <div className="workprocess-info">
                  <h3>Proses Kerja Dan Pelayanan</h3>
                  <p>
                    Di HelpYourSolution, kami percaya dalam memberikan
                    pengalaman yang bebas hambatan dari awal hingga akhir.
                    Proses kami memastikan bahwa kebutuhan Anda terpenuhi dengan
                    profesionalisme dan perhatian.
                  </p>
                </div>
                <div className="workprocess-number-bg">
                  <span>03</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="workprocess-single-item">
                <div className="workprocess-icon-box">
                  <img
                    src="assets/img/icon/workprocess-icon-4.svg"
                    alt="icon"
                  />
                </div>
                <div className="workprocess-info">
                  <h3>Lengkap & Bergaransi</h3>
                  <p>
                    Kami menawarkan garansi 1 bulan untuk semua layanan yang
                    diberikan. Jika ada masalah yang timbul terkait dengan
                    layanan yang kami berikan selama periode ini, kami akan
                    mengatasi masalah tersebut tanpa biaya tambahan kepada Anda.
                  </p>
                </div>
                <div className="workprocess-number-bg">
                  <span>04</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hire-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12">
              <div className="hire-content">
                <h6 className="sub-title">Ingin bekerja dengan kami?</h6>
                <h2>
                  Transformasikan dan Kembangkan Bisnis Anda Secara Digital
                </h2>
                <p>
                  Di HelpYourSolution, kami selalu mencari tim yang berbakat dan
                  termotivasi untuk membantu kami memberikan layanan luar biasa
                  di berbagai industri. Kami memiliki peluang menarik bagi Anda
                  dan tim Anda untuk tumbuh dan berkembang.
                </p>
                <div className="hire-btn">
                  <a
                    className="default-btn"
                    href="https://api.whatsapp.com/send?phone=081282288099"
                  >
                    Hubungi Sekarang<span></span>
                  </a>
                  <a
                    className="default-btn-one"
                    href="https://mail.google.com/mail/u/hysbusinessservice@gmail.com"
                  >
                    Email Kami<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-section pt-100 pb-70">
        <div className="container">
          <div className="partner-title">
            <h6 className="sub-title">Tim Propesional</h6>

            <h2>Vendor Kami</h2>
          </div>
          <div className="partner-list">
            <div className="partner-item">
              <a href="#0">
                <img src="assets/img/partner/client-1.png" alt="image" />
              </a>
            </div>
            <div className="partner-item">
              <a href="#0">
                <img src="assets/img/partner/client-2.png" alt="image" />
              </a>
            </div>
            <div className="partner-item">
              <a href="#0">
                <img src="assets/img/partner/client-3.png" alt="image" />
              </a>
            </div>
            <div className="partner-item">
              <a href="#0">
                <img src="assets/img/partner/client-4.png" alt="image" />
              </a>
            </div>
            <div className="partner-item">
              <a href="#0">
                <img src="assets/img/partner/client-5.png" alt="image" />
              </a>
            </div>
            <div className="partner-item">
              <a href="#0">
                <img src="assets/img/partner/client-6.png" alt="image" />
              </a>
            </div>
            <div className="partner-item">
              <a href="#0">
                <img src="assets/img/partner/client-7.png" alt="image" />
              </a>
            </div>
            <div className="partner-item">
              <a href="#0">
                <img src="assets/img/partner/client-8.png" alt="image" />
              </a>
            </div>
            <div className="partner-item">
              <a href="#0">
                <img src="assets/img/partner/client-1.png" alt="image" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

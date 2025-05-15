import { portofolioModel, testimonialModel } from "@/app/interface/Model";
import Counter from "@/components/counter";
import Portofolio from "@/components/portofolio";
import Testimonial from "@/components/testimonial";

export default function gardenAnimal() {
  const data: portofolioModel = {
    title: "Galeri Hewan",
    subTitle: "",
    category: [],
    data: [
      {
        label: "Hubungi Sekarang",
        subLabel: "HYS Animal Care",
        image: "../assets/img/animal1.jpg",
        type: "classic",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "HYS Animal Care",
        image: "../assets/img/animal2.jpg",
        type: "classic",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "HYS Animal Care",
        image: "../assets/img/animal3.jpg",
        type: "classic",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "HYS Animal Care",
        image: "../assets/img/animal4.jpg",
        type: "cozy",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "HYS Animal Care",
        image: "../assets/img/animal5.jpg",
        type: "cozy",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "HYS Animal Care",
        image: "../assets/img/animal6.jpg",
        type: "cozy",
      },
    ],
  };
  const dataCounter = {
    image: "garden",
    counterModel: [
      {
        title: "100",
        icon: "+",
        subtitle: "Pelayanan Memuaskan",
      },
      {
        title: "100",
        icon: "%",
        subtitle: "Pelanggan Puas",
      },
      {
        title: "100",
        icon: "%",
        subtitle: "Ulasan Positif",
      },
      {
        title: "10",
        icon: "+",
        subtitle: "Pengalaman",
      },
    ],
  };

  const dataTestimonial: testimonialModel[] = [
    {
      name: "Lina Marlina",
      image: "../assets/img/client/testimonial-1.jpg",
      country: "Bandung",
      content:
        "Dokter hewan di Klinik Satwa Sehat benar-benar luar biasa. Anjing saya sempat muntah-muntah selama dua hari dan saya panik. Tapi setelah diperiksa, dokter memberikan penjelasan yang tenang dan ramah. Obat yang diberikan langsung bekerja. Sekarang anjing saya sudah aktif kembali! Sangat profesional dan peduli terhadap hewan.",
    },
    {
      name: "Linda",
      image: "../assets/img/client/testimonial-2.jpg",
      country: "Jakarta Selatan",
      content:
        "Saya rutin membawa kucing Persia saya untuk vaksin dan grooming di klinik ini. Dokternya sangat sabar dan telaten, bahkan saat kucing saya rewel. Kliniknya bersih, nyaman, dan pelayanannya cepat. Saya merasa sangat tenang mempercayakan kucing saya di sini",
    },
    {
      name: "Dewi Andriani",
      image: "../assets/img/client/testimonial-3.jpg",
      country: "Sleman",
      content:
        "Sebagai peternak, saya sering butuh konsultasi cepat soal kesehatan kelinci. Dokter hewan di sini sangat responsif, bahkan bisa konsultasi online jika darurat. Mereka tidak hanya mengobati, tapi juga kasih edukasi soal pencegahan penyakit. Sangat membantu dalam menjaga kualitas ternak saya.",
    },
  ];

  return (
    <>
      <div className="home-3 home-section garden">
        <div id="particles-js"></div>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
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
                    Mitra Tepercaya Anda dalam Perawatan Hewan
                    <h1></h1>
                    <p>
                      Sebagai pemilik hewan peliharaan, kita semua menginginkan
                      yang terbaik untuk teman berbulu, berbulu halus, atau
                      bersisik kita. Baik itu memastikan kesehatan mereka,
                      menyediakan perawatan rutin, atau sekadar menawarkan
                      persahabatan saat Anda pergi, layanan perawatan hewan yang
                      tepat dapat membuat semua perbedaan. Di sinilah Hys Animal
                      Care hadir—mitra perawatan hewan yang berdedikasi dan
                      profesional.
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn-two" href="contact.html">
                        Hubungi Kami <span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Counter
        image={dataCounter.image}
        counterDetail={dataCounter.counterModel}
      ></Counter>

      <Portofolio
        title={data.title}
        subTitle={data.subTitle}
        category={data.category}
        data={data.data}
      ></Portofolio>

      <section className="about-area section-padding">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h6 className="sub-title">Tentang HYS Animal Care</h6>
                <h2>
                  profesionalisme dan cinta terhadap hewan adalah tugas kita
                </h2>
                <p>
                  Energi positif dan semangat yang membangkitkan semangat yang
                  dibawa hewan, khususnya hewan peliharaan, ke dalam kehidupan
                  kita melalui cinta dan persahabatan mereka yang tanpa syarat.
                </p>
                <div className="skills">
                  <div className="skill-item">
                    <h6>
                      Konsultasi Perawatan<em>90%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="progres" data-value="90%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h6>
                      Solusi Hewan <em>80%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="progres" data-value="75%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h6>
                      Melayani <em>100%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="progres" data-value="85%"></div>
                    </div>
                  </div>
                </div>
                <div className="about-btn-box">
                  <a className="default-btn" href="about.html">
                    Hubungi Kami <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="../assets/img/garden2.jpg" alt="About image" />
                <div className="years-design">
                  <h2>10</h2>
                  <h5>Tahun Pengalaman</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial value={dataTestimonial}></Testimonial>
    </>
  );
}

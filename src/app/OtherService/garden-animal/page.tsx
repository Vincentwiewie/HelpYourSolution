import { portofolioModel, testimonialModel } from "@/app/interface/Model";
import Counter from "@/components/counter";
import Portofolio from "@/components/portofolio";
import Testimonial from "@/components/testimonial";

export default function gardenAnimal() {
  const data: portofolioModel = {
    title: "Galeri Hewan",
    subTitle: "",
    category: ["dog", "cat"],
    data: [
      {
        label: "Hubungi Sekarang",
        subLabel: "perawatan anjing",
        image: "assets/img/animal1.jpg",
        type: "dog",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "cara merawat anjing yang baik",
        image: "assets/img/animal2.jpg",
        type: "dog",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "tips perawatan anjing dan kucing",
        image: "assets/img/animal3.jpg",
        type: "dog",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "grooming anjing dan kucing",
        image: "assets/img/animal4.jpg",
        type: "dog",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "perawatan kesehatan anjing",
        image: "assets/img/animal5.jpg",
        type: "dog",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "perawatan bulu anjing",
        image: "assets/img/animal6.jpg",
        type: "dog",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "perawatan kucing luar",
        image: "assets/img/cat1.jpeg",
        type: "cat",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "Cara merawat kucing di rumah",
        image: "assets/img/cat2.jpeg",
        type: "cat",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "perawatan kesehatan kucing",
        image: "assets/img/cat3.jpeg",
        type: "cat",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "perawatan kucing",
        image: "assets/img/cat4.jpeg",
        type: "cat",
      },
      {
        label: "Hubungi Sekarang",
        subLabel: "perawatan bulu kucing",
        image: "assets/img/cat5.jpeg",
        type: "cat",
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
      image: "assets/img/profile.jpeg",
      country: "Bandung",
      content:
        "Dokter hewan di Klinik Satwa Sehat benar-benar luar biasa. Ketika anjing saya mengalami muntah-muntah selama dua hari, saya sangat panik. Namun, setelah pemeriksaan, dokter memberikan penjelasan yang jelas, tenang, dan sangat ramah. Obat yang diresepkan segera bekerja, dan kini anjing saya kembali aktif dan sehat. Pelayanan yang profesional dan penuh kepedulian terhadap kesehatan hewan membuat saya sangat merekomendasikan dokter hewan di Klinik Satwa Sehat.",
    },
    {
      name: "Linda",
      image: "assets/img/profile.jpeg",
      country: "Jakarta Selatan",
      content:
        "Saya rutin membawa kucing Persia saya untuk vaksinasi dan grooming di klinik ini. Dokter hewan di sini sangat sabar dan telaten, bahkan saat kucing saya rewel. Klinik yang bersih dan nyaman, serta pelayanan yang cepat membuat saya merasa sangat tenang mempercayakan perawatan kucing saya di sini. Saya sangat merekomendasikan klinik ini untuk perawatan kucing khususnya ras Persia",
    },
    {
      name: "Dewi Andriani",
      image: "assets/img/profile.jpeg",
      country: "Sleman",
      content:
        "Sebagai peternak, saya sering membutuhkan konsultasi cepat mengenai kesehatan kelinci. Dokter hewan di klinik ini sangat responsif dan bahkan menyediakan layanan konsultasi online saat kondisi darurat. Mereka tidak hanya memberikan pengobatan, tetapi juga edukasi penting tentang pencegahan penyakit. Layanan ini sangat membantu saya dalam menjaga kualitas dan kesehatan ternak kelinci",
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
                <img src="assets/img/garden2.jpg" alt="About image" />
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

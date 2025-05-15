import { portofolioModel, testimonialModel } from "@/app/interface/Model";
import Counter from "@/components/counter";
import Portofolio from "@/components/portofolio";
import Testimonial from "@/components/testimonial";

export default function lesson() {
  const data: portofolioModel = {
    title: "Galeri Les Privat",
    subTitle: "",
    category: [],
    data: [
      {
        label: "",
        subLabel: "",
        image: "../assets/img/lessonn1.jpeg",
        type: "classic",
      },
      {
        label: "",
        subLabel: "",
        image: "../assets/img/lessonn2.jpeg",
        type: "classic",
      },
      {
        label: "",
        subLabel: "",
        image: "../assets/img/lessonn3.jpeg",
        type: "classic",
      },
      {
        label: "",
        subLabel: "",
        image: "../assets/img/lesson10.jpeg",
        type: "cozy",
      },
      {
        label: "",
        subLabel: "",
        image: "../assets/img/lesson11.jpeg",
        type: "cozy",
      },
      {
        label: "",
        subLabel: "",
        image: "../assets/img/lesson12.jpeg",
        type: "cozy",
      },
    ],
  };
  const dataCounter = {
    image: "lesson",
    counterModel: [
      {
        title: "100",
        icon: "+",
        subtitle: "Murid Telah Lulus",
      },
      {
        title: "100",
        icon: "%",
        subtitle: "Guru Bersertifikasi",
      },
      {
        title: "100",
        icon: "%",
        subtitle: "Ulasan Positif",
      },
      {
        title: "10",
        icon: "+",
        subtitle: "Guru Pengalaman",
      },
    ],
  };

  const dataTestimonial: testimonialModel[] = [
    {
      name: "Kevin",
      image: "/assets/img/client/testimonial-1.jpg",
      country: "Orang Tua Murid Kelas 5 SD",
      content:
        "Saya sangat puas dengan layanan les privat ini. Anak saya yang sebelumnya kesulitan memahami Matematika sekarang jadi lebih percaya diri dan semangat belajar. Gurunya sabar, ramah, dan mampu menjelaskan materi dengan cara yang mudah dimengerti. Nilai ulangan anak saya juga meningkat signifikan.",
    },
    {
      name: "Maya",
      image: "/assets/img/client/testimonial-2.jpg",
      country: "Siswa SMA",
      content:
        "Les privat ini sangat membantu saya dalam persiapan UTBK. Materi yang diajarkan sangat fokus, banyak latihan soal, dan gurunya paham betul strategi menjawab soal-soal TPS dan TKA. Berkat bimbingan ini, saya berhasil masuk ke jurusan impian saya di universitas negeri.",
    },
    {
      name: "Ardi",
      image: "/assets/img/client/testimonial-3.jpg",
      country: "Mahasiswa Teknik",
      content:
        "Saya mengambil les privat Matematika Dasar untuk perkuliahan semester 1. Awalnya saya merasa minder karena banyak materi SMA yang lupa, tapi pengajarnya sangat sabar dan membantu saya mengejar ketertinggalan. Lesnya fleksibel dan bisa disesuaikan dengan jadwal kuliah saya. Sangat recommended!.",
    },
  ];

  return (
    <>
      <div className="home-3 home-section lesson">
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
                    Urusan Pendidikan Anak Adalah Prioritas Kami
                    <h1></h1>
                    <p>
                      Pendidikan adalah segalanya, karena melalui pendidikan,
                      seseorang dapat membuka jendela dunia, memahami makna
                      hidup, serta membentuk karakter dan cara berpikir yang
                      kritis. Pendidikan bukan hanya tentang menghafal fakta
                      atau memperoleh gelar, melainkan proses seumur hidup yang
                      membentuk manusia menjadi individu yang bijak, mandiri,
                      dan bertanggung jawab. Dalam masyarakat yang maju,
                      pendidikan menjadi fondasi utama dalam menciptakan
                      keadilan sosial, meningkatkan taraf hidup, dan membangun
                      peradaban yang berkelanjutan. Tanpa pendidikan, potensi
                      manusia tidak akan pernah berkembang secara maksimal, dan
                      dunia akan kehilangan arah dalam menghadapi tantangan
                      zaman.
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn-two" href="tel:081284691689">
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
                <h6 className="sub-title">Tentang HYS Education</h6>
                <h2>Guru profesionalisme dan cinta kepada anak anak kecil</h2>
                <p>
                  Guru yang profesional adalah sosok yang tidak hanya menguasai
                  materi pelajaran, tetapi juga mampu menyampaikan ilmu dengan
                  cara yang penuh kasih, sabar, dan menginspirasi. Terutama
                  dalam mendidik anak-anak kecil, peran guru jauh melampaui
                  sekadar mengajar—ia adalah figur teladan, pendengar yang baik,
                  dan pemberi semangat di setiap langkah awal kehidupan anak.
                </p>
                <div className="skills">
                  <div className="skill-item">
                    <h6>
                      Kualitas Pendidikan<em>90%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="progres" data-value="90%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h6>
                      Tingkat Bahagia <em>100%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="progres" data-value="75%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h6>
                      Guru Propesional<em>100%</em>
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
                <img src="../assets/img/lesson2.jpg" alt="About image" />
                <div
                  className="years-design"
                  style={{
                    marginBottom: "25vh",
                    marginLeft: "7vh",
                    borderRadius: "70px",
                  }}
                >
                  <h2>10</h2>
                  <h5>Tahun Pengalaman Dalam Bidang Pendidikan</h5>
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

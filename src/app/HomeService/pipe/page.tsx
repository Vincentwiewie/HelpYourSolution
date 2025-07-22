import {
  cardServiceAnimatedModel,
  portofolioModel,
  testimonialModel,
} from "@/app/interface/Model";
import Portofolio from "@/components/portofolio";
import CardServiceAnimated from "@/components/cardServiceAnimated";
import Testimonial from "@/components/testimonial";

export default function page() {
  const data: portofolioModel = {
    title: "Jasa pemasangan/perbaikan Pipa Air",
    subTitle: "Garansi 100%",
    category: [],
    data: [
      {
        label: "Kontak Pengrajin",
        subLabel: "Peralatan tukang pipa untuk perbaikan saluran air",
        image: "../assets/img/pipe1.jpeg",
        type: "all",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Teknisi memperbaiki pipa air bocor di bawah wastafel",
        image: "../assets/img/pipe7.jpg",
        type: "all",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Pemasangan pipa air bersih dengan alat las pipa",
        image: "../assets/img/pipe3.jpeg",
        type: "all",
      },
    ],
  };

  const dataCardServiceAnimated: cardServiceAnimatedModel[] = [
    {
      image: "../assets/img/plember1.jpg",
      imageHover: "../assets/img/plember1.jpg",
      title:
        "Urusan perpipaan?,Kami Ahlinya pipa, Pipa Rusak? – Kami Tangani Semuanya!",
      alt: "Jasa tukang ledeng memperbaiki saluran air tersumbat",
      content: "",
    },
    {
      image: "../assets/img/plember2.jpg",
      imageHover: "../assets/img/plember2.jpg",
      alt: "Petugas jasa plumbing sedang memasang sambungan pipa PVC",
      title: "Layanan Perpipaan Ahli, Disampaikan dengan Hati-hati",
      content: "",
    },
    {
      image: "../assets/img/plember3.jpg",
      imageHover: "../assets/img/plember3.jpg",
      alt: "Tukang ledeng mengganti pipa air lama dengan pipa baru",
      title: "Layanan Perpipaan yang Terjangkau, Cepat, dan Andal",
      content: "",
    },
    {
      image: "../assets/img/plember4.jpg",
      imageHover: "../assets/img/plember4.jpg",
      alt: "Jasa profesional perbaikan pipa air untuk rumah dan kantor",
      title:
        "Kami Memperbaiki Kebocoran, Pipa, dan Segala Sesuatu di Antaranya!",
      content: "",
    },
    {
      image: "../assets/img/plember5.jpg",
      imageHover: "../assets/img/plember5.jpg",
      alt: "Jasa profesional perbaikan pipa air untuk rumah dan kantor",
      title: "Ahli Perpipaan Lokal Anda – Melayani Anda dengan Integritas",
      content: "",
    },
    {
      image: "../assets/img/plember6.jpg",
      imageHover: "../assets/img/plember6.jpg",
      alt: "Pemasangan pipa air bersih dengan alat las pipa",
      title:
        "Layanan Perpipaan 24/7 – Tersedia Kapan Saja Anda Membutuhkan Kami!",
      content: "",
    },
  ];

  const dataTestimonial: testimonialModel[] = [
    {
      name: "Andri",
      image: "../assets/img/profile.jpeg",
      country: "Agen Propesional",
      content:
        "Bagian terbaik dari jasa perbaikan pipa air ini adalah profesionalisme mereka. Mereka berkomunikasi dengan jelas selama proses perbaikan pipa, datang tepat waktu, dan menyelesaikan pekerjaan dengan cepat serta efisien. Saya sangat menghargai perhatian mereka terhadap keselamatan kerja, yang membuat saya merasa yakin dan tenang selama proses berlangsung. Setelah perbaikan, tidak ada lagi kebocoran pipa, dan rumah saya terasa seperti baru lagi. Layanan mereka benar-benar memberikan solusi terbaik untuk masalah pipa air di rumah.",
    },
    {
      name: "Linda",
      image: "../assets/img/profile.jpeg",
      country: "Pemilik Rumah",
      content:
        "Saya baru saja menyewa HYS Pipe untuk beberapa pengerjaan logam khusus dan jasa perbaikan pengelasan untuk bisnis saya, dan saya sangat terkesan dengan hasilnya. Mulai dari konsultasi awal hingga pemasangan akhir, tim mereka bekerja dengan sangat profesional, efisien, dan terampil. Kualitas pengelasan logam yang mereka lakukan benar-benar luar biasa – hasilnya kuat, bersih, dan dirancang untuk tahan lama. Jika Anda mencari jasa pengelasan profesional atau custom metal fabrication, saya sangat merekomendasikan HYS Pipe.",
    },
    {
      name: "Suhendra",
      image: "../assets/img/profile.jpeg",
      country: "Bisnis F&B",
      content:
        "Saya baru saja menggunakan layanan HYS Pipe untuk pengerjaan logam khusus dan perbaikan pengelasan pada proyek bisnis saya, dan hasilnya benar-benar memuaskan. Mulai dari konsultasi awal hingga pemasangan akhir, tim mereka menunjukkan tingkat profesionalisme tinggi, bekerja secara efisien dan sangat terampil di lapangan. Kualitas jasa pengelasan mereka luar biasa – hasil las terlihat kuat, rapi, dan tahan lama. Jika Anda membutuhkan jasa pengelasan profesional atau pengerjaan logam presisi, saya sangat merekomendasikan HYS Pipe sebagai mitra terpercaya.",
    },
  ];

  return (
    <>
      <div className="home-section home-2 pipe">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h6 className="text-black">Layanan Pipa Berkualitas</h6>
                    <h3 className="text-white">
                      Pipa bocor? serahkan pada layanan pipa HelpYourSolution
                      kami Lulus Kualitas
                      <span className="text-gradient"> 100% Warranty</span>
                    </h3>
                    <p className="text-white mt-4">
                      Kami mengkhususkan diri dalam pemasangan pipa berkualitas
                      tinggi, perawatan, dan layanan perbaikan untuk rumah.
                      Apakah Anda memerlukan pemasangan sistem pipa baru atau
                      sedang mencari perbaikan dan perawatan ahli
                    </p>
                    <div className="banner-btn">
                      <a
                        className="default-btn-one"
                        href="https://api.whatsapp.com/send?phone=6281282288099"
                      >
                        Hubungi Kami<span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Portofolio
        title={data.title}
        subTitle={data.subTitle}
        category={data.category}
        data={data.data}
      ></Portofolio>
      <CardServiceAnimated
        value={dataCardServiceAnimated}
      ></CardServiceAnimated>
      <Testimonial value={dataTestimonial}></Testimonial>
    </>
  );
}

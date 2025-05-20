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
        subLabel: "Pesan Sekarang",
        image: "../assets/img/pipe1.jpeg",
        type: "all",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Pesan Sekarang",
        image: "../assets/img/pipe7.jpg",
        type: "all",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Pesan Sekarang",
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
      content: "",
    },
    {
      image: "../assets/img/plember2.jpg",
      imageHover: "../assets/img/plember2.jpg",
      title: "Layanan Perpipaan Ahli, Disampaikan dengan Hati-hati",
      content: "",
    },
    {
      image: "../assets/img/plember3.jpg",
      imageHover: "../assets/img/plember3.jpg",
      title: "Layanan Perpipaan yang Terjangkau, Cepat, dan Andal",
      content: "",
    },
    {
      image: "../assets/img/plember4.jpg",
      imageHover: "../assets/img/plember4.jpg",
      title:
        "Kami Memperbaiki Kebocoran, Pipa, dan Segala Sesuatu di Antaranya!",
      content: "",
    },
    {
      image: "../assets/img/plember5.jpg",
      imageHover: "../assets/img/plember5.jpg",
      title: "Ahli Perpipaan Lokal Anda – Melayani Anda dengan Integritas",
      content: "",
    },
    {
      image: "../assets/img/plember6.jpg",
      imageHover: "../assets/img/plember6.jpg",
      title:
        "Layanan Perpipaan 24/7 – Tersedia Kapan Saja Anda Membutuhkan Kami!",
      content: "",
    },
  ];

  const dataTestimonial: testimonialModel[] = [
    {
      name: "Andri",
      image: "../assets/img/client/testimonial-1.jpg",
      country: "Agen Propesional",
      content:
        "Saya menyewa HYS pipa untuk menangani beberapa perbaikan pengelasan pada mesin berat di fasilitas kami, dan saya sangat puas dengan hasil kerja mereka. Tim mereka cepat menanggapi permintaan saya dan meluangkan waktu untuk menilai masalah sebelum memberikan solusi yang jelas, hemat biaya, dan garansi 1 bulan yang diberikan",
    },
    {
      name: "Linda",
      image: "../assets/img/client/testimonial-2.jpg",
      country: "Pemilik Rumah",
      content:
        "Bagian terbaiknya adalah profesionalisme mereka – mereka berkomunikasi dengan jelas selama proses berlangsung, datang tepat waktu, dan menyelesaikan pekerjaan dengan efisien. Saya juga menghargai perhatian mereka terhadap keselamatan, yang membuat saya yakin dengan pekerjaan yang dilakukan. membuat rumah saya terasa seperti baru lagi dan tidak ada lagi kebocoran pipa",
    },
    {
      name: "Suhendra",
      image: "../assets/img/client/testimonial-3.jpg",
      country: "Bisnis F&B",
      content:
        "Saya baru saja menyewa HYS pipe untuk beberapa pengerjaan logam khusus dan perbaikan pengelasan untuk bisnis saya, dan saya sangat terkesan. Dari konsultasi awal hingga pemasangan akhir, tim mereka profesional, efisien, dan sangat terampil. Kualitas pengelasan mereka luar biasa – semuanya kuat, bersih, dan dibuat agar tahan lama",
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
                    <h6 className="text-white">Layanan Pipa Berkualitas</h6>
                    <h3 className="text-white">
                      Pipa bocor? serahkan pada layanan pipa HelpYourSolution
                      kami Lulus Kualitas
                      <span className="text-gradient"> 100% Warranty</span>
                    </h3>
                    <p className="text-white">
                      Kami mengkhususkan diri dalam pemasangan pipa berkualitas
                      tinggi, perawatan, dan layanan perbaikan untuk berbagai
                      industri di seluruh wilayah. Apakah Anda memerlukan
                      pemasangan sistem pipa baru atau sedang mencari perbaikan
                      dan perawatan ahli
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn-one" href="tel:081284691689">
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

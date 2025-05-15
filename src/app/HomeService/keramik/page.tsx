import { portofolioModel, testimonialModel } from "@/app/interface/Model";
import Portofolio from "@/components/portofolio";
import Testimonial from "@/components/testimonial";

export default function keramik() {
  const data: portofolioModel = {
    title: "Galeri Keramik",
    subTitle: "Style Kami",
    category: [],
    data: [
      {
        label: "Kontak Pengrajin",
        subLabel: "Classic Style",
        image: "../assets/img/keramik3.jpeg",
        type: "classic",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Classic Style",
        image: "../assets/img/keramik2.jpeg",
        type: "classic",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Classic Style",
        image: "../assets/img/ceramic1.jpg",
        type: "classic",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Cozy Style",
        image: "../assets/img/ceramic.jpg",
        type: "cozy",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Cozy Style",
        image: "../assets/img/ceramic2.jpg",
        type: "cozy",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Cozy Style",
        image: "../assets/img/ceramic3.jpg",
        type: "cozy",
      },
    ],
  };

  const dataTestimonial: testimonialModel[] = [
    {
      name: "Andi",
      image: "../assets/img/client/testimonial-1.jpg",
      country: "United Kingdom",
      content:
        "Saya memesan satu set mug keramik buatan tangan dari HYS, dan mug-mug itu benar-benar cantik. Kerajinannya menakjubkan, dan setiap bagiannya terasa unik dan penuh karakter. Mug-mug itu tahan lama, aman untuk mesin pencuci piring, dan cocok untuk kopi pagi saya. Anda dapat melihat perhatian yang sungguh-sungguh diberikan pada setiap detailnya. Saya pasti akan memesan lebih banyak lagi!",
    },
    {
      name: "Putri",
      image: "../assets/img/client/testimonial-2.jpg",
      country: "United State",
      content:
        "HYS baru saja memasang ubin keramik di dapur dan kamar mandi kami, dan kami sangat puas. Ubinnya cantik, mudah dibersihkan, dan dipasang dengan presisi. Timnya profesional, rapi, dan menyelesaikan pekerjaan tepat waktu. Pekerjaan mereka benar-benar mengubah ruangan. Sangat merekomendasikan pekerjaan mereka!",
    },
    {
      name: "Adam",
      image: "../assets/img/client/testimonial-3.jpg",
      country: "Germany",
      content:
        "Mobil saya dilapisi keramik oleh HYS, dan hasilnya luar biasa. Hasil akhirnya mengilap, halus, dan air langsung menetes. Sudah berminggu-minggu dan mobil masih tampak baru. Perlindungan dari kotoran dan UV merupakan nilai tambah yang besar. Sepadan dengan harganya jika Anda ingin menjaga kendaraan Anda tetap terlihat menawan.",
    },
  ];

  return (
    <>
      <div className="home-section home-2">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h6 className="text-gradient">
                      Pengrajin Keramik Berkualitas
                    </h6>
                    <h1>
                      Desain Anda yang Mewah dan Elegan Dari{" "}
                      <span className="text-gradient">HYS</span>
                    </h1>
                    <p>
                      Butuh Keramik Jangan Khawatir Kami Punya Banyak Keramik
                      Dengan Berbagai Macam Gaya Bikin Mata Meleleh
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn-one" href="tel:081284691689">
                        Hubungi Kami<span></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="banner-image">
                    {/* <img src="/assets/img/home-font-2.png" alt="image" /> */}
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
      <Testimonial value={dataTestimonial}></Testimonial>
    </>
  );
}

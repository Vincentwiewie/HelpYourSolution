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
      country: "Jakarta",
      content:
        "Hasil pemasangan keramiknya sangat rapi dan sesuai dengan keinginan saya. Tukangnya datang tepat waktu dan bekerja dengan sangat profesional. Saya puas banget dengan pelayanannya!",
    },
    {
      name: "Putri",
      image: "../assets/img/client/testimonial-2.jpg",
      country: "Bandung",
      content:
        "Kami menggunakan jasa ini untuk proyek renovasi kantor. Timnya cepat tanggap, hasilnya bersih, dan harganya juga cukup terjangkau. Recommended!",
    },
    {
      name: "Adam",
      image: "../assets/img/client/testimonial-3.jpg",
      country: "Medan",
      content:
        "Awalnya saya ragu, tapi setelah lihat hasil akhirnya, saya sangat senang. Keramik kamar mandi saya jadi terlihat mewah dan elegan. Terima kasih!",
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
                      Pemasang Keramik Berkualitas
                    </h6>
                    <h1>
                      Pemasangan Keramik yang Rapi dan Berkualitas Dari{" "}
                      <span className="text-gradient">HYS</span>
                    </h1>
                    <p className="text-white">
                      Apakah Anda sedang merenovasi rumah atau membangun hunian
                      baru? Salah satu elemen penting dalam mempercantik dan
                      memperkuat lantai maupun dinding adalah pemasangan
                      keramik. Untuk hasil yang rapi, presisi, dan tahan lama,
                      percayakan kepada jasa pemasangan keramik profesional.
                    </p>
                    <div className="banner-btn">
                      <a
                        className="default-btn-one"
                        href="https://api.whatsapp.com/send?phone=081282288099"
                      >
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

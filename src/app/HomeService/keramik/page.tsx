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
        label: "Classic Style",
        subLabel: "tukang pasang keramik profesional dan rapi",
        image: "../assets/img/keramik1.jpeg",
        type: "classic",
      },
      {
        label: "Classic Style",
        subLabel: "jasa pasang keramik lantai dan dinding",
        image: "../assets/img/keramik2.jpeg",
        type: "classic",
      },
      {
        label: "Classic Style",
        subLabel: "pemasangan keramik rapi dan cepat",
        image: "../assets/img/ceramic1.jpg",
        type: "classic",
      },
      {
        label: "Cozy Style",
        subLabel: "rekomendasi jasa pasang keramik terpercaya",
        image: "../assets/img/keramik4.jpeg",
        type: "cozy",
      },
      {
        label: "Cozy Style",
        subLabel: "jasa pasang keramik kamar mandi",
        image: "../assets/img/keramik6.jpeg",
        type: "cozy",
      },
      {
        label: "Cozy Style",
        subLabel: "jasa pasang keramik lantai rumah",
        image: "../assets/img/keramik5.jpeg",
        type: "cozy",
      },
    ],
  };

  const dataTestimonial: testimonialModel[] = [
    {
      name: "Andi",
      image: "../assets/img/profile.jpeg",
      country: "Cemara",
      content:
        "Testimoni Pemasangan Keramik: Rapi, Profesional, dan Memuaskan, Hasil pemasangan keramik kamar mandi sangat rapi dan sesuai dengan keinginan saya.Tukang keramik datang tepat waktu, bekerja dengan sangat profesional, dan menunjukkan keahlian yang luar biasa.Saya benar- benar puas dengan pelayanan pemasangan keramik ini.Sangat direkomendasikan untuk Anda yang mencari kualitas dan ketepatan waktu!",
    },
    {
      name: "Putri",
      image: "../assets/img/profile.jpeg",
      country: "Binjai",
      content:
        "Kami menggunakan jasa renovasi kantor profesional ini untuk proyek kami, dan hasilnya sangat memuaskan. Tim renovasi cepat tanggap, pengerjaannya rapi dan bersih, serta biaya renovasi kantor cukup terjangkau. Sangat recommended untuk renovasi ruang kantor yang ingin tampil lebih modern dan fungsional!",
    },
    {
      name: "Adam",
      image: "../assets/img/profile.jpeg",
      country: "Medan",
      content:
        "Awalnya saya sempat ragu, tetapi setelah melihat hasil akhirnya, saya sangat puas! Keramik kamar mandi saya kini terlihat jauh lebih mewah, elegan, dan modern. Proses pemasangan rapi dan hasil akhir benar-benar melebihi ekspektasi. Terima kasih kepada tim profesional yang telah mengerjakan dengan sangat baik!",
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
                    <p className="text-black">
                      Apakah Anda sedang merenovasi rumah atau membangun hunian
                      baru? Salah satu elemen penting dalam mempercantik dan
                      memperkuat lantai maupun dinding adalah pemasangan
                      keramik. Untuk hasil yang rapi, presisi, dan tahan lama,
                      percayakan kepada jasa pemasangan keramik profesional.
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
                <div className="col-lg-6 col-md-12">
                  <div className="banner-image">
                    {/* <img src="/../assets/img/home-font-2.png" alt="image" /> */}
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

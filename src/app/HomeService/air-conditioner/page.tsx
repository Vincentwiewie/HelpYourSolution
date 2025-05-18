import Price from "@/components/price";
import {
  priceProps,
  overviewModel,
  testimonialModel,
} from "@/app/interface/Model";
import OverviewLeft from "@/components/overviewLeft";
import Testimonial from "@/components/testimonial";

export default function page() {
  const data: priceProps[] = [
    {
      price: "5",
      image: `../assets/img/AcEngine.jpg`,
      textButton: "Order Sekarang",
      label: "Clean AC",
      list: [
        { text: "Layanan AC Cepat & Andal", none: true },
        { text: "Pembersihan dan Servis", none: true },
        { text: "Dingin Seperti Baru", none: true },
        { text: "--", none: false },
        { text: "--", none: false },
        { text: "--", none: false },
      ],
    },
    {
      price: "15",
      image: "../assets/img/AcOn.jpg",
      textButton: "Order Now",
      label: "Inject Freon",
      list: [
        { text: "Layanan AC Cepat & Andal", none: true },
        { text: "Pembersihan dan Servis", none: true },
        { text: "Dingin Seperti Baru", none: true },
        { text: "Garansi 2 Minggu", none: true },
        { text: "Beroperasi Pada Kinerja Puncak", none: true },
        { text: "--", none: false },
      ],
    },

    {
      price: "25 - 100",
      image: "../assets/img/ac3.jpeg",
      textButton: "Order Now",
      label: "Instalasi AC",
      list: [
        { text: "Layanan AC Cepat & Andal", none: true },
        { text: "Pemasangan Presisi", none: true },
        { text: "Kualitas Terjamin", none: true },
        { text: "Garansi 2 Minggu", none: true },
        { text: "Beroperasi Pada Kinerja Puncak", none: true },
        {
          text: "Harga Terjangkau",
          none: true,
        },
      ],
    },
    {
      price: "25 - 100",
      image: "../assets/img/AcService.jpg",
      textButton: "Order Now",
      label: "Repair",
      list: [
        { text: "Layanan AC Cepat & Andal", none: true },
        { text: "Pembersihan dan Servis", none: true },
        { text: "Dingin Seperti Baru", none: true },
        { text: "Garansi 2 Minggu", none: true },
        { text: "Beroperasi Pada Kinerja Puncak", none: true },
        {
          text: "Perbaikan sistem Ac yang tidak berfungsi",
          none: true,
        },
      ],
    },
  ];

  const dataOverview: overviewModel = {
    title: "Kenapa Memilih Kami?",
    titleHeader: "100% garansi diberikan dan respon cepat",
    image: "../assets/img/acliving.jpg",
    content: "",
    list: [
      "Pembersih Ahli",
      "Pembersihan Mendalam",
      "Harga Terjangkau",
      "Layanan Tepat Waktu",
      "Segar Seperti Baru",
      "Perbaikan & Pemulihan",
    ],
  };

  const dataTestimonial: testimonialModel[] = [
    {
      name: "Andi",
      image: "../assets/img/client/testimonial-1.jpg",
      country: "United Kingdom",
      content:
        "Saya sangat puas dengan AC baru saya! Sejak dipasang, perbedaannya langsung terasa—udara sejuk dan segar dalam hitungan menit. Senyap, hemat energi, dan sangat hebat dalam menjaga suhu yang konsisten di seluruh rumah saya. Saya sangat menyukai fitur pintar yang memungkinkan saya mengendalikannya dari ponsel. Setelah melewati beberapa musim panas yang brutal, AC ini benar-benar mengubah segalanya. Sangat direkomendasikan bagi siapa pun yang mencari pendingin yang andal dan bertenaga dengan kenyamanan modern!",
    },
    {
      name: "Putri",
      image: "../assets/img/client/testimonial-2.jpg",
      country: "United State",
      content:
        "Baru-baru ini saya membersihkan AC saya di HYS, dan perbedaannya luar biasa. Timnya tepat waktu, profesional, dan menjelaskan semuanya dengan jelas. Aliran udaranya tidak hanya jauh lebih kuat sekarang, tetapi unitnya juga bekerja lebih senyap dan efisien. Saya terkejut melihat banyaknya debu dan kotoran yang mereka singkirkan. Rasanya seperti saya memiliki sistem yang benar-benar baru lagi. Saya pasti akan memesan layanan pembersihan rutin mulai sekarang!",
    },
    {
      name: "Adam",
      image: "../assets/img/client/testimonial-3.jpg",
      country: "Germany",
      content:
        "Saya mengalami masalah dengan AC saya yang tidak mendinginkan dengan baik, dan HYS datang untuk menyelamatkan. Teknisi mereka datang tepat waktu, dengan cepat mendiagnosis masalah, dan memperbaikinya dalam waktu satu jam. Layanannya profesional, jujur, dan harganya terjangkau. Sejak saat itu, AC saya berjalan dengan sempurna. Saya sangat menghargai transparansi dan efisiensi mereka—sangat merekomendasikan mereka untuk perbaikan AC apa pun!",
    },
  ];

  return (
    <>
      <div className="home-section">
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
                    <h2 className="text-white mb-1">
                      Tetap Sejuk Sepanjang Tahun dengan Layanan Pendingin Udara
                      Dari HelpYourServices!
                    </h2>
                    <p>
                      Apakah AC Anda kesulitan untuk mengimbangi panasnya musim
                      panas? Atau mungkin sudah waktunya untuk melakukan
                      perbaikan musiman? Di HelpYoursolution kami mengkhususkan
                      diri dalam segala hal yang berhubungan dengan AC mulai
                      dari pemasangan hingga perbaikan dan perawatan rutin.
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn-one" href="tel:081284691689">
                        Pesen Sekarang <span></span>
                      </a>
                      <a
                        className="default-btn-two"
                        href="https://mail.google.com/mail/u/hysbusinessservice@gmail.com"
                      >
                        Email Kami Untuk Saran<span></span>
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
        {/* <div className="creative-shape">
          <Image
            src="/assets/img/home-bottom-shape.png"
            alt="svg shape"
            width={180}
            height={38}
            priority
          />
        </div> */}
      </div>
      <Price value={data} />
      <OverviewLeft
        title={dataOverview.title}
        titleHeader={dataOverview.titleHeader}
        content={dataOverview.content}
        list={dataOverview.list}
        image={dataOverview.image}
      ></OverviewLeft>
      <Testimonial value={dataTestimonial}></Testimonial>
    </>
  );
}

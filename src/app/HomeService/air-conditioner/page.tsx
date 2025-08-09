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
      price: "",
      image: `../assets/img/ac9.jpeg`,
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
      alt: "promo cuci AC rumah",
    },
    {
      price: "",
      image: "../assets/img/ac2.jpeg",
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
      alt: "cari jasa service AC terpercaya",
    },

    {
      price: "",
      image: "../assets/img/ac8.jpeg",
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
      alt: "tukang AC profesional isi freon AC rumah",
    },
    {
      price: "",
      image: "../assets/img/ac3.jpeg",
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
      alt: "Servis Ac Bocor harga cuci AC perawatan AC rutin",
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
      image: "../assets/img/profile.jpeg",
      country: "Medan",
      content:
        "Saya sangat puas dengan AC baru saya! Sejak pemasangan AC dilakukan, udara di rumah langsung terasa lebih sejuk dan segar hanya dalam hitungan menit. Kinerja AC hemat energi ini benar-benar luar biasa—sangat senyap, cepat dingin, dan mampu menjaga suhu ruangan tetap stabil di seluruh rumah. Fitur favorit saya adalah teknologi pintar yang memungkinkan saya mengontrol AC dari smartphone, sangat praktis dan modern! Setelah mengalami beberapa musim panas yang panas dan tidak nyaman, kehadiran AC inverter ini benar-benar mengubah segalanya. Saya sangat merekomendasikan AC ini bagi siapa pun yang mencari AC berkualitas, awet, dan hemat listrik. Cocok untuk rumah, apartemen, atau kantor. Solusi ideal untuk kenyamanan jangka panjang!",
    },
    {
      name: "Putri",
      image: "../assets/img/profile.jpeg",
      country: "Binjai",
      content:
        "Baru-baru ini saya melakukan pembersihan AC di HYS, dan hasilnya sangat memuaskan! Tim teknisi HYS datang tepat waktu, sangat profesional, dan menjelaskan proses cuci AC dengan jelas. Setelah dibersihkan, aliran udara dari AC jadi jauh lebih kuat, dan unit bekerja lebih senyap serta efisien. Saya benar-benar terkejut melihat banyaknya debu dan kotoran yang berhasil disingkirkan. Sekarang, AC saya terasa seperti unit baru—dingin maksimal, tanpa suara bising, dan hemat listrik. Saya pasti akan rutin menggunakan jasa cuci AC HYS ke depannya. Layanan ini sangat direkomendasikan bagi siapa pun yang ingin menjaga performa dan kebersihan AC rumah.",
    },
    {
      name: "Adam",
      image: "../assets/img/profile.jpeg",
      country: "Jakarta",
      content:
        "Saya mengalami masalah dengan AC yang tidak dingin, dan HYS benar-benar datang sebagai penyelamat. Teknisi AC dari HYS datang tepat waktu, langsung mendiagnosis masalah dengan cepat, dan memperbaikinya hanya dalam waktu satu jam! Layanannya sangat profesional, jujur, dan yang paling penting—harganya terjangkau. Sejak diperbaiki, AC saya bekerja dengan sempurna, tidak ada lagi masalah suhu atau kebisingan. Saya sangat menghargai transparansi dan efisiensi tim HYS, dan saya sangat merekomendasikan mereka untuk siapa pun yang butuh jasa perbaikan AC yang cepat, terpercaya, dan terjangkau.",
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
                      <a
                        className="default-btn-one"
                        href="https://api.whatsapp.com/send?phone=6281282288099"
                      >
                        Pesan Sekarang <span></span>
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
                  <img src="/../assets/img/AcOn.jpg" alt="image" />
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="creative-shape">
          <Image
            src="/../assets/img/home-bottom-shape.png"
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

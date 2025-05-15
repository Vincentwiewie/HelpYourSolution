import {
  cardServiceModel,
  portofolioModel,
  testimonialModel,
} from "@/app/interface/Model";
import CardService from "@/components/cardService";
import Portofolio from "@/components/portofolio";
import Testimonial from "@/components/testimonial";

export default function page() {
  const data: portofolioModel = {
    title: "Instalasi Plafon",
    subTitle: "Contoh Gambar",
    category: ["roof", "ceiling"],
    data: [
      {
        label: "Kontak Pengrajin",
        subLabel: "Chat Now",
        image: "../assets/img/plafon2.jpeg",
        type: "ceiling",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Chat Now",
        image: "../assets/img/plafon4.jpeg",
        type: "ceiling",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Chat Now",
        image: "../assets/img/plafon3.jpeg",
        type: "ceiling",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Chat Now",
        image: "../assets/img/roof.jpeg",
        type: "roof",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Chat Now",
        image: "../assets/img/roof1.jpeg",
        type: "roof",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Chat Now",
        image: "../assets/img/roof2.jpeg",
        type: "roof",
      },
    ],
  };

  const dataCardService: cardServiceModel[] = [
    {
      title: "Pemasangan Plafon Palsu",
      content:
        "Langit-langit yang dirancang khusus yang menambah gaya dan fungsionalitas ke ruangan mana pun",
      image: "../assets/img/feature-two-icon-1",
      imageHover: "../assets/img/feature-two-icon-1",
    },
    {
      title: "Perbaikan Plafon",
      content:
        "Perbaikan cepat dan efisien untuk kerusakan atau keausan langit-langit",
      image: "../assets/img/feature-two-icon-2",
      imageHover: "../assets/img/feature-two-icon-2",
    },
    {
      title: "Plafon Dekoratif",
      content:
        "Desain artistik yang mengubah langit-langit Anda menjadi sebuah pernyataan",
      image: "../assets/img/feature-two-icon-3",
      imageHover: "../assets/img/feature-two-icon-3",
    },
    {
      title: "Pemasangan Perlengkapan Penerangan",
      content:
        "Integrasi pencahayaan yang sempurna dengan plafon baru Anda untuk meningkatkan suasana",
      image: "../assets/img/feature-two-icon-4",
      imageHover: "../assets/img/feature-two-icon-4",
    },
    {
      title: "Langit-langit Kedap Suara",
      content:
        "Sistem plafon khusus yang dirancang untuk mengurangi kebisingan agar ruangan lebih tenang",
      image: "../assets/img/feature-two-icon-5",
      imageHover: "../assets/img/feature-two-icon-5",
    },
    {
      title: "Kepuasan Pelanggan Dijamin",
      content:
        "Tim kami memiliki pengalaman luas dalam menciptakan langit-langit yang tahan lama dan indah",
      image: "../assets/img/feature-two-icon-6",
      imageHover: "../assets/img/feature-two-icon-6",
    },
  ];

  const dataTestimonial: testimonialModel[] = [
    {
      name: "Kevin",
      image: "/assets/img/client/testimonial-1.jpg",
      country: "Pemilik Rumah",
      content:
        "Baru-baru ini saya meminta HYS Plafon Service memasang plafon palsu baru di ruang tamu saya, dan saya sangat puas dengan hasilnya. Timnya sangat profesional, dan mereka bekerja sama dengan saya untuk mendesain plafon yang sesuai dengan visi saya.",
    },
    {
      name: "christine",
      image: "/assets/img/client/testimonial-2.jpg",
      country: "Cafe Owner",
      content:
        "Pekerjaan selesai tepat waktu, dan pemasangannya sempurna. Saya menghargai betapa bersih dan terorganisirnya tim selama proses berlangsung. Jelas mereka bangga dengan pekerjaan mereka, dan saya berterima kasih atas layanan yang luar biasa ini.",
    },
    {
      name: "Stevie Wills",
      image: "/assets/img/client/testimonial-3.jpg",
      country: "Staff",
      content:
        "Saya menghubungi HYS Plafon Service untuk pemasangan plafon palsu di kamar tidur saya, dan saya sangat puas dengan hasilnya. Dari konsultasi pertama hingga pemasangan akhir, timnya profesional, efisien, dan sangat membantu. Mereka mendengarkan ide-ide saya dan memberikan saran-saran yang fantastis untuk meningkatkan desain.",
    },
  ];

  return (
    <>
      <div className="home-section home-2 ceiling">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h6 className="text-white">Pemasang Plafon Berkualitas</h6>
                    <h3 className="text-white">
                      Butuh Plafon? Serahkan pada HYS Plafon Service, kami
                      Lulusan Berkualitas
                      <span className="text-gradient"> 100% Garansi</span>
                    </h3>
                    <p className="text-white">
                      Merombak kamar mandi atau dapur Anda? Ahli perpipaan kami
                      dapat membantu pemasangan, peningkatan, dan perbaikan,
                      memastikan renovasi Anda selesai dengan lancar.
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn-one" href="tel:081284691689">
                        Pesan Sekarang <span></span>
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
      <CardService value={dataCardService}></CardService>
      <Testimonial value={dataTestimonial}></Testimonial>
    </>
  );
}

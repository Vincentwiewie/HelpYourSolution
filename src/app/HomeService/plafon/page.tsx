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
        subLabel: "Jasa pemasangan plafon",
        image: "../assets/img/plafon2.jpeg",
        type: "ceiling",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Tukang pasang plafon profesional",
        image: "../assets/img/plafon4.jpeg",
        type: "ceiling",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Pemasangan plafon gypsum",
        image: "../assets/img/plafon3.jpeg",
        type: "ceiling",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Pemasangan plafon gypsum",
        image: "../assets/img/ceiling1.jpeg",
        type: "ceiling",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Pemasangan plafon gypsum",
        image: "../assets/img/ceiling2.jpeg",
        type: "ceiling",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Jasa plafon rumah murah",
        image: "../assets/img/roof.jpeg",
        type: "roof",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Kontraktor plafon rumah",
        image: "../assets/img/roof1.jpeg",
        type: "roof",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Instalasi plafon kantor",
        image: "../assets/img/plafon1.jpeg",
        type: "roof",
      },
    ],
  };

  const dataCardService: cardServiceModel[] = [
    {
      title: "Pemasangan Plafon",
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
      image: "../assets/img/profile.jpeg",
      country: "Pemilik Rumah",
      content:
        "Butuh jasa instalasi plafon rumah yang cepat, rapi, dan berkualitas? Kami menyediakan layanan pemasangan plafon gypsum, plafon PVC, dan berbagai jenis plafon lainnya sesuai kebutuhan Anda. Tim tukang pasang plafon profesional kami siap membantu mewujudkan desain plafon minimalis atau klasik dengan hasil yang tahan lama dan rapi. Kami melayani instalasi plafon di berbagai wilayah, termasuk Jakarta, Surabaya, Bandung, dan sekitarnya. Dengan harga pasang plafon yang kompetitif dan proses kerja yang efisien, kami adalah pilihan tepat untuk kebutuhan plafon rumah dan kantor Anda. Selain pemasangan, kami juga menerima jasa perbaikan plafon bocor dan penggantian plafon lama dengan yang baru. Hubungi kami sekarang untuk konsultasi gratis dan penawaran harga terbaik!",
    },
    {
      name: "christine",
      image: "../assets/img/profile.jpeg",
      country: "Cafe Owner",
      content:
        "Pekerjaan pemasangan selesai tepat waktu dengan hasil yang sempurna. Saya sangat menghargai betapa bersih dan terorganisirnya tim selama proses berlangsung. Jelas bahwa mereka benar-benar bangga dengan kualitas pekerjaan mereka. Saya sangat berterima kasih atas layanan jasa pemasangan profesional yang luar biasa ini. Jika Anda mencari tim yang dapat diandalkan dan efisien, saya sangat merekomendasikan layanan ini.",
    },
    {
      name: "Stevie Wills",
      image: "../assets/img/profile.jpeg",
      country: "Staff",
      content:
        "Saya menghubungi HYS Plafon Service untuk pemasangan plafon palsu di kamar tidur saya, dan saya sangat puas dengan hasilnya. Mulai dari konsultasi awal hingga pemasangan akhir, tim mereka bekerja dengan sangat profesional, efisien, dan ramah. Mereka benar-benar mendengarkan ide-ide saya dan memberikan saran desain plafon palsu yang fantastis untuk meningkatkan tampilan kamar tidur saya. Jika Anda mencari jasa pemasangan plafon palsu terpercaya dengan hasil berkualitas, saya sangat merekomendasikan HYS Plafon Service.",
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
                    <h6 className="text-black">Pemasang Plafon Berkualitas</h6>
                    <h3 className="text-white">
                      Butuh Plafon? Serahkan pada HYS Plafon Service, kami
                      Lulusan Berkualitas
                      <span className="text-gradient"> 100% Garansi</span>
                    </h3>
                    <p className="text-white mt-4">
                      Plafon Rusak atau Plafon Telah usang? butuh design Baru?
                      serahkan kepada HYS Plafon Care Kami Ahli Dalam
                      permasangan Plafon yang telah Berpegalaman dan dipercaya
                      banyak pelanggan dari Skala Industri maupun rumah
                    </p>
                    <div className="banner-btn">
                      <a
                        className="default-btn-one"
                        href="https://api.whatsapp.com/send?phone=6281282288099"
                      >
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

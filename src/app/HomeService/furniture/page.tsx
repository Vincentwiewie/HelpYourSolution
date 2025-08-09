import {
  overviewModel,
  portofolioModel,
  testimonialModel,
} from "@/app/interface/Model";
import Portofolio from "@/components/portofolio";
import Testimonial from "@/components/testimonial";
import OverviewLeft from "@/components/overviewLeft";

export default function page() {
  const dataPortofolio: portofolioModel = {
    title: "Pengrajin Furnitur",
    subTitle: "Gambar Contoh",
    category: [],
    data: [
      {
        label: "Kontak Pengrajin",
        subLabel: "Pengrajin furniture interior",
        image: "assets/img/furniture1.jpeg",
        type: "all",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Ruang Tamu Minimalis",
        image: "assets/img/furniture6.jpeg",
        type: "all",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "kamar tidur anak anak",
        image: "assets/img/furniture5.jpg",
        type: "all",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Desain dapur minimalis",
        image: "assets/img/furniture10.jpeg",
        type: "all",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Renovasi dapur modern",
        image: "assets/img/furniture11.jpeg",
        type: "all",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Peralatan dapur lengkap",
        image: "assets/img/furniture12.jpeg",
        type: "all",
      },
    ],
  };

  const dataTestimonial: testimonialModel[] = [
    {
      name: "Andi",
      image: "assets/img/profile.jpeg",
      country: "Medan",
      content:
        "Saya sangat merekomendasikan HYS Furniture kepada siapa pun yang mencari furnitur berkualitas tinggi dengan layanan pelanggan yang luar biasa. Mereka benar-benar tahu cara menghadirkan sentuhan personal yang membuat rumah terasa lebih nyaman dan istimewa. Pilihan penyesuaian furnitur custom yang mereka tawarkan sangat beragam dan fleksibel. Saya akhirnya mendapatkan sofa custom yang tidak hanya cantik secara desain, tetapi juga sangat nyaman untuk digunakan sehari-hari. Jika Anda sedang mencari pengrajin furnitur terpercaya yang dapat menghadirkan keindahan dan kenyamanan dalam satu paket, HYS Furniture adalah jawabannya.",
    },
    {
      name: "Putri",
      image: "assets/img/profile.jpeg",
      country: "Pengusaha",
      content:
        "Saya baru saja membeli sofa sectional dan meja makan dari HYS Furniture, dan saya sangat senang dengan kualitas produk serta desainnya yang stylish! Tim mereka benar-benar meluangkan waktu untuk memahami kebutuhan saya dan membantu saya memilih furnitur yang sesuai dengan estetika rumah. Selain pelayanan yang ramah dan profesional, HYS juga memberikan garansi untuk setiap produk, yang menunjukkan komitmen mereka terhadap kualitas dan kepuasan pelanggan. Jika Anda mencari furnitur custom berkualitas tinggi dengan layanan pelanggan yang luar biasa, HYS adalah pilihan terbaik.",
    },
    {
      name: "Adam",
      image: "assets/img/profile.jpeg",
      country: "Jakarta",
      content:
        "Pengiriman furnitur dari HYS Furniture dilakukan tepat waktu, dan pemasangannya berjalan lancar tanpa kendala. Tim mereka bahkan memastikan semua furnitur terpasang dengan benar dan saya benar-benar puas sebelum mereka meninggalkan lokasi. Saya sangat menghargai pelayanan profesional seperti ini. Karena pengalaman saya begitu positif, saya sudah merekomendasikan HYS Furniture kepada teman-teman dan keluarga. Tanpa ragu, saya akan kembali lagi untuk kebutuhan furnitur custom berkualitas di masa mendatang!",
    },
  ];

  const dataOverview: overviewModel = {
    title: "Kenapa Percaya Kami?",
    titleHeader: "100% garansi diberikan dan respon cepat",
    image: "assets/img/trust.jpg",
    content: "",
    list: [
      "Keahlian ahli",
      "Perhatian terhadap detail",
      "Harga terjangkau",
      "Layanan tepat waktu",
      "Desain Furnitur Kustom",
      "Pemindahan dan Reposisi Furnitur",
    ],
  };

  return (
    <>
      <div className="home-section home-2 furniture">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h6 className="text-black">Ahli Furniture</h6>
                    <h3 className="text-white">
                      Perlu mempercantik tampilan Perabotan rumah/toko anda?
                      Serahkan pada kami,ahlinya pembuatan perabot/furniture
                      akan membuat rumah / toko anda menjadi mewah Dan berkelas
                      <span className="text-gradient mt-5"> 100% Garansi</span>
                    </h3>
                    <p className="text-white mt-4">
                      Biarkan kami menghadirkan gaya, kenyamanan, dan
                      fungsionalitas rumah dan kantor Anda. Hubungi kami hari
                      ini untuk konsultasi GRATIS dan mari kita buat tempat Anda
                      menjadi tempat yang Anda cintai!
                    </p>
                    <div className="banner-btn">
                      <a
                        className="default-btn-one"
                        href="https://api.whatsapp.com/send?phone=6281282288099"
                      >
                        Layanan Kami <span></span>
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
        title={dataPortofolio.title}
        subTitle={dataPortofolio.subTitle}
        category={dataPortofolio.category}
        data={dataPortofolio.data}
      ></Portofolio>
      <Testimonial value={dataTestimonial}></Testimonial>
      <OverviewLeft
        title={dataOverview.title}
        titleHeader={dataOverview.titleHeader}
        content={dataOverview.content}
        list={dataOverview.list}
        image={dataOverview.image}
      ></OverviewLeft>
    </>
  );
}

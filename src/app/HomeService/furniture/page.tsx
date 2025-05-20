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
        subLabel: "Order Sekarang",
        image: "../assets/img/furniture1.jpeg",
        type: "all",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Order Sekarang",
        image: "../assets/img/furniture6.jpeg",
        type: "all",
      },
      {
        label: "Kontak Pengrajin",
        subLabel: "Order Sekarang",
        image: "../assets/img/furniture5.jpg",
        type: "all",
      },
    ],
  };

  const dataTestimonial: testimonialModel[] = [
    {
      name: "Andi",
      image: "../assets/img/client/testimonial-1.jpg",
      country: "United Kingdom",
      content:
        "Saya sangat merekomendasikan HYS Furniture kepada siapa pun yang mencari furnitur berkualitas tinggi dan layanan pelanggan yang sangat baik. Mereka benar-benar tahu cara membuat rumah Anda terasa istimewa!, Pilihan penyesuaiannya luar biasa, dan saya akhirnya mendapatkan sofa yang tidak hanya cantik tetapi juga sangat nyaman.",
    },
    {
      name: "Putri",
      image: "../assets/img/client/testimonial-2.jpg",
      country: "United State",
      content:
        "Saya baru saja membeli sofa sectional dan meja makan dari HYS, dan saya sangat senang dengan kualitas dan gayanya! Tim di sana benar-benar meluangkan waktu untuk memahami kebutuhan saya dan membantu saya memilih barang-barang yang benar-benar sesuai dengan estetika rumah saya dan mereka juga memberikan garansi",
    },
    {
      name: "Adam",
      image: "../assets/img/client/testimonial-3.jpg",
      country: "Germany",
      content:
        "Pengirimannya tepat waktu, dan pemasangannya lancar. Mereka bahkan memastikan semuanya sudah pada tempatnya dan saya puas sebelum mereka pergi. Saya sudah merekomendasikan HYS kepada teman-teman dan keluarga saya, dan saya pasti akan kembali lagi untuk kebutuhan furnitur di masa mendatang!",
    },
  ];

  const dataOverview: overviewModel = {
    title: "Kenapa Percaya Kami?",
    titleHeader: "100% garansi diberikan dan respon cepat",
    image: "../assets/img/trust.jpg",
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
                    <h6 className="text-white">Ahli Furniture</h6>
                    <h3 className="text-white">
                      Perlu mempercantik tampilan Perabotan rumah/toko anda?
                      Serahkan pada kami,ahlinya pembuatan perabot/furniture
                      akan membuat rumah / toko anda menjadi mewah Dan berkelas
                      <span className="text-gradient mt-5"> 100% Garansi</span>
                    </h3>
                    <p className="text-white">
                      Biarkan kami menghadirkan gaya, kenyamanan, dan
                      fungsionalitas rumah dan kantor Anda. Hubungi kami hari
                      ini untuk konsultasi GRATIS dan mari kita buat tempat Anda
                      menjadi tempat yang Anda cintai!
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn-one" href="tel:081284691689">
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

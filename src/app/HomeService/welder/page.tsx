import {
  overviewModel,
  portofolioModel,
  testimonialModel,
} from "@/app/interface/Model";
import Portofolio from "@/components/portofolio";
import OverviewRight from "@/components/overviewRight";
import Testimonial from "@/components/testimonial";

export default function page() {
  const data: portofolioModel = {
    title: "Pengrajin Teralis atau Jerjak besi",
    subTitle: "Contoh Layanan Teralis atau Jerjak besi HYS",
    category: [],
    data: [
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "Order Sekarang",
        image: "../assets/img/jerjak1.jpeg",
        type: "all",
      },
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "Order Sekarang",
        image: "../assets/img/jerjak2.jpeg",
        type: "all",
      },
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "Order Sekarang",
        image: "../assets/img/jerjak3.jpeg",
        type: "all",
      },
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "Order Sekarang",
        image: "../assets/img/jerjak4.jpeg",
        type: "all",
      },
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "Order Sekarang",
        image: "../assets/img/jerjak5.jpeg",
        type: "all",
      },
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "Order Sekarang",
        image: "../assets/img/jerjak6.jpeg",
        type: "all",
      },
    ],
  };

  const dataOverview: overviewModel = {
    title: "Kenapa Memilih Kami?",
    titleHeader: "100% garansi diberikan dan respon cepat",
    image: "../assets/img/trust4.jpg",
    content: "",
    list: [
      "Keahlian ahli",
      "Perhatian terhadap detail",
      "Harga terjangkau",
      "Layanan tepat waktu",
      "Desain Teralis atau Jerjak besi Kustom",
      "Perbaikan & Restorasi",
    ],
  };

  const dataTestimonial: testimonialModel[] = [
    {
      name: "Andi",
      image: "../assets/img/client/testimonial-1.jpg",
      country: "United Kingdom",
      content:
        "Saya menyewa HYS untuk proyek gerbang logam khusus, dan pengerjaannya luar biasa. Hasil lasnya bersih, kuat, dan presisi—jelas dilakukan oleh seseorang yang bangga dengan pekerjaan mereka. Mereka dapat diandalkan, datang tepat waktu, dan menyelesaikan pekerjaan lebih cepat dari jadwal. Saya pernah bekerja dengan tukang las sebelumnya, tetapi ini adalah pengalaman terbaik sejauh ini. Saya pasti akan menghubungi mereka untuk proyek-proyek mendatang.",
    },
    {
      name: "Putri",
      image: "../assets/img/client/testimonial-2.jpg",
      country: "United State",
      content:
        "Kami mengontrak HYS untuk pengelasan struktural pada proyek renovasi komersial, dan mereka memberikan hasil yang melampaui ekspektasi. Tim mereka mematuhi semua protokol keselamatan, bekerja secara efisien dengan tenggat waktu yang ketat, dan menjaga komunikasi yang baik. Kualitas pengelasan mereka lulus inspeksi tanpa satu pun masalah. Sulit untuk menemukan tukang las andal yang menggabungkan keterampilan dengan profesionalisme—orang-orang ini melakukan keduanya.",
    },
    {
      name: "Adam",
      image: "../assets/img/client/testimonial-3.jpg",
      country: "Germany",
      content:
        "Saya butuh rangka baja khusus yang dibuat untuk proyek rumah, dan HYS benar-benar berhasil. Mereka meluangkan waktu untuk memahami desain saya, menawarkan saran yang bermanfaat, dan memberikan struktur yang dilas dengan sempurna yang melampaui ekspektasi saya. Jarang sekali menemukan tukang las yang ahli dalam hal teknis dan kreatif. Saya benar-benar terkesan.",
    },
  ];
  return (
    <>
      <div className="home-section home-2 welder">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h6 className="text-white">
                      Jasa Pembuatan Teralis atau Jerjak besi
                    </h6>
                    <h3 className="text-white">
                      Butuh Tukang Teralis atau Jerjak besi? Serahkan pada Hys,
                      kami ahli dalam pembuatan Teralis atau Jerjak besi yang
                      berkualitas
                      <span className="text-gradient"> 100% Warranty</span>
                    </h3>
                    <p className="text-white">
                      Kami mengkhususkan diri dalam layanan pemasangan,
                      perawatan, pemasangan dan perbaikan Teralis atau Jerjak
                      besi berkualitas tinggi untuk berbagai industri di seluruh
                      wilayah. Apakah Anda memerlukan Teralis atau Jerjak besi
                      yang baru dipasang atau sedang mencari perbaikan dan
                      perawatan ahli
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
        title={data.title}
        subTitle={data.subTitle}
        category={data.category}
        data={data.data}
      ></Portofolio>
      <OverviewRight
        title={dataOverview.title}
        titleHeader={dataOverview.titleHeader}
        content={dataOverview.content}
        list={dataOverview.list}
        image={dataOverview.image}
      ></OverviewRight>
      <Testimonial value={dataTestimonial}></Testimonial>
    </>
  );
}

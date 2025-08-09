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
    category: ["Modern", "Elegant"],
    data: [
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "Jasa pembuatan teralis jendela",
        image: "assets/img/jerjak7.jpeg",
        type: "Modern",
      },
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "Jasa pasang teralis rumah",
        image: "assets/img/jerjak8.jpeg",
        type: "Modern",
      },
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "Teralis pintu besi",
        image: "assets/img/jerjak9.jpeg",
        type: "Modern",
      },
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "Pembuatan teralis besi tempa",
        image: "assets/img/jerjak10.jpeg",
        type: "Modern",
      },
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "Tukang teralis besi profesional",
        image: "assets/img/jerjak11.jpeg",
        type: "Modern",
      },
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "Jasa jerjak besi anti maling",
        image: "assets/img/jerjak12.jpeg",
        type: "Modern",
      },
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "model teralis besi",
        image: "assets/img/jerjak1.jpeg",
        type: "Elegant",
      },
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "terali besi minimalis",
        image: "assets/img/jerjak5.jpeg",
        type: "Elegant",
      },
      {
        label: "Pengrajin Teralis atau Jerjak besi",
        subLabel: "Tukang Las Besi Propesional",
        image: "assets/img/jerjak6.jpeg",
        type: "Elegant",
      },
    ],
  };

  const dataOverview: overviewModel = {
    title: "Kenapa Memilih Kami?",
    titleHeader: "100% garansi diberikan dan respon cepat",
    image: "assets/img/trust4.jpg",
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
      image: "assets/img/profile.jpeg",
      country: "Cafe Owner",
      content:
        "Saya menyewa HYS Pipe untuk proyek gerbang logam khusus, dan hasilnya benar-benar luar biasa. Kualitas las mereka sangat mengesankan—bersih, kuat, dan presisi, jelas dikerjakan oleh tukang las profesional yang bangga dengan pekerjaannya. Mereka juga sangat dapat diandalkan, datang tepat waktu, dan bahkan menyelesaikan proyek lebih cepat dari jadwal. Saya sudah pernah bekerja dengan beberapa penyedia jasa pengelasan, tetapi ini adalah pengalaman terbaik saya sejauh ini. Saya pasti akan menghubungi mereka lagi untuk proyek pengelasan atau fabrikasi logam berikutnya.",
    },
    {
      name: "Putri",
      image: "assets/img/profile.jpeg",
      country: "Mandor",
      content:
        "Kami mengontrak HYS Pipe untuk pekerjaan pengelasan struktural dalam proyek renovasi bangunan komersial, dan hasilnya benar-benar melampaui ekspektasi. Tim mereka mematuhi semua protokol keselamatan kerja, bekerja secara efisien meskipun tenggat waktunya ketat, dan menjaga komunikasi yang jelas selama proses berlangsung. Kualitas pengelasan struktural mereka sangat baik hingga lulus inspeksi tanpa satu pun masalah. Sangat sulit menemukan tukang las profesional yang mampu menggabungkan keterampilan teknis dan profesionalisme tinggi—tetapi HYS berhasil melakukan keduanya.",
    },
    {
      name: "Adam",
      image: "assets/img/profile.jpeg",
      country: "Pembisnis",
      content:
        "Saya membutuhkan rangka baja khusus untuk proyek rumah, dan HYS Pipe benar-benar berhasil memberikan hasil yang luar biasa. Mereka meluangkan waktu untuk memahami desain konstruksi saya, memberikan saran teknis yang bermanfaat, dan akhirnya menghasilkan struktur baja yang dilas sempurna, bahkan melampaui ekspektasi saya. Sangat jarang menemukan tukang las profesional yang ahli secara teknis sekaligus kreatif dalam pengerjaan fabrikasi baja. Saya benar-benar terkesan dan sangat merekomendasikan HYS untuk siapa pun yang mencari jasa pengelasan rangka baja untuk rumah tinggal atau proyek personal.",
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
                      Kami mengkhususkan diri dalam layanan pengerjaan,
                      perawatan, dan perbaikan Teralis atau Jerjak besi
                      berkualitas tinggi, Apakah Anda memerlukan Teralis atau
                      Jerjak besi yang baru dipasang atau sedang mencari
                      perbaikan dan perawatan ahli
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

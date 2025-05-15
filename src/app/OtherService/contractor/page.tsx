import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function contractor() {
  const dataBlogDetails: articleDetail = {
    classbg: "contractor",
    title: "Layanan Lainnya",
    subTitle: "Layanan Kontraktor",
    name: "Alex",
    date: "20 Jan 2025",
    articleTitle: "Apa itu Layanan Kontraktor?",
    articleContent:
      "Layanan kontraktor mencakup berbagai tugas khusus yang terkait dengan konstruksi, renovasi, dan perbaikan rumah. Kontraktor biasanya mengawasi proyek dari awal hingga akhir, berkoordinasi dengan subkontraktor, mengelola anggaran, mendapatkan izin, dan memastikan pekerjaan mematuhi kode dan peraturan bangunan setempat. Beberapa kontraktor mengkhususkan diri dalam bidang tertentu, seperti perpipaan, pekerjaan listrik, atau atap, sementara yang lain menawarkan layanan komprehensif yang mencakup semuanya mulai dari desain hingga sentuhan akhir.",
    image1: "../assets/img/contractor4.jpg",
    image2: "../assets/img/contractor1.jpeg",
    image3: "../assets/img/contractor3.jpg",
    articleTitle2: "Mengapa Anda Membutuhkan Layanan Kontraktor Profesional?",
    articleContent2:
      "Keahlian dan Pengalaman: Kontraktor membawa pengetahuan yang tak ternilai bagi setiap proyek. Dengan pengalaman bertahun-tahun di bidang ini, mereka memahami seluk-beluk konstruksi, pemecahan masalah, dan manajemen proyek. Dari memastikan integritas struktural hingga memilih material yang tepat, kontraktor profesional memiliki keterampilan untuk memberikan hasil yang berkualitas.",
    articleContent3: {
      title: "",
      content: [],
      body: "",
    },
    comments: {
      title: "3 testimonial",
      comments: [
        {
          title: "Wilson Swanson",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Saya menyewa kontraktor ini untuk merenovasi rumah besar-besaran, dan saya sangat puas dengan hasilnya. Mereka profesional, efisien, dan perhatian mereka terhadap detail sangat luar biasa. Proyek selesai tepat waktu, dan kualitas pekerjaan melebihi ekspektasi saya. Saya sangat merekomendasikan mereka!",
          image: "../assets/img/client/1.jpg",
        },
        {
          title: "Ella Hodges",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Tim tersebut melakukan pekerjaan yang luar biasa pada rekonstruksi dapur saya! Mereka meluangkan waktu untuk memahami visi saya dan melaksanakannya dengan sempurna. Prosesnya lancar dari awal hingga akhir, dan mereka selalu siap menjawab pertanyaan saya. Saya sangat senang dengan hasil akhirnya dan pasti akan menggunakan jasa mereka lagi!",
          image: "../assets/img/client/2.jpg",
        },
        {
          title: "Melissa Bryant",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Kami menyewa kontraktor ini untuk pembangunan rumah baru, dan pengalamannya luar biasa. Dari konsultasi awal hingga penyelesaian proyek, mereka dapat diandalkan, komunikatif, dan profesional. Mereka memastikan semuanya dilakukan sesuai kode, dan hasilnya tetap seperti yang kami inginkan. Sangat merekomendasikan layanan mereka!",
          image: "../assets/img/client/4.jpg",
        },
      ],
    },
    serviceTitle: "Many Service",
    article: [
      {
        title: "Layanan Bus",
        date: "17 Jan 2025",
        link: "/OtherService/bus",
        image: "../assets/img/buss2.jpg",
      },
      {
        title: "Layanan Konsultan",
        date: "19 Jan 2025",
        link: "/OtherService/consultant",
        image: "../assets/img/consultant2.jpg",
      },
      {
        title: "Layanan Pembantu",
        date: "22 Jan 2025",
        link: "/OtherService/helper",
        image: "../assets/img/helper2.jpg",
      },
      {
        title: "Layanan Outsourcing",
        date: "28 Jan 2025",
        link: "/OtherService/outsourcing",
        image: "../assets/img/outsourcing1.jpeg",
      },
      {
        title: "Layanan Arsitek",
        date: "30 Jan 2025",
        link: "/OtherService/arsitek",
        image: "../assets/img/arsitek1.jpeg",
      },
      {
        title: "Layanan Surat",
        date: "15 Jan 2025",
        link: "/OtherService/surat",
        image: "../assets/img/trust4.jpg",
      },
    ],
    rating: [
      {
        title: "Layanan",
        number: "90",
      },
      {
        title: "Hasil",
        number: "90",
      },
      {
        title: "Respon",
        number: "90",
      },
      {
        title: "Teknologi",
        number: "100",
      },
      {
        title: "Bisnis",
        number: "100",
      },
    ],
    tags: [
      "Solusi Jalan Raya",
      "Solusi Rumah",
      "Vendorisasi",
      "Solusi",
      "Industri",
      "Pemasaran",
      "Pengembangan Bisnis",
      "Perusahaan Rintisan",
    ],
  };

  return (
    <>
      <BlogDetails
        classbg={dataBlogDetails.classbg}
        title={dataBlogDetails.title}
        subTitle={dataBlogDetails.subTitle}
        name={dataBlogDetails.name}
        date={dataBlogDetails.date}
        articleTitle={dataBlogDetails.articleTitle}
        articleContent={dataBlogDetails.articleContent}
        image1={dataBlogDetails.image1}
        image2={dataBlogDetails.image2}
        image3={dataBlogDetails.image3}
        articleTitle2={dataBlogDetails.articleTitle2}
        articleContent2={dataBlogDetails.articleContent2}
        articleContent3={dataBlogDetails.articleContent3}
        comments={dataBlogDetails.comments}
        serviceTitle={dataBlogDetails.serviceTitle}
        article={dataBlogDetails.article}
        rating={dataBlogDetails.rating}
        tags={dataBlogDetails.tags}
      ></BlogDetails>
    </>
  );
}

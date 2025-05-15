import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function contractor() {
  const dataBlogDetails: articleDetail = {
    classbg: "arsitek",
    title: "Layanan Lainnya",
    subTitle: "Layanan Arsitek",
    name: "Alex",
    date: "30 Jan 2025",
    articleTitle:
      "Arsitektur: Lebih dari Sekadar Bangunan, Ini Tentang Kehidupan",
    articleContent:
      "Arsitektur adalah proses perencanaan, perancangan, dan pembangunan struktur fisik seperti rumah, gedung, taman, hingga kota. Namun lebih dari itu, arsitektur adalah refleksi dari budaya, teknologi, dan kebutuhan zaman. Seorang arsitek tidak hanya menciptakan ruang; mereka menciptakan pengalaman. Mereka mempertimbangkan sirkulasi udara, pencahayaan alami, orientasi matahari, keindahan visual, serta kebutuhan fungsional pengguna.",
    image1: "../assets/img/arsitek1.jpeg",
    image2: "../assets/img/arsitek2.jpeg",
    image3: "../assets/img/arsitek3.jpeg",
    articleTitle2: "Mengapa Anda Membutuhkan Layanan Arsitek Profesional?",
    articleContent2:
      "Merancang bangunan bukan hanya soal estetika, tapi juga struktur, legalitas, dan keamanan. Arsitek profesional membantu memastikan: Desain sesuai kebutuhan dan anggaran, Legalitas dan izin bangunan terpenuhi, Konstruksi efisien dan minim kesalahan, Nilai estetika dan fungsi berjalan beriringan",
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
            "Bekerja sama dengan HYS merupakan pengalaman yang luar biasa. Mereka benar-benar mendengarkan apa yang kami inginkan untuk rumah impian kami dan menerjemahkan ide-ide kami ke dalam desain yang indah sekaligus fungsional. Setiap detail, dari pencahayaan alami hingga efisiensi ruang, direncanakan dengan saksama. Kami sangat puas dengan hasilnya.",
          image: "../assets/img/client/1.jpg",
        },
        {
          title: "Ella Hodges",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "HYS dan tim mereka mewujudkan visi kami untuk ruang kantor yang modern dan kolaboratif. Mereka menyeimbangkan estetika dengan kepraktisan, menciptakan lingkungan yang menginspirasi kreativitas dan produktivitas. Profesionalisme dan kemampuan mereka dalam mengelola seluruh proses desain membuat pengalaman tersebut bebas stres.",
          image: "../assets/img/client/2.jpg",
        },
        {
          title: "Melissa Bryant",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Rumah lama kami memerlukan renovasi besar, dan HYS memberinya kehidupan yang benar-benar baru. Mereka menghargai karakter aslinya sambil memasukkan sentuhan modern dan solusi berkelanjutan. Desain akhir melampaui ekspektasi kami.",
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
        title: "Layanan Kontraktor",
        date: "20 Jan 2025",
        link: "/OtherService/contractor",
        image: "../assets/img/contractor2.jpg",
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

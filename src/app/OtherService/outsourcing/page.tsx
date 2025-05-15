import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function outsourcing() {
  const dataBlogDetails: articleDetail = {
    classbg: "outsourcing",
    title: "Layanan Lainnya",
    subTitle: "Layanan OutSourcing",
    name: "William",
    date: "28 Jan 2025",
    articleTitle: "Butuh Bantuan Karyawan? Kami Siap Membantu Anda!",
    articleContent:
      "HYS merupakan mitra outsourcing terpercaya yang menyediakan solusi efisien dan berkualitas untuk mendukung pertumbuhan bisnis Anda. Kami menghadirkan tenaga profesional berpengalaman di berbagai bidang, mulai dari clearning service,tenaga kerja industri, administrasi, hingga layanan tenaga kerja pengamanan atau security. Dengan pendekatan yang fleksibel dan berbasis hasil, kami membantu perusahaan mengurangi biaya operasional, meningkatkan efisiensi, serta fokus pada inti bisnis mereka.",
    image1: "../assets/img/outsourcing1.jpeg",
    image2: "../assets/img/outsourcing2.jpeg",
    image3: "../assets/img/outsourcing3.jpeg",
    articleTitle2:
      "Kekuatan Outsourcing: Mengapa Bisnis Cerdas Mendelegasikan Tugas demi Pertumbuhan",
    articleContent2:
      "Dalam lanskap bisnis yang serba cepat dan sangat kompetitif saat ini, perusahaan dari semua ukuran mencari cara yang efisien untuk meningkatkan skala, mengurangi biaya, dan tetap fokus pada aktivitas inti. Salah satu strategi yang terus membuktikan nilainya adalah outsourcing — praktik mendelegasikan proses bisnis tertentu kepada pakar eksternal. Baik itu dukungan pelanggan, pengembangan TI, akuntansi, atau pemasaran, outsourcing bukan lagi sekadar taktik penghematan biaya — tetapi akselerator pertumbuhan.",
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
            "Bermitra dengan HYS telah mengubah permainan bisnis kami. Tim mereka dengan cepat memahami kebutuhan kami dan terintegrasi dengan lancar dengan operasi kami. Yang paling mengesankan bagi kami adalah profesionalisme mereka, waktu penyelesaian yang cepat, dan komitmen terhadap kualitas. Kami telah melihat peningkatan efisiensi dan penghematan biaya yang signifikan sejak kami mulai melakukan outsourcing dengan mereka. Saya sangat merekomendasikan layanan mereka kepada perusahaan mana pun yang ingin meningkatkan skala secara cerdas dan efektif.",
          image: "../assets/img/client/1.jpg",
        },
        {
          title: "Ella Hodges",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Kami bermitra dengan HYS untuk meningkatkan tim pengembangan kami, dan hasilnya telah melampaui ekspektasi. Mereka memberikan kode berkualitas tinggi, memenuhi setiap tenggat waktu, dan berkomunikasi secara proaktif. Pengalihdayaan kepada mereka memberi kami fleksibilitas dan kecepatan yang tidak dapat kami temukan di tempat lain.",
          image: "../assets/img/client/2.jpg",
        },
        {
          title: "Melissa Bryant",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Bekerja sama dengan HYS untuk kebutuhan desain kami telah memberikan sentuhan baru yang kreatif bagi merek kami. Tim desain mereka responsif, berbakat, dan selalu tepat waktu. Rasanya seperti memiliki tim internal tanpa biaya tambahan.",
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
        title: "Layanan Pembantu ",
        date: "22 Jan 2025",
        link: "/OtherService/helper",
        image: "../assets/img/helper2.jpg",
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

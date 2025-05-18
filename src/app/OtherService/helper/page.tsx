import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function helper() {
  const dataBlogDetails: articleDetail = {
    classbg: "helper",
    title: "Layanan Jasa Lainnya",
    subTitle: "Layanan Jasa Pembantu",
    name: "William",
    date: "22 Jan 2025",
    articleTitle: "Butuh Bantuan? Kami Siap Membantu Anda!",
    articleContent:
      "Jadwal yang padat? Tidak masalah! Layanan bantuan profesional kami dapat dihubungi melalui telepon. Baik itu membersihkan, menata, atau membantu pekerjaan rumah, kami siap memberikan dukungan yang terjangkau dan dapat diandalkan. Hubungi kami sekarang untuk memulai!",
    image1: "../assets/img/helper4.jpeg",
    image2: "../assets/img/helper2.jpeg",
    image3: "../assets/img/helper3.jpeg",
    articleTitle2: "Let Us Make Your Life Simpler!",
    articleContent2:
      "Dari tugas sehari-hari hingga proyek khusus, tim kami yang berpengalaman siap membantu apa pun yang Anda butuhkan. Hemat waktu dan kurangi stres dengan layanan bantuan tepercaya kami. Hubungi kami hari ini untuk mendapatkan paket khusus!",
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
            "Saya menyewa jasa pembantu ini untuk beberapa tugas perbaikan rumah, dan saya benar-benar terkesan. Mereka sopan, dapat diandalkan, dan menyelesaikan pekerjaan dengan sangat memperhatikan detail. Dukungan mereka telah membuat perbedaan besar, dan saya pasti akan menghubungi mereka lagi!",
          image: "../assets/img/client/1.jpg",
        },
        {
          title: "Ella Hodges",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Layanan bantuan ini telah menjadi penyelamat saya! Dengan jadwal saya yang padat, saya membutuhkan bantuan ekstra di rumah, dan mereka selalu memberikan bantuan terbaik. Timnya profesional, dan mereka selalu membuat rumah saya tampak fantastis. Sangat direkomendasikan!",
          image: "../assets/img/client/2.jpg",
        },
        {
          title: "Melissa Bryant",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Saya telah menggunakan layanan bantuan ini beberapa kali, dan mereka tidak pernah mengecewakan. Mereka selalu tepat waktu, efisien, dan teliti dalam segala hal yang mereka lakukan. Baik itu membersihkan, mengatur, atau mengurus tugas, saya dapat mengandalkan mereka untuk melakukan pekerjaan dengan baik setiap saat.",
          image: "../assets/img/client/4.jpg",
        },
      ],
    },
    serviceTitle: "Layanan Jasa Lainnya",
    article: [
      {
        title: "Layanan Jasa Bus",
        date: "17 Jan 2025",
        link: "/OtherService/bus",
        image: "../assets/img/buss2.jpg",
      },
      {
        title: "Layanan Jasa Konsultan",
        date: "19 Jan 2025",
        link: "/OtherService/consultant",
        image: "../assets/img/consultant2.jpg",
      },
      {
        title: "Layanan Jasa Kontraktor",
        date: "20 Jan 2025",
        link: "/OtherService/contractor",
        image: "../assets/img/contractor2.jpg",
      },
      {
        title: "Layanan Jasa Outsourcing",
        date: "28 Jan 2025",
        link: "/OtherService/outsourcing",
        image: "../assets/img/outsourcing1.jpeg",
      },
      {
        title: "Layanan Jasa Arsitek",
        date: "30 Jan 2025",
        link: "/OtherService/arsitek",
        image: "../assets/img/arsitek1.jpeg",
      },
      {
        title: "Layanan Jasa Surat",
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

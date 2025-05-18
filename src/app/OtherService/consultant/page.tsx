import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function consultant() {
  const dataBlogDetails: articleDetail = {
    classbg: "consultant",
    title: "Layanan Jasa Lainnya",
    subTitle: "Layanan Jasa Konsultasi",
    name: "Richard",
    date: "19 Jan 2025",
    articleTitle: "Apa itu Layanan Konsultan Masalah Hukum?",
    articleContent:
      "Layanan konsultan masalah hukum adalah layanan profesional khusus yang memberikan saran dan dukungan bagi individu atau organisasi yang menghadapi masalah hukum. Tidak seperti firma hukum tradisional, konsultan hukum tidak selalu mewakili klien di pengadilan, tetapi mereka menawarkan wawasan berharga tentang cara menangani dan menyelesaikan masalah hukum. Layanan ini sering kali lebih mudah diakses dan terjangkau daripada menyewa pengacara penuh waktu, menjadikannya pilihan yang sangat baik bagi mereka yang mencari bantuan langsung atau bimbingan hukum preventif.",
    image1: "../assets/img/consultant4.jpg",
    image2: "../assets/img/consultant2.jpg",
    image3: "../assets/img/consultant3.jpg",
    articleTitle2:
      "Mengapa Anda Membutuhkan Konsultan Masalah Hukum Dari Team HYS?",
    articleContent2:
      "HYS adalah konsultan hukum yang berfokus pada penyelesaian dan pengelolaan hubungan industrial antara perusahaan dan tenaga kerja. Kami hadir sebagai mitra strategis bagi perusahaan dalam membangun sistem ketenagakerjaan yang sehat, adil, dan sesuai dengan ketentuan hukum yang berlaku. Dengan tim profesional yang berpengalaman di bidang hukum ketenagakerjaan dan hubungan industrial, kami membantu perusahaan dalam mencegah dan menyelesaikan perselisihan, menyusun perjanjian kerja, serta memastikan kepatuhan terhadap regulasi ketenagakerjaan nasional.",
    articleContent3: {
      title: "Layanan Kami Meliputi:",
      content: [
        "Penyusunan dan review Perjanjian Kerja (PKWT/PKWTT)",
        "Penyusunan Peraturan Perusahaan (PP) dan Perjanjian Kerja Bersama (PKB)",
        "Pendampingan dalam perselisihan hubungan industrial",
        "Konsultasi hukum terkait PHK, outsourcing, dan kontrak kerja",
        "Representasi di mediasi, konsiliasi, dan pengadilan hubungan industrial",
      ],
      body: "Karena itu, kami mengedepankan pendekatan yang solutif, preventif, dan sesuai dengan praktik hukum terbaik. HYS solusi hukum yang tepat untuk hubungan industrial yang harmonis dan profesional.",
    },
    comments: {
      title: "3 testimonial",
      comments: [
        {
          title: "Wilson Swanson",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Saya menghubungi layanan konsultan ini saat saya menghadapi keputusan bisnis yang sulit. Bimbingan yang saya terima tidak hanya berwawasan luas tetapi juga praktis. Mereka meluangkan waktu untuk benar-benar memahami situasi saya dan memberikan solusi yang disesuaikan. Saya sangat merekomendasikan mereka kepada siapa pun yang membutuhkan saran ahli!",
          image: "../assets/img/client/1.jpg",
        },
        {
          title: "Ella Hodges",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Saya pernah bekerja dengan beberapa konsultan sebelumnya, tetapi tidak ada yang seteliti dan seprofesional tim ini. Mereka membantu saya mengatasi masalah yang rumit dengan mudah dan memberikan rekomendasi yang jelas dan dapat ditindaklanjuti. Saya tidak bisa mengharapkan pengalaman yang lebih baik!",
          image: "../assets/img/client/2.jpg",
        },
        {
          title: "Melissa Bryant",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Layanan konsultasi ini mengubah permainan bisnis kecil saya. Mereka memberikan saran ahli yang membantu menyederhanakan operasi kami dan menghemat waktu dan uang. Tim mereka responsif, berpengetahuan luas, dan sangat membantu di setiap langkah. Saya sangat puas dengan hasilnya!",
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
        title: "Layanan Jasa Kontraktor",
        date: "20 Jan 2025",
        link: "/OtherService/contractor",
        image: "../assets/img/contractor2.jpg",
      },
      {
        title: "Layanan Jasa Pembantu",
        date: "22 Jan 2025",
        link: "/OtherService/helper",
        image: "../assets/img/helper2.jpg",
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

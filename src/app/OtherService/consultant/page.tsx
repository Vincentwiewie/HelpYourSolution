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
    image1: "assets/img/consultant4.jpg",
    image2: "assets/img/consultant2.jpg",
    image3: "assets/img/consultant3.jpg",
    alt1: "Konsultan ketenagakerjaan Indonesia",
    alt2: "Konsultan PKWT dan PKWTT",
    alt3: "Jasa penyelesaian perselisihan hubungan industrial",
    articleTitle2:
      "Mengapa Anda Membutuhkan Konsultan Masalah Hukum Dari Team HYS?",
    articleContent2:
      "HYS adalah konsultan hukum yang berfokus pada ketenagakerjaan dan hubungan industrial di Indonesia. Kami menjadi mitra strategis perusahaan dalam membangun sistem kerja yang sehat, adil, dan sesuai dengan peraturan perundang-undangan ketenagakerjaan yang berlaku. Didukung oleh tim profesional berpengalaman di bidang hukum ketenagakerjaan dan manajemen hubungan industrial, HYS memberikan layanan komprehensif kepada perusahaan, antara lain: Mencegah dan menyelesaikan perselisihan hubungan industrial, Menyusun dan mereview perjanjian kerja, PKWT/PKWTT, dan peraturan perusahaan, Memberikan pendampingan hukum dalam menghadapi sengketa ketenagakerjaan, Memastikan kepatuhan terhadap regulasi ketenagakerjaan nasional, termasuk audit dan implementasi kebijakan ketenagakerjaan Dengan pendekatan hukum yang praktis, terukur, dan berorientasi pada keberlanjutan, HYS berkomitmen membantu perusahaan menciptakan lingkungan kerja kondusif yang mendukung pertumbuhan bisnis dan kesejahteraan tenaga kerja.",
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
          title: "Trasu",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Saya menghubungi layanan konsultan hukum ketenagakerjaan ini saat menghadapi keputusan bisnis yang kritis terkait manajemen tenaga kerja. Bimbingan hukum yang saya terima sangat komprehensif dan aplikatif. Tim konsultan meluangkan waktu untuk memahami konteks permasalahan secara mendalam dan memberikan solusi yang disesuaikan dengan kebutuhan perusahaan. Saya merekomendasikan HYS kepada siapa pun yang memerlukan nasihat hukum tenaga kerja profesional.",
          image: "assets/img/profile.jpeg",
        },
        {
          title: "Kurnia",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Saya pernah bekerja dengan beberapa konsultan ketenagakerjaan sebelumnya, tetapi tidak ada yang seteliti dan seprofesional tim ini. Mereka membantu saya mengatasi permasalahan yang kompleks di bidang hubungan industrial dengan pendekatan yang sistematis dan efektif. Rekomendasi yang diberikan sangat jelas, praktis, dan langsung bisa ditindaklanjuti. Pengalaman bersama tim HYS benar-benar melebihi harapan saya. Saya sangat merekomendasikan mereka bagi siapa pun yang memerlukan solusi hukum tenaga kerja yang andal dan profesional.",
          image: "assets/img/profile.jpeg",
        },
        {
          title: "Harto",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Layanan konsultasi hukum ketenagakerjaan ini benar-benar mengubah arah bisnis kecil saya. Dengan saran ahli yang diberikan, kami berhasil menyederhanakan operasional, meningkatkan efisiensi, dan menghemat waktu serta biaya. Tim mereka sangat responsif, memiliki pemahaman hukum yang mendalam, dan mendampingi kami di setiap tahap. Saya sangat puas dengan hasilnya dan tidak ragu merekomendasikan mereka kepada pelaku usaha yang membutuhkan dukungan hukum tenaga kerja yang terpercaya.",
          image: "assets/img/profile.jpeg",
        },
      ],
    },
    serviceTitle: "Layanan Jasa Lainnya",
    article: [
      {
        title: "Layanan Jasa Bus",
        date: "17 Jan 2025",
        link: "/OtherService/bus",
        image: "assets/img/buss2.jpg",
      },
      {
        title: "Layanan Jasa Kontraktor",
        date: "20 Jan 2025",
        link: "/OtherService/contractor",
        image: "assets/img/contractor2.jpg",
      },
      {
        title: "Layanan Jasa Pembantu",
        date: "22 Jan 2025",
        link: "/OtherService/helper",
        image: "assets/img/helper2.jpg",
      },
      {
        title: "Layanan Jasa Outsourcing",
        date: "28 Jan 2025",
        link: "/OtherService/outsourcing",
        image: "assets/img/outsourcing1.jpeg",
      },
      {
        title: "Layanan Jasa Arsitek",
        date: "30 Jan 2025",
        link: "/OtherService/arsitek",
        image: "assets/img/arsitek1.jpeg",
      },
      {
        title: "Layanan Jasa Surat",
        date: "15 Jan 2025",
        link: "/OtherService/surat",
        image: "assets/img/trust4.jpg",
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
        alt1={dataBlogDetails.alt1}
        alt2={dataBlogDetails.alt2}
        alt3={dataBlogDetails.alt3}
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

import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function contractor() {
  const dataBlogDetails: articleDetail = {
    classbg: "contractor",
    title: "Layanan Jasa Lainnya",
    subTitle: "Layanan Jasa Kontraktor",
    name: "Alex",
    date: "20 Jan 2025",
    articleTitle: "Apa itu Layanan Kontraktor?",
    articleContent:
      "Layanan kontraktor mencakup berbagai tugas khusus yang terkait dengan konstruksi, renovasi, dan perbaikan rumah. Kontraktor biasanya mengawasi proyek dari awal hingga akhir, berkoordinasi dengan subkontraktor, mengelola anggaran, mendapatkan izin, dan memastikan pekerjaan mematuhi kode dan peraturan bangunan setempat. Beberapa kontraktor mengkhususkan diri dalam bidang tertentu, seperti perpipaan, pekerjaan listrik, atau atap, sementara yang lain menawarkan layanan komprehensif yang mencakup semuanya mulai dari desain hingga sentuhan akhir.",
    image1: "../assets/img/contractor1.jpg",
    image2: "../assets/img/contractor2.jpg",
    image3: "../assets/img/contractor4.jpg",
    alt1: "kontraktor sipil dan arsitektur yang profesional",
    alt2: "kontraktor proyek komersial dan jasa kontraktor bangunan",
    alt3: "kontraktor pabrik atau gudang",
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
          title: "kris",
          date: "June 15 - 2025 12:30 PM",
          comments:
            "Saya menyewa kontraktor renovasi rumah ini untuk proyek renovasi besar-besaran, dan saya sangat puas dengan hasilnya. Tim mereka sangat profesional, efisien, dan menunjukkan perhatian luar biasa terhadap detail. Proyek diselesaikan tepat waktu, dan kualitas pengerjaan benar-benar melebihi ekspektasi saya. Jika Anda mencari kontraktor bangunan terpercaya yang berkomitmen terhadap kualitas, saya sangat merekomendasikan layanan mereka.",
          image: "../assets/img/profile.jpeg",
        },
        {
          title: "yusni",
          date: "July 15 - 2025 12:30 PM",
          comments:
            "Tim ini melakukan pekerjaan luar biasa dalam proyek rekonstruksi dapur saya! Mereka benar-benar meluangkan waktu untuk memahami visi dan preferensi saya, lalu mewujudkannya dengan sangat presisi. Seluruh proses berjalan lancar dari awal hingga akhir, dan mereka selalu responsif terhadap setiap pertanyaan. Saya sangat puas dengan hasil renovasi dapur ini dan tidak ragu akan menggunakan jasa mereka lagi di masa depan.",
          image: "../assets/img/profile.jpeg",
        },
        {
          title: "angel",
          date: "March 15 - 2025 12:30 PM",
          comments:
            "Kami menyewa kontraktor pembangunan rumah ini untuk proyek pembangunan rumah baru kami, dan pengalaman bekerja dengan mereka sangat luar biasa. Mulai dari konsultasi awal hingga penyelesaian proyek, tim ini sangat dapat diandalkan, komunikatif, dan profesional. Mereka memastikan semua pekerjaan sesuai dengan standar dan kode bangunan yang berlaku, serta hasil akhirnya sesuai dengan harapan kami. Kami sangat merekomendasikan layanan mereka kepada siapa pun yang mencari kontraktor rumah terpercaya.",
          image: "../assets/img/profile.jpeg",
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

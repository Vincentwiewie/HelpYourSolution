import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function helper() {
  const dataBlogDetails: articleDetail = {
    classbg: "helper",
    title: "Layanan Jasa Lainnya",
    subTitle: "Layanan Jasa Asisten Rumah Tangga",
    name: "William",
    date: "22 Jun 2025",
    articleTitle: "Butuh Bantuan? Kami Siap Membantu Anda!",
    articleContent:
      "Jadwal Padat? Layanan Bantuan Profesional Siap Membantu Anda dengan Cepat dan Terpercaya! Apakah Anda memiliki jadwal yang sangat padat sehingga kesulitan mengurus pekerjaan rumah? Jangan khawatir! Layanan bantuan profesional kami siap memberikan solusi praktis dan terpercaya untuk kebutuhan rumah tangga Anda. Mulai dari membersihkan rumah secara menyeluruh, menata ruangan dengan rapi, hingga membantu berbagai pekerjaan rumah lainnya, tim kami selalu siap mendukung Anda. Kami mengutamakan pelayanan cepat, efisien, dan hasil kerja berkualitas dengan harga yang terjangkau. Anda bisa menghubungi kami langsung melalui telepon kapan saja untuk mendapatkan bantuan yang Anda butuhkan tanpa ribet. Dengan layanan kami, rumah Anda akan selalu bersih, tertata, dan nyaman meskipun Anda memiliki jadwal super sibuk.",
    image1: "../assets/img/helper4.jpeg",
    image2: "../assets/img/helper2.jpeg",
    image3: "../assets/img/helper3.jpeg",
    alt1: "jasa bersih rumah",
    alt2: "layanan bersih rumah",
    alt3: "jasa cleaning service rumah",
    articleTitle2: "Biarkan Kami Membuat hidup anda Lebih Mudah",
    articleContent2:
      "Kenapa memilih layanan bantuan kami? Tepat waktu dan responsif dalam setiap permintaan, Tenaga profesional yang berpengalaman dan ramah, Harga yang kompetitif dan transparan, Fleksibilitas layanan sesuai kebutuhan Anda, Jangan biarkan kesibukan mengganggu kenyamanan rumah Anda! Hubungi kami sekarang juga dan rasakan kemudahan memiliki asisten rumah tangga yang dapat diandalkan kapan pun Anda butuhkan. Dengan layanan bantuan profesional kami, rumah Anda akan selalu dalam kondisi terbaik tanpa harus mengorbankan waktu berharga Anda.",
    articleContent3: {
      title: "",
      content: [],
      body: "",
    },
    comments: {
      title: "3 testimonial",
      comments: [
        {
          title: "Wilson",
          date: "June 15 - 2025 12:30 PM",
          comments:
            "Testimoni Jasa Pembantu & Perbaikan Rumah: Teliti, Dapat Diandalkan, dan Profesional, Saya menyewa jasa pembantu profesional ini untuk beberapa tugas perbaikan rumah, dan saya benar-benar terkesan dengan hasilnya. Tim mereka sopan, dapat diandalkan, dan menyelesaikan setiap pekerjaan dengan perhatian tinggi terhadap detail. Dukungan mereka memberikan perbedaan besar dalam kenyamanan rumah saya. Layanan seperti ini sulit ditemukan—saya pasti akan menghubungi mereka lagi untuk kebutuhan selanjutnya!",
          image: "../assets/img/profile.jpeg",
        },
        {
          title: "Ella",
          date: "March 15 - 2025 12:30 PM",
          comments:
            "Testimoni Layanan Bantuan Rumah Tangga: Solusi Tepat untuk Jadwal Padat, Layanan bantuan rumah tangga ini benar-benar menjadi penyelamat bagi saya! Dengan jadwal yang super padat, saya sangat membutuhkan bantuan ekstra di rumah, dan mereka selalu memberikan layanan terbaik. Timnya profesional, terpercaya, dan hasil kerjanya luar biasa — rumah saya selalu tampak bersih, rapi, dan nyaman. Bagi siapa pun yang membutuhkan jasa bantuan rumah tangga berkualitas, layanan ini sangat saya rekomendasikan!",
          image: "../assets/img/profile.jpeg",
        },
        {
          title: "Bryant",
          date: "Feb 15 - 2025 12:30 PM",
          comments:
            "Testimoni Layanan Bantuan Profesional: Tepat Waktu, Efisien, dan Dapat Diandalkan, Saya telah menggunakan layanan bantuan profesional ini beberapa kali, dan hasilnya selalu memuaskan. Mereka tidak pernah mengecewakan — selalu tepat waktu, efisien, dan teliti dalam setiap pekerjaan. Baik untuk jasa bersih-bersih, pengaturan ruangan, atau pengurusan tugas rumah tangga, saya selalu bisa mengandalkan mereka. Pelayanan yang konsisten, profesional, dan dapat dipercaya. Sangat direkomendasikan!.",
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

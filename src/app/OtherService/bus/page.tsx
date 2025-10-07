import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function bus() {
  const dataBlogDetails: articleDetail = {
    classbg: "buss",
    title: "Layanan Jasa Lainnya",
    subTitle: "Layanan Jasa Bus",
    name: "Teddy",
    date: "10 Okt 2025",
    articleTitle: "Layanan Bus Untuk Liburan Dan Sekolah",
    articleContent:
      "Di Hys Bus Service, kami berkomitmen untuk memberikan pengalaman perjalanan terbaik melalui prinsip kami: SafeJourney, setiap kali Anda bepergian bersama kami. Keselamatan dan kenyamanan penumpang adalah prioritas utama kami. Dengan sistem keamanan yang ketat, perawatan armada berkala, serta pengemudi berpengalaman, Anda dapat merasa tenang dan percaya diri sepanjang perjalanan. Melalui layanan ReliableRide, kami memastikan Anda tiba di tempat tujuan tepat waktu, tanpa hambatan dan tanpa stres. Jadwal kami yang terorganisir dan tim operasional yang responsif menjadikan kami pilihan yang dapat diandalkan untuk perjalanan harian, perjalanan antarkota, hingga perjalanan wisata bersama keluarga atau rombongan kerja. Kami bangga mempersembahkan SteadyTravel dan DependableDrive—layanan yang menjamin kenyamanan, konsistensi, dan stabilitas dalam setiap perjalanan. Baik itu rute rutin maupun perjalanan khusus, kami hadir dengan solusi transportasi profesional yang mendukung mobilitas Anda secara efisien. Dengan pendekatan SecureRoute dan janji layanan TrueTransit, kami selalu menempatkan keamanan penumpang di atas segalanya. Kami memantau kondisi jalan, cuaca, serta rute perjalanan agar Anda selalu berada di jalur yang aman dan efisien. Melalui SureWay dan EverSafe, Hys Bus Service memberikan jaminan kualitas: perjalanan Anda akan selalu nyaman, aman, dan bebas dari keraguan. Kepercayaan Anda adalah fondasi pelayanan kami, dan kami siap menjadi mitra perjalanan terpercaya Anda.",
    image1: "../assets/img/buss4.jpg",
    image2: "../assets/img/buss2.jpg",
    image3: "../assets/img/buss3.jpg",
    alt1: "Bus travel",
    alt2: "Bus Pariwisata",
    alt3: "Jasa Bus",
    articleTitle2:
      "Kami mengutamakan keselamatan dan kenyamanan bagi siapa saja",
    articleContent2:
      "Di HysTrip, kami berkomitmen untuk memberikan pengalaman perjalanan yang aman, nyaman, dan bebas stres kepada setiap penumpang. Kami selalu mengutamakan keselamatan penumpang di setiap langkah perjalanan, itulah sebabnya kami menghadirkan layanan SecureRide—standar keselamatan tinggi yang berlaku sejak keberangkatan hingga Anda tiba di tujuan. Kami memahami bahwa perjalanan yang ideal bukan hanya tentang sampai di tempat tujuan, tetapi juga tentang kenyamanan sepanjang perjalanan. Oleh karena itu, kami memperkenalkan kombinasi ComfortShield dan CushionGuard, fitur unggulan kami yang dirancang untuk menciptakan suasana tenang, nyaman, dan terlindungi di dalam kendaraan maupun pesawat. Nikmati pengalaman ComfySecure, di mana Anda dapat bersantai sepenuhnya, atau GuardedComfort, yang memberikan ketenangan pikiran melalui sistem keamanan dan kenyamanan berlapis. Di HysTrip, kami menghadirkan layanan perjalanan berkualitas tinggi yang mengutamakan standar keselamatan transportasi dan kenyamanan maksimal—tanpa kompromi. Apapun tujuan Anda, baik untuk urusan bisnis, liburan keluarga, atau perjalanan individu, HysTrip adalah pilihan transportasi modern yang andal dan siap memberikan pengalaman yang bebas repot dan menyenangkan.",
    articleContent3: {
      title: "",
      content: [],
      body: "",
    },
    comments: {
      title: "3 testimonial",
      comments: [
        {
          title: "Budi",
          date: "10 Okt - 2025 12:30 WIB",
          comments:
            "Di HysTrip, keselamatan adalah prioritas utama kami. Kami menghadirkan pengalaman SecureRide dalam setiap perjalanan, memastikan setiap penumpang merasa aman dan nyaman dari awal hingga akhir. Kami percaya bahwa perjalanan tidak hanya harus cepat, tapi juga nyaman dan terlindungi. Oleh karena itu, kami menyediakan fitur unggulan seperti ComfortShield dan CushionGuard, yang dirancang khusus untuk menciptakan lingkungan transportasi yang aman dan nyaman—baik di dalam bus, mobil travel, maupun pesawat. Dengan ComfySecure, Anda bisa menikmati suasana tenang dan santai selama perjalanan. Sementara GuardedComfort memberikan ketenangan pikiran melalui sistem keamanan berlapis dan armada yang selalu dalam kondisi prima. Tim kami yang profesional siap memberikan layanan perjalanan terbaik, tanpa ribet dan tanpa khawatir. Apakah Anda bepergian untuk urusan bisnis, wisata keluarga, atau perjalanan pribadi, HysTrip adalah pilihan jasa transportasi modern yang dapat diandalkan—menggabungkan keselamatan, kenyamanan, dan ketepatan waktu.",
          image: "../assets/img/profile.jpeg",
        },
        {
          title: "Hella",
          date: "11 Okt - 2025 19:10 WIB",
          comments:
            "Saya benar-benar terkesan dengan kebersihan dan ketepatan waktu bus-bus dari layanan ini. Armada mereka selalu terawat dengan baik, kabin bersih, dan tiba sesuai jadwal—sangat penting untuk perjalanan harian maupun perjalanan jarak jauh Layanannya sangat profesional dan ramah, dan yang paling saya hargai adalah rasa aman selama perjalanan. Setiap pengalaman naik bus terasa nyaman, tertib, dan bebas dari kekhawatiran. Saya sangat merekomendasikan layanan transportasi ini kepada siapa pun yang mencari moda transportasi darat yang dapat diandalkan, nyaman, dan aman. Cocok untuk keperluan pribadi, bisnis, atau wisata keluarga.",
          image: "../assets/img/profile.jpeg",
        },
        {
          title: "Putri",
          date: "12 Okt - 2025 15:50 WIB",
          comments:
            "Sebagai seseorang yang sering bepergian, saya sudah mencoba banyak layanan bus, namun layanan bus ini benar-benar menonjol. Armada bus selalu bersih dan nyaman, serta pengemudi yang ramah dan profesional membuat perjalanan semakin menyenangkan. Layanan ini sangat dapat diandalkan dengan jadwal keberangkatan yang tepat waktu dan harga yang terjangkau. Saya sangat merekomendasikan jasa transportasi ini bagi siapa saja yang membutuhkan moda transportasi yang nyaman, aman, dan hemat biaya.",
          image: "../assets/img/profile.jpeg",
        },
      ],
    },
    serviceTitle: "Layanan Jasa Lainnya",
    article: [
      {
        title: "Layanan Jasa Konsultan",
        date: "10 Okt 2025",
        link: "/OtherService/consultant",
        image: "../assets/img/consultant2.jpg",
      },
      {
        title: "Layanan Jasa Kontraktor",
        date: "10 Okt 2025",
        link: "/OtherService/contractor",
        image: "../assets/img/contractor2.jpg",
      },
      {
        title: "Layanan Jasa Pembantu ",
        date: "10 Okt 2025",
        link: "/OtherService/helper",
        image: "../assets/img/helper2.jpg",
      },
      {
        title: "Layanan Jasa Outsourcing",
        date: "10 Okt 2025",
        link: "/OtherService/outsourcing",
        image: "../assets/img/outsourcing1.jpeg",
      },
      {
        title: "Layanan Jasa Arsitek",
        date: "10 Okt 2025",
        link: "/OtherService/arsitek",
        image: "../assets/img/arsitek1.jpeg",
      },
      {
        title: "Layanan Jasa Surat",
        date: "10 Okt 2025",
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

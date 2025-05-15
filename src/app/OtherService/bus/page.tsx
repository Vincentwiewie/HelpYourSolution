import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function bus() {
  const dataBlogDetails: articleDetail = {
    classbg: "buss",
    title: "Layanan Lainnya",
    subTitle: "Layanan Bus",
    name: "Teddy",
    date: "17 Jan 2025",
    articleTitle: "Layanan Bus Untuk Liburan Dan Sekolah",
    articleContent:
      "Di Hys Bus Service, kami berkomitmen untuk menyediakan SafeJourney di setiap perjalanan, memastikan penumpang kami merasa aman dan percaya diri. Dengan layanan ReliableRide kami, Anda selalu dapat mengandalkan kami untuk mengantar Anda ke tujuan tepat waktu dan tanpa repot. Kami bangga menawarkan SteadyTravel dan DependableDrive, yang menjamin pengalaman yang lancar dan konsisten setiap kali Anda berkendara. Perencanaan SecureRoute dan janji TrueTransit kami berfokus pada keselamatan dan keandalan, jadi Anda tidak perlu khawatir. Dengan SureWay dan EverSafe, Anda dapat percaya bahwa perjalanan Anda bersama kami akan selalu menjadi pilihan yang tepat untuk ketenangan pikiran dan layanan yang dapat diandalkan.",
    image1: "../assets/img/buss4.jpg",
    image2: "../assets/img/buss2.jpg",
    image3: "../assets/img/buss3.jpg",
    articleTitle2:
      "Kami mengutamakan keselamatan dan kenyamanan bagi siapa saja",
    articleContent2:
      "Di HysTrip, kami mengutamakan Keselamatan di setiap perjalanan, memastikan bahwa penumpang kami merasakan SecureRide dari awal hingga akhir. Kami percaya bahwa perjalanan haruslah santai sekaligus aman, itulah sebabnya kami menawarkan kombinasi ComfortShield dan CushionGuard untuk menciptakan lingkungan yang nyaman dan aman di dalam pesawat. Baik Anda menikmati suasana ComfySecure atau ketenangan pikiran yang menyertai GuardedComfort kami, kami berusaha untuk menyediakan perjalanan yang tidak hanya aman tetapi juga nyaman tanpa perlu usaha apa pun.",
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
            "Saya telah menggunakan layanan bus ini selama berbulan-bulan, dan saya sangat puas. Bus-busnya selalu tepat waktu, dan pengemudinya sopan. Sangat nyaman, dan membuat perjalanan harian saya bebas stres!",
          image: "../assets/img/client/1.jpg",
        },
        {
          title: "Ella Hodges",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Saya benar-benar terkesan dengan kebersihan dan ketepatan waktu bus-bus tersebut. Layanannya sangat baik, dan saya selalu merasa aman selama bepergian. Saya sangat merekomendasikannya kepada siapa pun yang mencari moda transportasi yang dapat diandalkan!",
          image: "../assets/img/client/2.jpg",
        },
        {
          title: "Melissa Bryant",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Sebagai seorang yang sering bepergian, saya telah mencoba banyak layanan bus, dan yang satu ini menonjol. Layanan ini dapat diandalkan, dengan pengemudi yang ramah dan bus yang bersih. Saya sangat merekomendasikannya kepada siapa pun yang membutuhkan pilihan transportasi yang dapat diandalkan dan terjangkau.",
          image: "../assets/img/client/4.jpg",
        },
      ],
    },
    serviceTitle: "Banyak Layanan",
    article: [
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

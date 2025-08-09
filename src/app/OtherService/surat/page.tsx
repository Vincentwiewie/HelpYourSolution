import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function contractor() {
  const dataBlogDetails: articleDetail = {
    classbg: "surat",
    title: "Layanan Jasa Lainnya",
    subTitle: "Layanan Jasa Surat",
    name: "Andi",
    date: "15 Jan 2025",
    articleTitle: "HYS Jasa pengurusan surat surat",
    articleContent:
      "HYS adalah biro jasa profesional dan terpercaya yang melayani pengurusan berbagai jenis dokumen penting dan surat-surat legalitas, baik untuk kebutuhan pribadi maupun perusahaan. Kami hadir sebagai solusi cerdas untuk Anda yang ingin menyelesaikan urusan administratif secara cepat, aman, dan efisien—tanpa harus membuang waktu dan tenaga. HYS siap membantu Anda menyelesaikan proses legalitas secara tepat waktu dan bebas stres.",
    image1: "assets/img/trust4.jpg",
    image2: "assets/img/trust5.jpg",
    image3: "assets/img/trust6.jpg",
    alt1: "Jasa pengurusan STNK",
    alt2: "Jasa perpanjangan pajak motor/mobil",
    alt3: "Jasa pengurusan pajak kendaraan",
    articleTitle2: "Mengapa Anda Membutuhkan Layanan Surat Yang Profesional?",
    articleContent2:
      "Dengan Layanan cepat dan aman, Tim profesional dan berpengalaman, Jaringan luas di instansi terkait, Transparansi biaya dan proses, Percayakan kebutuhan administratif Anda kepada HYS – Biro jasa terpercaya yang memudahkan urusan legalitas Anda baik individu maupun korporat,",
    articleContent3: {
      title: "Layanan Kami Meliputi:",
      content: [
        "Pengurusan STNK, BPKB, Mutasi, Balik Nama Kendaraan",
        "Pengurusan SIM dan Perpanjangan SIM",
        "Pengurusan SKCK dan dokumen kepolisian lainnya",
        "Pengurusan NPWP, SIUP, NIB, dan dokumen legalitas usaha",
        "Layanan dokumen imigrasi (paspor, KITAS, dll)",
        "Pengurusan akta, surat kuasa, dan dokumen hukum lainnya",
      ],
      body: "Kami mengutamakan kecepatan, transparansi, dan kerahasiaan data dalam setiap proses layanan. Serahkan kebutuhan pengurusan dokumen Anda kepada kami, dan fokuslah pada hal-hal penting lainnya. HYS Solusi praktis untuk semua kebutuhan surat-surat Anda.",
    },
    comments: {
      title: "3 testimonial",
      comments: [
        {
          title: "Howard",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Cepat banget prosesnya! Saya nggak sampai satu hari, dokumen sudah jadi. Murah, mudah, dan tanpa ribet. Terima kasih Biro Jasa Laxmi—semoga makin sukses dan banyak pelanggan!",
          image: "assets/img/profile.jpeg",
        },
        {
          title: "Mulia",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Proses pengurusan SIM di Biro Jasa Laxmi sangat cepat dan mudah. Setelah pembayaran, saya langsung dipandu ke Polres untuk foto, dan dalam waktu kurang dari 20 menit, SIM sudah jadi. Pelayanan tanpa ribet dan sangat profesional. Saya rekomendasikan jasa pengurusan SIM ini untuk siapa saja yang butuh layanan cepat, terpercaya, dan efisien.",
          image: "assets/img/profile.jpeg",
        },
        {
          title: "Goldim",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Biro jasa HYS sangat oke dan bisa dipercaya. Saya melakukan transfer ke rekening bank atas nama Laxmi Selviana jam 1 siang, dan SIM saya langsung jadi hanya dalam 1 hari. Ini bukan omong kosong, saya benar-benar merekomendasikan jasa pengurusan SIM yang cepat dan profesional ini. Coba buktikan sendiri!",
          image: "assets/img/profile.jpeg",
        },
      ],
    },
    serviceTitle: "Many Service",
    article: [
      {
        title: "Layanan Jasa Bus",
        date: "17 Jan 2025",
        link: "/OtherService/bus",
        image: "assets/img/buss2.jpg",
      },
      {
        title: "Layanan Jasa Konsultan",
        date: "19 Jan 2025",
        link: "/OtherService/consultant",
        image: "assets/img/consultant2.jpg",
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

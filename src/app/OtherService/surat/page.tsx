import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function contractor() {
  const dataBlogDetails: articleDetail = {
    classbg: "surat",
    title: "Layanan Lainnya",
    subTitle: "Layanan Surat",
    name: "Andi",
    date: "15 Jan 2025",
    articleTitle: "Biro Jasa pengurusan surat HYS",
    articleContent:
      "HYS adalah biro jasa terpercaya yang melayani pengurusan berbagai jenis dokumen dan surat-surat penting secara cepat, aman, dan profesional. Kami hadir untuk memudahkan Anda dalam menangani urusan administratif yang seringkali memakan waktu dan tenaga. Dengan pengalaman dan jaringan kerja yang luas, kami siap membantu individu maupun perusahaan dalam menyelesaikan proses legalitas dengan efisien dan tepat waktu.",
    image1: "../assets/img/trust4.jpg",
    image2: "../assets/img/trust5.jpg",
    image3: "../assets/img/trust6.jpg",
    articleTitle2: "Mengapa Anda Membutuhkan Layanan Surat Yang Profesional?",
    articleContent2:
      "Fungsi utama dari layanan surat adalah mempermudah masyarakat dalam mengurus dokumen resmi yang diperlukan untuk keperluan pribadi, pendidikan, pekerjaan, atau keperluan hukum. Surat-surat ini sering menjadi syarat untuk mengakses layanan lainnya, seperti mengurus KTP, mendaftar sekolah, atau melamar pekerjaan.",
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
          title: "Wilson Swanson",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Cepet banget responsnya, saya nggak sampai 1 hari udah jadi, murah dan mudah.. thanks Biro Jasa Laxmi, semoga tambah sukses.",
          image: "../assets/img/client/1.jpg",
        },
        {
          title: "Ella Hodges",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Cepet, nggak ribet, dilayani dengan baik, bayar, besoknya dipandu ke Polres untuk foto, 20 menit SIM udah jadi.",
          image: "../assets/img/client/2.jpg",
        },
        {
          title: "Melissa Bryant",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "Biro jasa HYS ok punya. Bisa dipercaya. Uang saya transfer ke bank account Laxmi a.n Selviana, jam 1.00 SIM saya langsung jadi. Cuma 1 hari. Gak bohong. Coba aja buktikan sendiri. Terima kasih.",
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
        title: "Layanan Arsitek",
        date: "30 Jan 2025",
        link: "/OtherService/arsitek",
        image: "../assets/img/arsitek1.jpeg",
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

import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function contractor() {
  const dataBlogDetails: articleDetail = {
    classbg: "contractor",
    title: "Other Service",
    subTitle: "Contractor Service",
    name: "Alex",
    date: "20 Jan 2025",
    articleTitle: "What Are Contractor Services?",
    articleContent:
      "Contractor services encompass a wide range of specialized tasks related to construction, renovation, and home improvement. Contractors typically oversee projects from start to finish, coordinating with subcontractors, managing budgets, securing permits, and ensuring work complies with local building codes and regulations. Some contractors specialize in certain trades, such as plumbing, electrical work, or roofing, while others offer comprehensive services that cover everything from design to the final touches.",
    image1: "../assets/img/contractor4.jpg",
    image2: "../assets/img/contractor2.jpg",
    image3: "../assets/img/contractor3.jpg",
    articleTitle2: "Why You Need a Professional Contractor Service?",
    articleContent2:
      "Expertise and Experience: Contractors bring invaluable knowledge to any project. With years of experience in the field, they understand the nuances of construction, problem-solving, and project management. From ensuring structural integrity to selecting the right materials, a professional contractor has the skills to deliver quality results.",
    comments: {
      title: "3 testimonial",
      comments: [
        {
          title: "Wilson Swanson",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "I hired this contractor for a major home renovation, and I couldn't be happier with the results. They were professional, efficient, and their attention to detail was exceptional. The project was completed on time, and the quality of work exceeded my expectations. I highly recommend them!",
          image: "../assets/img/client/1.jpg",
        },
        {
          title: "Ella Hodges",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "The team did an amazing job on my kitchen remodel! They took the time to understand my vision and executed it perfectly. The process was smooth from start to finish, and they were always available to answer my questions. I'm thrilled with the final outcome and would definitely hire them again!",
          image: "../assets/img/client/2.jpg",
        },
        {
          title: "Melissa Bryant",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "We hired this contractor for a home addition, and the experience was fantastic. From initial consultation to project completion, they were reliable, communicative, and professional. They ensured everything was done to code, and the results were exactly what we wanted. Highly recommend their services!",
          image: "../assets/img/client/4.jpg",
        },
      ],
    },
    serviceTitle: "Many Service",
    article: [
      {
        title: "Bus Service",
        date: "17 Jan 2025",
        link: "/OtherService/bus",
        image: "../assets/img/buss2.jpg",
      },
      {
        title: "Consultant Service",
        date: "19 Jan 2025",
        link: "/OtherService/consultant",
        image: "../assets/img/consultant2.jpg",
      },
      {
        title: "Helper Service",
        date: "22 Jan 2025",
        link: "/OtherService/helper",
        image: "../assets/img/helper2.jpg",
      },
    ],
    rating: [
      {
        title: "Service",
        number: "90",
      },
      {
        title: "Result",
        number: "90",
      },
      {
        title: "Respond",
        number: "90",
      },
      {
        title: "Technology",
        number: "100",
      },
      {
        title: "Business",
        number: "100",
      },
    ],
    tags: [
      "Road Solution",
      "Home Solution",
      "Vendoring",
      "Solutions",
      "Industry",
      "Marketing",
      "Business Development",
      "Startup",
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
        comments={dataBlogDetails.comments}
        serviceTitle={dataBlogDetails.serviceTitle}
        article={dataBlogDetails.article}
        rating={dataBlogDetails.rating}
        tags={dataBlogDetails.tags}
      ></BlogDetails>
    </>
  );
}

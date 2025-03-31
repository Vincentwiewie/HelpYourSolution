import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function consultant() {
  const dataBlogDetails: articleDetail = {
    classbg: "consultant",
    title: "Other Service",
    subTitle: "Consultant Service",
    name: "Richard",
    date: "19 Jan 2025",
    articleTitle: "What is a Law Problem Consultant Service?",
    articleContent:
      "A law problem consultant service is a specialized professional service that provides advice and support for individuals or organizations facing legal issues. Unlike traditional law firms, a law consultant does not necessarily represent clients in court, but they offer valuable insights on how to approach and resolve legal matters. These services are often more accessible and affordable than hiring a full-time lawyer, making them an excellent option for those seeking immediate help or preventive legal guidance.",
    image1: "/assets/img/consultant4.jpg",
    image2: "/assets/img/consultant2.jpg",
    image3: "/assets/img/consultant3.jpg",
    articleTitle2: "Why Do You Need a Law Problem Consultant?",
    articleContent2:
      "Expert Advice on Legal Matters: A law consultant is typically a seasoned professional with expertise in specific areas of law, such as business law, family law, intellectual property, or personal injury. They provide insights and recommendations tailored to your specific legal situation, helping you understand the potential consequences and best courses of action.",
    comments: {
      title: "3 testimonial",
      comments: [
        {
          title: "Wilson Swanson",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "I reached out to this consultant service when I was facing a challenging business decision. The guidance I received was not only insightful but also practical. They took the time to truly understand my situation and provided tailored solutions. I highly recommend them to anyone in need of expert advice!",
          image: "/assets/img/client/1.jpg",
        },
        {
          title: "Ella Hodges",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "I’ve worked with several consultants in the past, but none have been as thorough and professional as this team. They helped me navigate through complex issues with ease and delivered clear, actionable recommendations. I couldn’t have asked for a better experience!",
          image: "/assets/img/client/2.jpg",
        },
        {
          title: "Melissa Bryant",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "This consultant service was a game-changer for my small business. They provided expert advice that helped streamline our operations and saved us time and money. Their team was responsive, knowledgeable, and extremely helpful every step of the way. I’m extremely satisfied with the results!",
          image: "/assets/img/client/4.jpg",
        },
      ],
    },
    serviceTitle: "Many Service",
    article: [
      {
        title: "Bus Service",
        date: "17 Jan 2025",
        link: "/OtherService/bus",
        image: "/assets/img/buss2.jpg",
      },
      {
        title: "Contractor Service",
        date: "20 Jan 2025",
        link: "/OtherService/contractor",
        image: "/assets/img/contractor2.jpg",
      },
      {
        title: "Helper Service",
        date: "22 Jan 2025",
        link: "/OtherService/helper",
        image: "/assets/img/helper2.jpg",
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

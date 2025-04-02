import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function helper() {
  const dataBlogDetails: articleDetail = {
    classbg: "helper",
    title: "Other Service",
    subTitle: "Helper Service",
    name: "William",
    date: "22 Jan 2025",
    articleTitle: "Need a Helping Hand? We've Got You Covered!",
    articleContent:
      "usy schedule? No problem! Our professional helper services are just a call away. Whether it's cleaning, organizing, or home assistance, we’re here to provide affordable and reliable support. Contact us now to get started!",
    image1: "../assets/img/helper4.jpg",
    image2: "../assets/img/helper2.jpg",
    image3: "../assets/img/helper3.jpg",
    articleTitle2: "Let Us Make Your Life Simpler!",
    articleContent2:
      "From everyday tasks to special projects, our experienced team is ready to help with whatever you need. Save time and reduce stress with our trusted helper service. Reach out today for a custom plan!",
    comments: {
      title: "3 testimonial",
      comments: [
        {
          title: "Wilson Swanson",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "I hired this helper service for a few home improvement tasks, and I was really impressed. They were courteous, dependable, and completed the work with great attention to detail. Their support has made a huge difference, and I will definitely call on them again!",
          image: "../assets/img/client/1.jpg",
        },
        {
          title: "Ella Hodges",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "This helper service has been a lifesaver for me! With my busy schedule, I need extra hands around the house, and they’ve consistently provided top-notch assistance. The team is professional, and they always leave my home looking fantastic. Highly recommend!",
          image: "../assets/img/client/2.jpg",
        },
        {
          title: "Melissa Bryant",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "I’ve used this helper service several times, and they never disappoint. They are always on time, efficient, and thorough in everything they do. Whether it’s cleaning, organizing, or running errands, I can count on them to do a great job every time.",
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
        title: "Contractor Service",
        date: "20 Jan 2025",
        link: "/OtherService/contractor",
        image: "../assets/img/contractor2.jpg",
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

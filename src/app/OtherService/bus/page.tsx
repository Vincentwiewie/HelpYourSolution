import { articleDetail } from "@/app/interface/Model";
import BlogDetails from "@/components/blogDetails";

export default function bus() {
  const dataBlogDetails: articleDetail = {
    classbg: "buss",
    title: "Other Service",
    subTitle: "Bus Service",
    name: "Teddy",
    date: "17 Jan 2025",
    articleTitle: "Bus Service For Holiday And School",
    articleContent:
      "At Hys Bus Service, we are committed to providing a SafeJourney with every trip, ensuring our passengers feel secure and confident. With our ReliableRide service, you can always count on us to get you to your destination on time and without hassle. We take pride in offering SteadyTravel and DependableDrive, guaranteeing a smooth, consistent experience each time you ride. Our SecureRoute planning and TrueTransit promise focus on safety and reliability, so you never have to worry. With SureWay and EverSafe, you can trust that your journey with us will always be the right choice for peace of mind and dependable service.",
    image1: "../assets/img/buss4.jpg",
    image2: "../assets/img/buss2.jpg",
    image3: "../assets/img/buss3.jpg",
    articleTitle2: "We Provide Safety And Comfort First For Anyone",
    articleContent2:
      "At HysTrip, we put SafetyFirst with every ride, ensuring that our passengers experience a SecureRide from start to finish. We believe that travel should be as relaxing as it is safe, which is why we offer a combination of ComfortShield and CushionGuard to create a comfortable, secure environment on board. Whether you're enjoying the ComfySecure atmosphere or the peace of mind that comes with our GuardedComfort, we strive to provide a ride that’s not only safe but also effortlessly comfortable",
    comments: {
      title: "3 testimonial",
      comments: [
        {
          title: "Wilson Swanson",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "I’ve been using this bus service for months, and I couldn’t be happier. The buses are always on time, and the drivers are courteous. It’s so convenient, and it makes my daily commute stress-free!",
          image: "../assets/img/client/1.jpg",
        },
        {
          title: "Ella Hodges",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "I’m really impressed with the cleanliness and punctuality of the buses. The service is top-notch, and I always feel safe while traveling. Definitely recommend it to anyone looking for a reliable mode of transportation!",
          image: "../assets/img/client/2.jpg",
        },
        {
          title: "Melissa Bryant",
          date: "June 15 - 2024 12:30 PM",
          comments:
            "As a frequent commuter, I’ve tried many bus services, and this one stands out. It’s dependable, with friendly drivers and clean buses. I highly recommend it to anyone who needs a reliable and affordable transportation option.",
          image: "../assets/img/client/4.jpg",
        },
      ],
    },
    serviceTitle: "Many Service",
    article: [
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

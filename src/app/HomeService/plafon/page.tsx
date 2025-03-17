import {
  cardServiceModel,
  portofolioModel,
  testimonialModel,
} from "@/app/interface/Model";
import CardService from "@/components/cardService";
import Portofolio from "@/components/portofolio";
import Testimonial from "@/components/testimonial";

export default function page() {
  const data: portofolioModel = {
    title: "Plafon Installation",
    subTitle: "Image Example",
    category: [],
    data: [
      {
        label: "Contact Crafter",
        subLabel: "Chat Now",
        image: "/assets/img/ceiling1.jpg",
        type: "all",
      },
      {
        label: "Contact Crafter",
        subLabel: "Chat Now",
        image: "/assets/img/ceiling4.jpg",
        type: "all",
      },
      {
        label: "Contact Crafter",
        subLabel: "Chat Now",
        image: "/assets/img/ceiling3.jpg",
        type: "all",
      },
    ],
  };

  const dataCardService: cardServiceModel[] = [
    {
      title: "False Ceiling Installation",
      content:
        "Custom-designed ceilings that add style and functionality to any room",
      image: "/assets/img/feature-two-icon-1",
      imageHover: "/assets/img/feature-two-icon-1",
    },
    {
      title: "Ceiling Repairs",
      content: "Quick, efficient fixes for any ceiling damage or wear and tear",
      image: "/assets/img/feature-two-icon-2",
      imageHover: "/assets/img/feature-two-icon-2",
    },
    {
      title: "Decorative Ceilings",
      content:
        "Artistic designs that transform your ceiling into a statement piece",
      image: "/assets/img/feature-two-icon-3",
      imageHover: "/assets/img/feature-two-icon-3",
    },
    {
      title: "Lighting Fixtures Installation",
      content:
        "Perfect integration of lighting with your new plafon for enhanced ambiance",
      image: "/assets/img/feature-two-icon-4",
      imageHover: "/assets/img/feature-two-icon-4",
    },
    {
      title: "Soundproof Ceilings",
      content:
        "Specialized plafon systems designed to reduce noise for a quieter space",
      image: "/assets/img/feature-two-icon-5",
      imageHover: "/assets/img/feature-two-icon-5",
    },
    {
      title: "Customer Satisfaction Guaranteed",
      content:
        "Our team has extensive experience in creating durable, beautiful ceilings",
      image: "/assets/img/feature-two-icon-6",
      imageHover: "/assets/img/feature-two-icon-6",
    },
  ];

  const dataTestimonial: testimonialModel[] = [
    {
      name: "Kevin",
      image: "/assets/img/client/testimonial-1.jpg",
      country: "House Owner",
      content:
        "I recently had HYS Plafon Service install a new false ceiling in my living room, and I couldn't be more pleased with the results. The team was incredibly professional, and they worked with me to design a ceiling that matched my vision perfectly.",
    },
    {
      name: "christine",
      image: "/assets/img/client/testimonial-2.jpg",
      country: "Cafe Owner",
      content:
        "The work was completed on time, and the installation was flawless. I appreciated how clean and organized the team was during the process. It’s clear they take pride in their work, and I’m grateful for the excellent service.",
    },
    {
      name: "Stevie Wills",
      image: "/assets/img/client/testimonial-3.jpg",
      country: "Staff",
      content:
        "I contacted HYS Plafon Service for a false ceiling installation in my bedroom, and I couldn’t be happier with the outcome. From the first consultation to the final installation, the team was professional, efficient, and incredibly helpful. They listened to my ideas and offered fantastic suggestions to improve the design.",
    },
  ];

  return (
    <>
      <div className="home-section home-2 ceiling">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h6 className="text-white">Quality Plafon Installer</h6>
                    <h3 className="text-white">
                      Need Plafon? leave to Hys Plafon Service we Graduanted
                      Quality
                      <span className="text-gradient"> 100% Warranty</span>
                    </h3>
                    <p className="text-white">
                      Remodeling your bathroom or kitchen? Our plumbing experts
                      can help with installations, upgrades, and repairs,
                      ensuring your remodel is completed seamlessly.
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn-one" href="services.html">
                        Book Now <span></span>
                      </a>
                      <div className="video-box">
                        <a
                          href="https://www.youtube.com/watch?v=G9TdA8d5aaU"
                          className="popup-video video-btn"
                        >
                          {" "}
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Portofolio
        title={data.title}
        subTitle={data.subTitle}
        category={data.category}
        data={data.data}
      ></Portofolio>
      <CardService value={dataCardService}></CardService>
      <Testimonial value={dataTestimonial}></Testimonial>
    </>
  );
}

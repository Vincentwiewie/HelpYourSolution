import {
  cardServiceAnimatedModel,
  portofolioModel,
  testimonialModel,
} from "@/app/interface/Model";
import Portofolio from "@/components/portofolio";
import CardServiceAnimated from "@/components/cardServiceAnimated";
import Testimonial from "@/components/testimonial";

export default function page() {
  const data: portofolioModel = {
    title: "Pipe Service",
    subTitle: "Warranty 100%",
    category: [],
    data: [
      {
        label: "Contact Worker",
        subLabel: "Book Now",
        image: "/assets/img/pipe1.jpg",
        type: "all",
      },
      {
        label: "Contact Worker",
        subLabel: "Book Now",
        image: "/assets/img/pipe2.jpg",
        type: "all",
      },
      {
        label: "Contact Worker",
        subLabel: "Book Now",
        image: "/assets/img/pipe3.jpg",
        type: "all",
      },
    ],
  };

  const dataCardServiceAnimated: cardServiceAnimatedModel[] = [
    {
      image: "/assets/img/plember1.jpg",
      imageHover: "/assets/img/plember1.jpg",
      title: "No Job Too Big, No Pipe Too Small – We Handle It All!",
      content: "",
    },
    {
      image: "/assets/img/plember2.jpg",
      imageHover: "/assets/img/plember2.jpg",
      title: "Expert Plumbing Services, Delivered with Care",
      content: "",
    },
    {
      image: "/assets/img/plember3.jpg",
      imageHover: "/assets/img/plember3.jpg",
      title: "Affordable, Fast, and Reliable Plumbing Services",
      content: "",
    },
    {
      image: "/assets/img/plember4.jpg",
      imageHover: "/assets/img/plember4.jpg",
      title: "We Fix Leaks, Pipes, and Everything in Between!",
      content: "",
    },
    {
      image: "/assets/img/plember5.jpg",
      imageHover: "/assets/img/plember5.jpg",
      title: "Your Local Plumbing Experts – Serving You with Integrity",
      content: "",
    },
    {
      image: "/assets/img/plember6.jpg",
      imageHover: "/assets/img/plember6.jpg",
      title: "24/7 Plumbing Services – Available Whenever You Need Us!",
      content: "",
    },
  ];

  const dataTestimonial: testimonialModel[] = [
    {
      name: "James T",
      image: "/assets/img/client/testimonial-1.jpg",
      country: "Propesional Agent",
      content:
        "I hired HYS pipe to handle some welding repairs on heavy machinery at our facility, and I couldn't be more pleased with their work. Their team was quick to respond to my request and took the time to assess the problem before providing a clear, low cost-effective solution and 1 month warantty granduated",
    },
    {
      name: "Linda H",
      image: "/assets/img/client/testimonial-2.jpg",
      country: "House Owner",
      content:
        "The best part was their professionalism – they communicated clearly throughout the entire process, showed up on time, and completed the job efficiently. I also appreciated their attention to safety, which gave me confidence in the work being done. make my house feel like new again and no more pipe leaks",
    },
    {
      name: "David R",
      image: "/assets/img/client/testimonial-3.jpg",
      country: "Business F&B",
      content:
        "I recently hired HYS pipe for some custom metal work and welding repairs for my business, and I couldn’t be more impressed. From the initial consultation to the final installation, their team was professional, efficient, and highly skilled. The quality of their welding is outstanding – everything is strong, clean, and built to last",
    },
  ];
  return (
    <>
      <div className="home-section home-2 pipe">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h6 className="text-white">Quality Pipe Service</h6>
                    <h3 className="text-white">
                      Pipe Leaking? leave to Hys Pipe Service we Graduanted
                      Quality
                      <span className="text-gradient"> 100% Warranty</span>
                    </h3>
                    <p className="text-white">
                      we specialize in high-quality pipeline installation,
                      maintenance, and repair services for industries across the
                      region. Whether you need a new pipeline system installed
                      or are looking for expert repair and maintenance
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn-one" href="services.html">
                        Our Service <span></span>
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
      <CardServiceAnimated
        value={dataCardServiceAnimated}
      ></CardServiceAnimated>
      <Testimonial value={dataTestimonial}></Testimonial>
    </>
  );
}

import {
  overviewModel,
  portofolioModel,
  testimonialModel,
} from "@/app/interface/Model";
import Portofolio from "@/components/portofolio";
import Testimonial from "@/components/testimonial";
import OverviewLeft from "@/components/overviewLeft";

export default function page() {
  const dataPortofolio: portofolioModel = {
    title: "Furniture Crafter",
    subTitle: "Image Example",
    category: [],
    data: [
      {
        label: "Contact Crafter",
        subLabel: "Book Now",
        image: "/assets/img/furniture1.jpg",
        type: "all",
      },
      {
        label: "Contact Crafter",
        subLabel: "Book Now",
        image: "/assets/img/furniture4.jpg",
        type: "all",
      },
      {
        label: "Contact Crafter",
        subLabel: "Book Now",
        image: "/assets/img/furniture3.jpg",
        type: "all",
      },
    ],
  };

  const dataTestimonial: testimonialModel[] = [
    {
      name: "Stephen Strange",
      image: "/assets/img/client/testimonial-1.jpg",
      country: "United Kingdom",
      content:
        "I highly recommend HYS Furniture to anyone looking for high-quality furniture and excellent customer service. They really know how to make your home feel special!, The customization options were amazing, and I ended up with a sofa that is not only gorgeous but also super comfortable.",
    },
    {
      name: "Annabella",
      image: "/assets/img/client/testimonial-2.jpg",
      country: "United State",
      content:
        "I recently purchased a sectional sofa and dining table from HYS, and I am absolutely thrilled with the quality and style! The team really took the time to understand my needs and helped me select pieces that perfectly match my home’s aesthetic and they give warranty too",
    },
    {
      name: "Stevie Wills",
      image: "/assets/img/client/testimonial-3.jpg",
      country: "Germany",
      content:
        "The delivery was on time, and the installation was smooth. They even made sure everything was in place and that I was happy before they left. I’ve already recommended HYS to my friends and family, and I’ll definitely be returning for any future furniture needs!",
    },
  ];

  const dataOverview: overviewModel = {
    title: "Why Trust Us?",
    titleHeader: "100% warranty granted and fast respon",
    image: "/assets/img/trust.jpg",
    content: "",
    list: [
      "Expert craftsmanship",
      "Attention to detail",
      "Affordable prices",
      "Timely services",
      "Custom Furniture Design",
      "Furniture Moving & Repositioning",
    ],
  };

  return (
    <>
      <div className="home-section home-2 furniture">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h6 className="text-white">Furniture Expert</h6>
                    <h3 className="text-white">
                      Need Customize Your House looks? Leave To us Our Expert
                      Builder Will Make Your House Like In Heaven
                      <span className="text-gradient mt-5"> 100% Warranty</span>
                    </h3>
                    <p className="text-white">
                      let us bring style, comfort, and functionality to your
                      home or office. Call today for a FREE consultation and
                      lets make your space a place you love!
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
        title={dataPortofolio.title}
        subTitle={dataPortofolio.subTitle}
        category={dataPortofolio.category}
        data={dataPortofolio.data}
      ></Portofolio>
      <Testimonial value={dataTestimonial}></Testimonial>
      <OverviewLeft
        title={dataOverview.title}
        titleHeader={dataOverview.titleHeader}
        content={dataOverview.content}
        list={dataOverview.list}
        image={dataOverview.image}
      ></OverviewLeft>
    </>
  );
}

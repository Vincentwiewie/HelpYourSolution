import { portofolioModel } from "@/app/interface/Model";
import Portofolio from "@/components/portofolio";

export default function keramik() {
  const data: portofolioModel = {
    title: "Ceramic Galerry",
    subTitle: "Our Style",
    category: [],
    data: [
      {
        label: "Contact Crafter",
        subLabel: "Classic Style",
        image: "../assets/img/ceramic1.jpg",
        type: "classic",
      },
      {
        label: "Contact Crafter",
        subLabel: "Classic Style",
        image: "../assets/img/ceramic2.jpg",
        type: "classic",
      },
      {
        label: "Contact Crafter",
        subLabel: "Classic Style",
        image: "../assets/img/ceramic3.jpg",
        type: "classic",
      },
      {
        label: "Contact Crafter",
        subLabel: "Cozy Style",
        image: "../assets/img/ceramic4.jpg",
        type: "cozy",
      },
      {
        label: "Contact Crafter",
        subLabel: "Cozy Style",
        image: "../assets/img/ceramic5.jpg",
        type: "cozy",
      },
      {
        label: "Contact Crafter",
        subLabel: "Cozy Style",
        image: "../assets/img/ceramic6.jpg",
        type: "cozy",
      },
    ],
  };

  return (
    <>
      <div className="home-section home-2">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h6 className="text-gradient">Quality Ceramic Crafter</h6>
                    <h1>
                      Your Successful Design, Our Fantastic{" "}
                      <span className="text-gradient">CeramiCozy.</span>
                    </h1>
                    <p>
                      Need Ceramic Dont Worry We Have A Plenty Of Ceramic With
                      Various Style Will Make Eyes Melts
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
                <div className="col-lg-6 col-md-12">
                  <div className="banner-image">
                    {/* <img src="/assets/img/home-font-2.png" alt="image" /> */}
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
    </>
  );
}

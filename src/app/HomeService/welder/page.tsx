import { overviewModel, portofolioModel } from "@/app/interface/Model";
import Portofolio from "@/components/portofolio";
import OverviewRight from "@/components/overviewRight";

export default function page() {
  const data: portofolioModel = {
    title: "Welder Crafter",
    subTitle: "Our Example",
    category: [],
    data: [
      {
        label: "Welder Crafter",
        subLabel: "Book Now",
        image: "/assets/img/welder1.jpg",
        type: "all",
      },
      {
        label: "Welder Crafter",
        subLabel: "Book Now",
        image: "/assets/img/welder2.jpg",
        type: "all",
      },
      {
        label: "Welder Crafter",
        subLabel: "Book Now",
        image: "/assets/img/welder3.jpg",
        type: "all",
      },
    ],
  };

  const dataOverview: overviewModel = {
    title: "Why Choose Us?",
    titleHeader: "100% warranty granted and fast respon",
    image: "/assets/img/trust4.jpg",
    content: "",
    list: [
      "Expert craftsmanship",
      "Attention to detail",
      "Affordable prices",
      "Timely services",
      "Custom Welder Design",
      "Repair & Restoration",
    ],
  };

  return (
    <>
      <div className="home-section home-2 welder">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h6 className="text-white">Quality Forged welder</h6>
                    <h3 className="text-white">
                      Need Welder? leave to Hys Welder Service we Graduanted
                      Quality
                      <span className="text-gradient"> 100% Warranty</span>
                    </h3>
                    <p className="text-white">
                      we specialize in high-quality Welder installation,
                      maintenance, and repair services for industries across the
                      region. Whether you need a new Welder system installed or
                      are looking for expert repair and maintenance
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
      <OverviewRight
        title={dataOverview.title}
        titleHeader={dataOverview.titleHeader}
        content={dataOverview.content}
        list={dataOverview.list}
        image={dataOverview.image}
      ></OverviewRight>
    </>
  );
}

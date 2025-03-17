import Image from "next/image";
import Price from "@/components/price";
import { priceProps, overviewModel } from "@/app/interface/Model";
import OverviewLeft from "@/components/overviewLeft";

export default function page() {
  const data: priceProps[] = [
    {
      price: "5",
      image: "/assets/img/AcEngine.jpg",
      textButton: "Order Now",
      label: "Clean AC",
      list: [
        { text: "Fast & Reliable AC Services", none: true },
        { text: "Cleaning And Servicing", none: true },
        { text: "Make Cool As Good Vibes", none: true },
        { text: "--", none: false },
        { text: "--", none: false },
        { text: "--", none: false },
      ],
    },
    {
      price: "15",
      image: "/assets/img/AcOn.jpg",
      textButton: "Order Now",
      label: "Inject Freon",
      list: [
        { text: "Fast & Reliable AC Services", none: true },
        { text: "Cleaning And Servicing", none: true },
        { text: "Make Cool As Good Vibes", none: true },
        { text: "Warranted Up To 1 Years", none: true },
        { text: "Ensure It Operates At Peak Performance", none: true },
        { text: "--", none: false },
      ],
    },
    {
      price: "25 - 100",
      image: "/assets/img/AcService.jpg",
      textButton: "Order Now",
      label: "Repair",
      list: [
        { text: "Fast & Reliable AC Services", none: true },
        { text: "Cleaning And Servicing", none: true },
        { text: "Make Cool As Good Vibes", none: true },
        { text: "Warranted Up To 1 Years", none: true },
        { text: "Ensure It Operates At Peak Performance", none: true },
        {
          text: "Repair of malfunctioning air conditioning systems",
          none: true,
        },
      ],
    },
  ];

  const dataOverview: overviewModel = {
    title: "Why Choose Us?",
    titleHeader: "100% warranty granted and fast respon",
    image: "/assets/img/trust4.jpg",
    content: "",
    list: [
      "Expert Cleaner",
      "Deep Cleaning",
      "Affordable prices",
      "Timely services",
      "Cold as new",
      "Repair & Restoration",
    ],
  };

  return (
    <>
      <div className="home-section">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <ul className="social-icon-list">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                    <h2 className="text-white mb-1">
                      Stay Cool All Year Round with MarketJasa Air Conditioning
                      Services!
                    </h2>
                    <p>
                      Is your AC struggling to keep up with the summer heat? Or
                      maybe it’s time for a seasonal tune-up? At MarketJasa, we
                      specialize in all things air conditioning—from
                      installation to repairs and routine maintenance.
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn-one" href="services.html">
                        Book Now <span></span>
                      </a>
                      <a className="default-btn-two" href="contact.html">
                        Email US For Suggestion<span></span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-md-12" data-tilt>
                <div className="banner-image">
                  <img src="/assets/img/AcOn.jpg" alt="image" />
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="creative-shape">
          <Image
            src="/assets/img/home-bottom-shape.png"
            alt="svg shape"
            width={180}
            height={38}
            priority
          />
        </div> */}
      </div>
      <Price value={data} />
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

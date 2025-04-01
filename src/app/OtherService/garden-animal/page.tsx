import { portofolioModel } from "@/app/interface/Model";
import Counter from "@/components/counter";
import Portofolio from "@/components/portofolio";

export default function gardenAnimal() {
  const data: portofolioModel = {
    title: "Animal Galerry",
    subTitle: "",
    category: [],
    data: [
      {
        label: "Contact Crafter",
        subLabel: "Classic Style",
        image: "/assets/img/animal1.jpg",
        type: "classic",
      },
      {
        label: "Contact Crafter",
        subLabel: "Classic Style",
        image: "/assets/img/animal2.jpg",
        type: "classic",
      },
      {
        label: "Contact Crafter",
        subLabel: "Classic Style",
        image: "/assets/img/animal3.jpg",
        type: "classic",
      },
      {
        label: "Contact Crafter",
        subLabel: "Cozy Style",
        image: "/assets/img/animal4.jpg",
        type: "cozy",
      },
      {
        label: "Contact Crafter",
        subLabel: "Cozy Style",
        image: "/assets/img/animal5.jpg",
        type: "cozy",
      },
      {
        label: "Contact Crafter",
        subLabel: "Cozy Style",
        image: "/assets/img/animal6.jpg",
        type: "cozy",
      },
    ],
  };
  const dataCounter = {
    image: "garden",
    counterModel: [
      {
        title: "100",
        icon: "+",
        subtitle: "Sastified Service",
      },
      {
        title: "100",
        icon: "%",
        subtitle: "Happy Customer",
      },
      {
        title: "100",
        icon: "%",
        subtitle: "Positive Review",
      },
      {
        title: "10",
        icon: "+",
        subtitle: "Experience",
      },
    ],
  };

  return (
    <>
      <div className="home-3 home-section garden">
        <div id="particles-js"></div>
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
                    <h1>Your Trusted Partner in Animal Care</h1>
                    <p>
                      As pet owners, we all want the best for our furry,
                      feathered, or scaly companions. Whether its ensuring their
                      health, providing regular grooming, or simply offering
                      companionship while you are away, the right animal care
                      services can make all the difference. That is where Hys
                      Animal Care comes in—your dedicated and professional
                      animal care partner.
                    </p>
                    <div className="banner-btn">
                      <a className="default-btn-two" href="contact.html">
                        Contact Us <span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Counter
        image={dataCounter.image}
        counterDetail={dataCounter.counterModel}
      ></Counter>

      <Portofolio
        title={data.title}
        subTitle={data.subTitle}
        category={data.category}
        data={data.data}
      ></Portofolio>

      <section className="about-area section-padding">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h6 className="sub-title">About HYS Animal Care</h6>
                <h2>professionalism and love for animals is our duty</h2>
                <p>
                  The positive energy and uplifting spirit that animals,
                  especially pets, bring into our lives through their
                  unconditional love and companionship.
                </p>
                <div className="skills">
                  <div className="skill-item">
                    <h6>
                      Consulting Care<em>90%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="progres" data-value="90%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h6>
                      Animal Solutions <em>80%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="progres" data-value="75%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h6>
                      Service <em>100%</em>
                    </h6>
                    <div className="skill-progress">
                      <div className="progres" data-value="85%"></div>
                    </div>
                  </div>
                </div>
                <div className="about-btn-box">
                  <a className="default-btn" href="about.html">
                    Contact US <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/assets/img/garden2.jpg" alt="About image" />
                <div className="years-design">
                  <h2>10</h2>
                  <h5>Years Of Experience</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

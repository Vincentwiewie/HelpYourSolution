import { cardServiceAnimatedModel } from "@/app/interface/Model";

export default function cardServiceAnimated({
  value,
}: {
  value: cardServiceAnimatedModel[];
}) {
  return (
    <>
      <section className="services-section-two section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h6 className="sub-title">Why Choose Us?</h6>
                <h2>Our Feature</h2>
              </div>
            </div>
            {value.map((m: cardServiceAnimatedModel) => {
              return (
                <div className="col-lg-4 col-md-6" key={m.image}>
                  <div className="single-services-two-item">
                    <div className="services-icon-box">
                      <div className="default-icon">
                        <img
                          src={m.image}
                          alt="svg icon"
                          style={{ height: "50px", width: "80px" }}
                        />
                      </div>
                      <div className="hover-icon">
                        <img
                          src={m.imageHover}
                          alt="svg icon"
                          style={{ height: "80px", width: "120px" }}
                        />
                      </div>
                    </div>
                    <div className="services-two-content">
                      <h3>{m.title}</h3>
                      <p>{m.content}</p>
                      <div className="services-btn">
                        <a href="#" className="read-more">
                          <i className="bi bi-arrow-right-short"></i> Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

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
                <h6 className="sub-title">Kenapa Memilih Kami?</h6>
                <h2>Fitur Kami</h2>
              </div>
            </div>
            {value.map((m: cardServiceAnimatedModel) => {
              return (
                <div className="col-lg-4 col-md-6" key={m.image}>
                  <div className="single-services-two-item">
                    <div className="default-icon">
                      <img
                        src={m.image}
                        alt="svg icon"
                        style={{ height: "150px", width: "300px" }}
                      />
                    </div>

                    <div className="services-two-content mt-5">
                      <h6>{m.title}</h6>
                      <p>{m.content}</p>
                      <div className="services-btn">
                        <a
                          className="read-more"
                          href="https://api.whatsapp.com/send?phone=081282288099"
                        >
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

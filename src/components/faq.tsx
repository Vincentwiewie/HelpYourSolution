import { faqDetail, faqModel } from "@/app/interface/Model";

export default function faq({ image, title, subtitle, list }: faqModel) {
  return (
    <>
      <section className="faq-section home-faq bg-grey section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="faq-img">
                <img src={image} alt="images" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h6 className="sub-title">{title}</h6>
                <h2>{subtitle}</h2>
              </div>
              <div className="faq-accordion first-faq-box">
                <ul className="accordion">
                  {list.map((l: faqDetail) => {
                    return (
                      <>
                        <li className="accordion-item" key={l.answer}>
                          <a
                            className="accordion-title active"
                            href="javascript:void(0)"
                          >
                            {" "}
                            <i className="fa fa-plus"></i> {l.question}
                          </a>
                          <p className="accordion-content show">{l.answer}</p>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { counterModel, counterDetailModel } from "@/app/interface/Model";

export default function Counter({ image, counterDetail }: counterModel) {
  return (
    <>
      <section className={"counter-area section-padding  " + image}>
        <div className="container">
          <div className="row">
            {counterDetail.map((x: counterDetailModel) => {
              return (
                <div
                  className="col-lg-3 col-md-6 counter-item"
                  key={x.subtitle}
                >
                  <div className="single-counter">
                    <div className="counter-contents">
                      <h2>
                        <span className="counter-number">{x.title}</span>
                        <span>+</span>
                      </h2>
                      <h3 className="counter-heading">{x.subtitle}</h3>
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

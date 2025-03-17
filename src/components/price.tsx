import { list, priceProps } from "../app/interface/Model";

export default function Price({ value }: { value: priceProps[] }) {
  return (
    <>
      <section className="price-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            {value.map((m: any) => {
              return (
                <div className="col-lg-4 col-md-6" key={m.image}>
                  <div className="single-pricing-content">
                    <div
                      style={{
                        backgroundImage: `url(${m.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 100%",
                        width: "100%",
                        height: "100%",
                      }}
                    ></div>
                    <div className="price-tag">
                      <h3>{m.label}</h3>
                    </div>
                    <div className="price-heading">
                      <div className="price-usd">
                        <h4>
                          ${m.price}{" "}
                          <span className="price-small-text">
                            - Per Service
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="price-body">
                      <ul key={m.image}>
                        {m.list.map((m: list, index: number) => {
                          return m.none ? (
                            <li key={index}>{m.text}</li>
                          ) : (
                            <li key={index} className="offer-list-none">
                              <del key={index}>{m.text}</del>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="price-btn">
                      {" "}
                      <a href="#" className="price-btn-one">
                        {m.textButton}
                      </a>
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

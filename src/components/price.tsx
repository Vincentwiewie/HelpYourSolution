import { list, priceProps } from "../app/interface/Model";

export default function Price({ value }: { value: priceProps[] }) {
  return (
    <>
      <section className="price-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            {value.map((m: priceProps) => {
              return (
                <div className="col-lg-3 col-md-6" key={m.image}>
                  <div className="single-pricing-content">
                    <div className="price-tag">
                      <img
                        src={m.image}
                        alt={m.alt}
                        style={{ height: "200px", width: "350px" }}
                      />
                      <h3>{m.label}</h3>
                    </div>
                    <div className="price-heading" style={{ marginTop: "5vh" }}>
                      <div className="price-usd">
                        <h4>
                          {m.price}{" "}
                          <span className="price-small-text fw-bold">
                            {m.label}
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
                      <a
                        className="price-btn-one"
                        href="https://api.whatsapp.com/send?phone=081282288099"
                      >
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

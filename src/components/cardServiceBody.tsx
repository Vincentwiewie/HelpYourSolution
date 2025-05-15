import { cardServiceBodyModel } from "@/app/interface/Model";

export default function cardServiceBody({
  value,
}: {
  value: cardServiceBodyModel[];
}) {
  return (
    <>
      <section className="services-section-three section-padding">
        <div className="container">
          <div className="row">
            {value.map((m: cardServiceBodyModel) => {
              return (
                <div className="col-lg-4 col-md-6" key={m.title}>
                  <div className="single-services-three-item">
                    <div className="services-icon">
                      <img
                        src="assets/img/icon/services-three-icon-1.svg"
                        alt="svg icon"
                      />
                    </div>
                    <div className="services-three-content">
                      <h3>{m.title}</h3>
                      <p>{m.subTitle}</p>
                      <ul className="features-list">
                        {m.list.map((x: string) => {
                          return (
                            <li key={x}>
                              <span>{x}</span>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="services-btn">
                        <a className="read-more">
                          <i className="bi bi-arrow-right-short"></i> Order
                          Sekarang
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

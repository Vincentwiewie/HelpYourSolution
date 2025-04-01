import { portofolioModel } from "@/app/interface/Model";

export default function portofolio({
  title,
  subTitle,
  category,
  data,
}: portofolioModel) {
  return (
    <section className="portfolio-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h6 className="sub-title">{title}</h6>
              <h2>{subTitle}</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="portfolio-list">
              <ul className="nav" id="portfolio-flters">
                <li className="filter filter-active" data-filter=".all">
                  All
                </li>
                {category.map((m: string) => {
                  return (
                    <li className="filter" data-filter={"." + m} key={m}>
                      {m}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="row">
            {data.map((m) => {
              return (
                <div
                  className={`col-lg-4 col-md-6 portfolio-grid-item all ${m.type}`}
                  key={m.image}
                >
                  <div className="portfolio-item">
                    <img
                      src={m.image}
                      alt="image"
                      style={{ maxHeight: "37vh" }}
                    />
                    <div className="portfolio-content-overlay">
                      <p>{m.label}</p>
                      <h3>
                        <a href="single-portfolio.html">{m.subLabel}</a>
                      </h3>
                      <a
                        className="portfolio-link-icon"
                        href="single-portfolio.html"
                      >
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

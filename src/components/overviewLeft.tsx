import { overviewModel } from "@/app/interface/Model";

export default function overviewLeft({
  title,
  titleHeader,
  image,
  list,
  content,
}: overviewModel) {
  return (
    <section className="overview-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="overview-image">
              <img src={image} alt="image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="overview-content">
              <h6 className="sub-title">{title}</h6>
              <h2>{titleHeader}</h2>
              <p>{content}</p>
              <ul className="features-list">
                {list.map((m: any, index: number) => {
                  return (
                    <li key={index}>
                      {" "}
                      <span>{m}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

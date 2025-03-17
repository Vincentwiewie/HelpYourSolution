import { overviewModel } from "@/app/interface/Model";
export default function overviewRight({
  title,
  titleHeader,
  image,
  list,
  content,
}: overviewModel) {
  return (
    <section className="overview-section pt-50 pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="overview-content">
              <h6 className="sub-title">{title}</h6>
              <h2>{titleHeader}</h2>
              <p>{content}</p>
              <ul className="features-list">
                {list.map((m: any, index: number) => {
                  return (
                    <>
                      <li key={index}>
                        {" "}
                        <span>{m}</span>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="overview-image-2">
              <img src={image} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { sponsorModel } from "@/app/interface/Model";

export default function sponsor({ title, subTitle, image }: sponsorModel) {
  return (
    <>
      <section className="partner-section pt-100 pb-70">
        <div className="container">
          <div className="partner-title">
            <h6 className="sub-title">{title}</h6>
            <h2>{subTitle}</h2>
          </div>
          <div className="partner-list">
            {image.map((m: string) => {
              return (
                <div className="partner-item" key={m}>
                  <a href="#0">
                    <img src={m} alt="image" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

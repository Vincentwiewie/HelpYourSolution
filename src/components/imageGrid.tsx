import { imageGridModel } from "@/app/interface/Model";

export default function imageGrid({ value }: { value: imageGridModel[] }) {
  return (
    <>
      <section className="team-area pt-70 pb-100">
        <div className="container">
          <div className="row">
            {value.map((m: imageGridModel) => {
              return (
                <div className="col-lg-3 col-md-6">
                  <div className="single-team-box">
                    <div className="team-image">
                      <img src={m.image} alt="team" />
                      <div className="team-social-icon">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-info">
                      <h3>{m.name}</h3>
                      <span>{m.subName}</span>
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

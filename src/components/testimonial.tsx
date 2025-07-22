import { testimonialModel } from "@/app/interface/Model";

export default function testimonial({ value }: { value: testimonialModel[] }) {
  return (
    <>
      <section className="testimonial-section pt-100 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h6 className="sub-title">Testimoni</h6>
                <h2>Tanggapan Klien</h2>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="testimonial-slider  owl-theme">
                {value.map((m: testimonialModel) => {
                  return (
                    <div className="single-testimonial mt-5" key={m.name}>
                      <div className="rating-box">
                        <ul>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <div className="testimonial-content">
                        <p>{m.content}</p>
                      </div>
                      <div className="avatar">
                        <img src={m.image} alt="testimonial images" />
                      </div>
                      <div className="testimonial-bio">
                        <div className="bio-info">
                          <h3>{m.name}</h3>
                          <span>{m.country}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

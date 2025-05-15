import { overviewBasicModel } from "@/app/interface/Model";

export default function overview({
  title,
  titleHeader,
  content,
}: overviewBasicModel) {
  return (
    <>
      <section className="hire-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12">
              <div className="hire-content">
                <h6 className="sub-title">{title}</h6>
                <h2>{titleHeader}</h2>
                <p>{content}</p>
                <div className="hire-btn">
                  <a className="default-btn">
                    Telepon Sekarang<span></span>
                  </a>
                  <a className="default-btn-one">
                    Hubungi Kami<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

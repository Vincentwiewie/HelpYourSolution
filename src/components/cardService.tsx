import { cardServiceModel } from "@/app/interface/Model";

export default function cardService({ value }: { value: cardServiceModel[] }) {
  return (
    <>
      <section className="services-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h6 className="sub-title">Kenapa Memilih Kami?</h6>
                <h2>Kerja Kami</h2>
              </div>
            </div>
            {value.map((m: cardServiceModel) => {
              return (
                <div className="col-lg-4 col-md-6" key={m.content}>
                  <div className="single-services-item">
                    <h3>{m.title}</h3>
                    <p>{m.content}</p>
                    <div className="services-btn">
                      <a
                        className="read-more"
                        href="https://api.whatsapp.com/send?phone=6281282288099"
                      >
                        <i className="bi bi-arrow-right-short"></i> Pesan
                        Sekarang
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

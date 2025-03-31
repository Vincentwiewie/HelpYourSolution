"use client";
import { useRouter } from "next/navigation";
import { blogDetailModel, blogModel } from "@/app/interface/Model";

export default function blog({ title, subTitle, list }: blogModel) {
  const router = useRouter();
  return (
    <>
      <section className="blog-section bg-grey pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h6 className="sub-title">{title}</h6>
                <h2>{subTitle}</h2>
              </div>
            </div>
            {list.map((x: blogDetailModel) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="blog-single-item">
                    <div className="blog-image">
                      <a href="single-blog.html">
                        <img src={x.image} alt="image" />
                      </a>
                    </div>
                    <div className="blog-description">
                      <ul className="blog-info">
                        <li>
                          <a href="#">
                            <i className="bi bi-person-circle"></i> {x.name}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="bi bi-calendar-check"></i> {x.date}
                          </a>
                        </li>
                      </ul>
                      <div className="blog-text">
                        <h3>
                          <a href="single-blog.html">{x.title}</a>
                        </h3>
                        <p>{x.content}</p>
                        <div className="blog-btn">
                          {" "}
                          <a
                            onClick={() => router.push(x.link)}
                            className="read-more"
                          >
                            <i className="bi bi-arrow-right-short"></i> Read
                            More
                          </a>
                        </div>
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

"use client";
import { useRouter } from "next/navigation";

import Comments from "./comments";
import { articleDetail, articleSubDetail, rating } from "@/app/interface/Model";

export default function BlogDetails({
  classbg,
  title,
  subTitle,
  name,
  date,
  articleTitle,
  articleContent,
  image1,
  image2,
  image3,
  articleTitle2,
  articleContent2,
  comments,
  serviceTitle,
  article,
  rating,
  tags,
}: articleDetail) {
  const router = useRouter();
  return (
    <>
      <div className={"page-title-area item-bg1 " + classbg}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>{title}</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>{subTitle}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src={image3} alt="image" />
                </div>
                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        {" "}
                        <span>Posted On:</span> <a href="#">{date}</a>
                      </li>
                      <li>
                        {" "}
                        <span>Posted By:</span> <a href="#">{name} </a>
                      </li>
                    </ul>
                  </div>
                  <h3>{articleTitle}</h3>
                  <p>{articleContent}</p>
                  <ul className="wp-block-gallery columns-2">
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src={image1} alt="image" />
                      </figure>
                    </li>
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src={image2} alt="image" />
                      </figure>
                    </li>
                  </ul>
                  <h3>{articleTitle2}</h3>
                  <p>{articleContent2}</p>
                </div>
                <div className="article-footer">
                  <div className="article-tags">
                    {" "}
                    <span>Tag:</span>
                    <a href="#">Solutions</a>
                    <a href="#">Service</a>
                  </div>
                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Comments
                  title={comments.title}
                  comments={comments.comments}
                ></Comments>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <aside className="widget-area" id="secondary">
                <section className="widget widget_search">
                  <form className="search-form search-top">
                    <label>
                      <input
                        type="search"
                        className="search-field"
                        placeholder="Search..."
                      />
                    </label>
                    <button type="submit">
                      {" "}
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </section>
                <section className="widget widget_techvio_posts_thumb">
                  <h3 className="widget-title">{serviceTitle}</h3>
                  {article.map((x: articleSubDetail) => {
                    return (
                      <article className="item" key={x.image}>
                        <a
                          onClick={() => {
                            router.push(x.link);
                          }}
                          className="thumb"
                        >
                          <img src={x.image} alt="image" />
                        </a>
                        <div className="info">
                          <span>{x.date}</span>
                          <h4 className="title usmall">
                            <a href={x.link}>{x.title}</a>
                          </h4>
                        </div>
                      </article>
                    );
                  })}
                </section>
                <section className="widget widget_categories">
                  <h3 className="widget-title">Rating</h3>
                  <ul>
                    {rating.map((x: rating) => {
                      return (
                        <li key={x.title}>
                          <a>
                            {x.title}{" "}
                            <span className="categories-link-count">
                              {" "}
                              ({x.number})
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </section>
                <section className="widget widget_tag_cloud">
                  <h3 className="widget-title">Tags</h3>
                  <div className="tagcloud">
                    {tags.map((x: string) => {
                      return <a key={x}>{x}</a>;
                    })}
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

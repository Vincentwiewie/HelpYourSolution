import { articleSubDetail, sidebarModel, rating } from "@/app/interface/Model";

export default function sidebar({
  title,
  article,
  rating,
  tags,
}: sidebarModel) {
  return (
    <>
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
            <h3 className="widget-title">{title}</h3>
            {article.map((x: articleSubDetail) => {
              return (
                <article className="item">
                  <a href={x.link} className="thumb">
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
                  <li>
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
                return <a>{x}</a>;
              })}
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}

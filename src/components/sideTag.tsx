export default function sideTag() {
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
            <h3 className="widget-title">Popular Posts</h3>
            <article className="item">
              <a href="#" className="thumb">
                <img src="assets/img/blog/blog-1.jpg" alt="image" />
              </a>
              <div className="info">
                <span>June 10, 2024</span>
                <h4 className="title usmall">
                  <a href="#">
                    Planning for a Safe Return to the Workplace IT Solutions
                  </a>
                </h4>
              </div>
            </article>
            <article className="item">
              <a href="#" className="thumb">
                <img src="assets/img/blog/blog-2.jpg" alt="image" />
              </a>
              <div className="info">
                <span>June 15, 2024</span>
                <h4 className="title usmall">
                  <a href="#">Announcing Our New Smiles for Success Charity</a>
                </h4>
              </div>
            </article>
            <article className="item">
              <a href="#" className="thumb">
                <img src="assets/img/blog/blog-3.jpg" alt="image" />
              </a>
              <div className="info">
                <span>June 25, 2024</span>
                <h4 className="title usmall">
                  <a href="#">
                    Machine Learning Applications for Every Industry
                  </a>
                </h4>
              </div>
            </article>
          </section>
          <section className="widget widget_categories">
            <h3 className="widget-title">Categories</h3>
            <ul>
              <li>
                <a href="#">
                  Business <span className="categories-link-count"> (33)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Solutions <span className="categories-link-count"> (45)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Technology{" "}
                  <span className="categories-link-count"> (20)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Digital Marketing{" "}
                  <span className="categories-link-count"> (15)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Graphic Design{" "}
                  <span className="categories-link-count"> (7)</span>
                </a>
              </li>
            </ul>
          </section>
          <section className="widget widget_tag_cloud">
            <h3 className="widget-title">Tags</h3>
            <div className="tagcloud">
              <a href="#">Web Design</a>
              <a href="#">Responsive</a>
              <a href="#">Applications</a>
              <a href="#">Solutions</a>
              <a href="#">Industry</a>
              <a href="#">Marketing</a>
              <a href="#">Development</a>
              <a href="#">Startup</a>
              <a href="#">Graphic Design</a>
              <a href="#">SEO</a>
              <a href="#">Data Security</a>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}

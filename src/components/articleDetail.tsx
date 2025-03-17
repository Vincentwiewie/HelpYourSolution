export default function articleDetail() {
  return (
    <>
      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src="assets/img/blog-details/1.jpg" alt="image" />
                </div>
                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        {" "}
                        <span>Posted On:</span> <a href="#">June 10 - 2024</a>
                      </li>
                      <li>
                        {" "}
                        <span>Posted By:</span> <a href="#">Herman Boone</a>
                      </li>
                    </ul>
                  </div>
                  <h3>
                    Planning for a Safe Return to the Workplace IT Solutions
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi aliquip.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi aliquip.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim.
                  </p>
                  <ul className="wp-block-gallery columns-2">
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="assets/img/blog-details/2.jpg" alt="image" />
                      </figure>
                    </li>
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="assets/img/blog-details/3.jpg" alt="image" />
                      </figure>
                    </li>
                  </ul>
                  <h3>
                    Increase The Profitability, Availability Of Your Business
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim.
                  </p>
                </div>
                <div className="article-footer">
                  <div className="article-tags">
                    {" "}
                    <span>Tag:</span>
                    <a href="#">Solutions</a>
                    <a href="#">Guide</a>
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
                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <a href="#">
                        <i className="fa fa-arrow-left"></i> Prev Post
                      </a>
                    </div>
                    <div className="nav-next">
                      <a href="#">
                        Next Post <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="comments-area">
                  <h3 className="comments-title">3 Comments:</h3>
                  <ol className="comment-list">
                    <li className="comment">
                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src="assets/img/client/1.jpg"
                              className="avatar"
                              alt="image"
                            />{" "}
                            <b className="fn">Wilson Swanson</b>
                            <span className="says">says:</span>
                          </div>
                          <div className="comment-metadata">
                            <a href="#">
                              <span>June 15 - 2024 12:30 PM</span>
                            </a>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                        <div className="reply">
                          {" "}
                          <a href="#" className="comment-reply-link">
                            Reply
                          </a>
                        </div>
                      </article>
                      <ol className="children">
                        <li className="comment">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src="assets/img/client/2.jpg"
                                  className="avatar"
                                  alt="image"
                                />{" "}
                                <b className="fn">Ella Hodges</b>
                                <span className="says">says:</span>
                              </div>
                              <div className="comment-metadata">
                                <a href="#">
                                  <span>June 15 - 2024 12:30 PM</span>
                                </a>
                              </div>
                            </footer>
                            <div className="comment-content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                enim ad minim veniam, quis nostrud exercitation.
                              </p>
                            </div>
                            <div className="reply">
                              {" "}
                              <a href="#" className="comment-reply-link">
                                Reply
                              </a>
                            </div>
                          </article>
                        </li>
                      </ol>
                    </li>
                    <li className="comment">
                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src="assets/img/client/4.jpg"
                              className="avatar"
                              alt="image"
                            />{" "}
                            <b className="fn">Melissa Bryant</b>
                            <span className="says">says:</span>
                          </div>
                          <div className="comment-metadata">
                            <a href="#">
                              <span>June 15 - 2024 12:30 PM</span>
                            </a>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                        <div className="reply">
                          <a href="#" className="comment-reply-link">
                            Reply
                          </a>
                        </div>
                      </article>
                    </li>
                  </ol>
                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>
                    <form className="comment-form">
                      <p className="comment-notes">
                        {" "}
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        Required fields are marked{" "}
                        <span className="required">*</span>
                      </p>
                      <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          cols={45}
                          rows={5}
                          maxLength={65525}
                          required={true}
                        ></textarea>
                      </p>
                      <p className="comment-form-author">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="author"
                          name="author"
                          required={true}
                        />
                      </p>
                      <p className="comment-form-email">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required={true}
                        />
                      </p>
                      <p className="comment-form-url">
                        <label>Website</label>
                        <input type="url" id="url" name="url" />
                      </p>
                      <p className="comment-form-cookies-consent">
                        <input
                          type="checkbox"
                          value="yes"
                          name="wp-comment-cookies-consent"
                          id="wp-comment-cookies-consent"
                        />
                        <label htmlFor="wp-comment-cookies-consent">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>
                      <p className="form-submit">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          className="submit"
                          value="Post Comment"
                        />
                      </p>
                    </form>
                  </div>
                </div>
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
                  <h3 className="widget-title">Popular Posts</h3>
                  <article className="item">
                    <a href="#" className="thumb">
                      <img src="assets/img/blog/blog-1.jpg" alt="image" />
                    </a>
                    <div className="info">
                      <span>June 10, 2024</span>
                      <h4 className="title usmall">
                        <a href="#">
                          Planning for a Safe Return to the Workplace IT
                          Solutions
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
                        <a href="#">
                          Announcing Our New Smiles for Success Charity
                        </a>
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
                        Business{" "}
                        <span className="categories-link-count"> (33)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Solutions{" "}
                        <span className="categories-link-count"> (45)</span>
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
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default function comments() {
  return (
    <>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. enim ad minim veniam, quis nostrud exercitation.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  enim ad minim veniam, quis nostrud exercitation.
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
              Required fields are marked <span className="required">*</span>
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
              <input type="text" id="author" name="author" required={true} />
            </p>
            <p className="comment-form-email">
              <label>
                Email <span className="required">*</span>
              </label>
              <input type="email" id="email" name="email" required={true} />
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
                Save my name, email, and website in this browser for the next
                time I comment.
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
    </>
  );
}

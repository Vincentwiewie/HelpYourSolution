export default function commentsUpForm() {
  return (
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
            Save my name, email, and website in this browser for the next time I
            comment.
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
  );
}

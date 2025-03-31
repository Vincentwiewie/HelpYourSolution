import { commentsDetail, commentsModel } from "@/app/interface/Model";

export default function comments({ title, comments }: commentsModel) {
  return (
    <>
      <div className="comments-area">
        <h3 className="comments-title">{title}</h3>
        <ol className="comment-list">
          {comments.map((x: commentsDetail) => {
            return (
              <li className="comment" key={x.title}>
                <article className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <img src={x.image} className="avatar" alt="image" />{" "}
                      <b className="fn">{x.title}</b>
                      <span className="says">says:</span>
                    </div>
                    <div className="comment-metadata">
                      <a href="#">
                        <span>{x.date}</span>
                      </a>
                    </div>
                  </footer>
                  <div className="comment-content">
                    <p>{x.comments}</p>
                  </div>
                  <div className="reply">
                    <a href="#" className="comment-reply-link">
                      Reply
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

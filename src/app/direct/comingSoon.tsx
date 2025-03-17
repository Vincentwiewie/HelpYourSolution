export default function comingSoon() {
  return (
    <>
      <section className="coming-soon-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="coming-soon-content">
                <h1>Our website is Coming Soon</h1>
                <p>
                  Before we jump into our list of coming soon page examples,
                  let’s take a quick look at why you should create one of these
                  for your own website launch.
                </p>
                <form>
                  <input
                    type="email"
                    name="email"
                    className="email-input"
                    placeholder="Enter Your Email"
                  />
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </form>
                <div id="timer">
                  <div id="days"></div>
                  <div id="hours"></div>
                  <div id="minutes"></div>
                  <div id="seconds"></div>
                </div>
                <ul className="social-list">
                  <li className="list-heading">Follow us for update:</li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

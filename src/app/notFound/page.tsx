export default function notFound() {
  return (
    <>
      <div className="preloader">
        <div className="loader">
          <div className="shadow"></div>
          <div className="box"></div>
        </div>
      </div>

      <section className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <img src="../assets/img/404.png" alt="error" />
                <h3>Page Not Found</h3>
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>
                <a href="index.html" className="default-btn-one">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

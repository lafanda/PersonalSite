import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="text-center text-lg-start bg-light text-muted">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Yazan Hailat</h6>
              <p>
                Thank you for visiting my website. To see more from me,
                check me out on social media. If you're interested in getting in touch, please
                don't hesitate to reach out!
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Media</h6>
              <p><a href="https://twitter.com/yazanmmh"><i className="fa-brands fa-twitter"></i></a></p>
              <p><a href="https://www.instagram.com/lafanda3rd/"><i className="fa-brands fa-square-instagram"></i></a></p>
              <p><a href="https://www.linkedin.com/in/yazan-hailat-7743a2201/"><i className="fa-brands fa-linkedin"></i></a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <br />
              <br />
              <p><a href="https://github.com/lafanda"><i className="fa-brands fa-github"></i></a></p>
              <p><a href="https://www.tiktok.com/@theroadtosomething"><i className="fa-brands fa-tiktok"></i></a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="fa-brands fa-discord me-3"></i> Lafanda3rd#4074</p>
              <p><i className="fas fa-envelope me-3"></i> yazan.mmh@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        <a className="text-reset fw-bold" href="index.html">yazanhailat.com</a>
      </div>
    </footer>
  );
}

export default Footer;

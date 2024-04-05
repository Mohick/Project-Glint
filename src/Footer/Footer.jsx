import { useEffect } from "react";
import "./Footer Max-width600px.css";
import "./Footer Min-width600px.css";

function FooterViews() {
  useEffect(() => {
    const btnSubmit = document.querySelector(
      ".footer__box--item--alert--subcribe--input--submit"
    );
    const alert = document.querySelector(".footer__box--item--alert--send");
    btnSubmit.addEventListener("click", (e) => {
      alert.classList.add("show");
    });
  });
  return (
    <div id="footer">
      <div className="layout">
        <div className="footer__box--items">
          <div className="footer__box--items--logo">
            <div className="footer__item--logo">
              <img
                width={"100%"}
                height={"100%"}
                src="./logo/logo-footer.png"
                alt=""
              />
            </div>
            <div className="footer__item--logo--title">
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
              autem necessitatibus vitae aut.
            </div>
          </div>
          <div className="footer__box--item--alert">
            <div className="footer__box--item--alert--title">Get Notified</div>
            <div className="footer__box--item--alert--description">
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
              aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
              iusto porro.
            </div>
            <div className="footer__box--item--alert--subcribe">
              <label
                className="footer__box--item--alert--subcribe--label--icon"
                htmlFor=""
              >
                <img width={"100%"} src="./logo/email-icon.png" alt="" />
              </label>
              <input
              placeholder="Address Email" 
                className="footer__box--item--alert--subcribe--input--search"
                type="email"
              />
              <input
                className="footer__box--item--alert--subcribe--input--submit"
                type="button"
                value="SUbcribe"
              />
            </div>
            <div className="footer__box--item--alert--send">Submitting...</div>
          </div>
        </div>
        <div className="footer__box--item--alert--end--page">
          <div>© Copyright Glint 2022</div>
          <div>Site Template by <span>Colorlib</span></div>
        </div>
      </div>
    </div>
  );
}

export default FooterViews;

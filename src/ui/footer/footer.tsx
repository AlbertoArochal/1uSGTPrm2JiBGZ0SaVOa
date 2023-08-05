import title from "../../assets/logo/deadful cherry tomatoes.svg";
import appStore from "../../assets/button/app store.svg";
import googlePlay from "../../assets/button/google play.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__box">
        {" "}
        <div className="footer__logo">
          <img
            src={title}
            className="deadfulImg"
            alt="Deadful Cherry Tomatoes"
          />
        </div>
        <div className="footer__social">
          <a href="https://www.apple.com/ios/app-store/">
            <img src={appStore} className="appStore" alt="App Store" />
          </a>
          <a href="https://play.google.com/store">
            <img src={googlePlay} className="googlePlay" alt="Google Play" />
          </a>
        </div>
      </section>
    </footer>
  );
};

import title from "../../Assets/logo/deadful cherry tomatoes.svg";
import appStore from "../../Assets/button/app store.svg";
import googlePlay from "../../Assets/button/google play.svg";

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
                        <img
                            src={appStore}
                            className="appStore"
                            alt="App Store"
                        />
                    </a>
                    <a href="https://play.google.com/store">
                        <img
                            src={googlePlay}
                            className="googlePlay"
                            alt="Google Play"
                        />
                    </a>
                </div>
                <div className="footerText__container">
                    <p className="footerText">
                        © 2021 Deadful Cherry Tomatoes. All rights reserved.
                    </p>
                </div>
            </section>
        </footer>
    );
};

import "./stylenavbar.scss";
import React, { useRef } from "react";

const Navbar = ({ data, lang, setLang }) => {
  const t = data[lang];
  const flagRef = useRef();
  const navRef = useRef();

  return (
    <>
      <header className="shadow-sm" ref={navRef}>
        <div className="container-fluid">
          <nav className="nav d-flex py-3 justify-content-between align-items-center">
            <h3 className="nav_logo">{t.navLogo}</h3>
            <div className="langPage">
              <ul className="navbar-nav">
                {/* <!-- Icon dropdown --> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="flag-uzbekistan flag m-0" ref={flagRef}></i>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => {
                          setLang("uz");

                          if (
                            flagRef.current.classList.contains(
                              "flag-united-kingdom"
                            )
                          ) {
                            flagRef.current.classList.remove(
                              "flag-united-kingdom"
                            );
                            flagRef.current.classList.add(`flag-uzbekistan`);
                          }
                          if (
                            flagRef.current.classList.contains("flag-russia")
                          ) {
                            flagRef.current.classList.remove("flag-russia");
                            flagRef.current.classList.add(`flag-uzbekistan`);
                          }
                        }}
                      >
                        <i className="flag-uzbekistan flag"></i>
                        Uzbekistan
                        <i className="fa fa-check text-success ms-2"></i>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => {
                          setLang("eng");
                          if (
                            flagRef.current.classList.contains("flag-russia")
                          ) {
                            flagRef.current.classList.remove("flag-russia");
                            flagRef.current.classList.add(`flag-uzbekistan`);
                          }
                          if (
                            flagRef.current.classList.contains(
                              "flag-uzbekistan"
                            )
                          ) {
                            flagRef.current.classList.remove("flag-uzbekistan");
                            flagRef.current.classList.add(
                              `flag-united-kingdom`
                            );
                          }
                        }}
                      >
                        <i className="flag-united-kingdom flag"></i>
                        English
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => {
                          setLang("ru");
                          if (
                            flagRef.current.classList.contains("flag-uzbekistan")
                          ) {
                            flagRef.current.classList.remove("flag-uzbekistan");
                            flagRef.current.classList.add(`flag-russia`);
                          }
                          if (
                            flagRef.current.classList.contains(
                              "flag-united-kingdom"
                            )
                          ) {
                            flagRef.current.classList.remove("flag-united-kingdom");
                            flagRef.current.classList.add(
                              `flag-russia`
                            );
                          }
                        }}
                      >
                        <i className="flag-russia flag"></i>
                        Russia
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div
              className="theme_wrapp d-flex align-items-center"
              onClick={() => navRef.current.classNameList.toggle("navDark")}
            >
              <i className="fa-regular fa-moon pb-2 theme_icon_moon"></i>
              <h5 className="theme_name mx-1">{t.darkMode} </h5>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;

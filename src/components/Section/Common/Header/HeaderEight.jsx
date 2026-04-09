"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "~/components/Ui/BrandLogo/BrandLogo";


const HeaderEight = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [subMenuArray, setSubMenuArray] = useState([]);
  const [subMenuTextArray, setSubMenuTextArray] = useState([]);
  const [scrollClassName, setScrollClassName] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollClassName("sticky-menu");
      } else {
        setScrollClassName("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuMainClickHandler = (e) => {
    if (typeof window !== "undefined" && window.innerWidth <= 991) {
      document.querySelectorAll(".nav-item").forEach((item) => {
        item.classList.remove("active");
      });

      const hasChildren = e.target.closest(".nav-item-has-children");
      if (hasChildren) {
        e.preventDefault();
        if (hasChildren.classList.contains("nav-item-has-children")) {
          showSubMenu(hasChildren);
        }
      }
    }
  };

  const goBackClickHandler = () => {
    const lastItem = subMenuArray.slice(-1)[0];
    const lastItemText = subMenuTextArray.slice(-2)[0];
    setSubMenuArray(subMenuArray.slice(0, -1));
    setSubMenuTextArray(subMenuTextArray.slice(0, -1));
    if (lastItem) {
      if (subMenuArray.length >= 0) {
        if (
          !document
            .getElementById(lastItem)
            .classList.contains("nav-item-has-children")
        ) {
          document.getElementById(lastItem).style.animation =
            "slideRight 0.5s ease forwards";
          document.querySelector(".current-menu-title").innerHTML =
            lastItemText;
          setTimeout(() => {
            document.getElementById(lastItem).classList.remove("active");
          }, 300);
        } else {
          document.querySelector(".go-back").classList.remove("active");
        }
      }
    }
    if (subMenuArray.length === 1) {
      document.querySelector(".mobile-menu-head").classList.remove("active");
    }
  };

  const menuTriggerClickHandler = () => {
    toggleMenu();
  };

  const closeMenuClickHandler = () => {
    toggleMenu();
    const submenuAll = document.querySelectorAll(".sub-menu");
    submenuAll.forEach((submenu) => {
      submenu.classList.remove("active");
      submenu.style.animation = "";
    });

    document.querySelector(".go-back").classList.remove("active");
  };

  const overlayClickHandler = () => {
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
    document.querySelector(".menu-overlay").classList.toggle("active");
  };

  const showSubMenu = (hasChildren) => {
    const submenuAll = document.querySelectorAll(".sub-menu");
    submenuAll.forEach((submenu) => submenu.classList.remove());
    const subMenu = hasChildren.querySelector(".sub-menu");
    setSubMenuArray([...subMenuArray, subMenu.id]);
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector(".drop-trigger").textContent;
    setSubMenuTextArray([...subMenuTextArray, menuTitle]);
    document.querySelector(".current-menu-title").innerHTML = menuTitle;
    document.querySelector(".mobile-menu-head").classList.add("active");
  };

  useEffect(() => {
    const handleResize = () => {
      if (
        typeof window !== "undefined" &&
        window.innerWidth > 991 &&
        isActive
      ) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isActive]);
  return (
    <header className={`site-header tekup-header-section  ${scrollClassName}`}>
      <div className="tekup-header-top bg-dark">
        <div className="container-fuild">
          <div className="tekup-header-info-wrap">
            <div className="tekup-header-info ">
              <ul>
                <li><i className="ri-map-pin-2-fill"></i>Business Intelligence Through Decisions That Matter</li>
              </ul>
            </div>
            <div className="tekup-header-info">
              <ul>
                <li><Link href="tel:+254716205797"><i className="ri-phone-fill"></i>+254 716 205 797</Link></li>
                <li><Link href="mailto:info@raboktechnologies.co.ke"><i className="ri-mail-fill"></i>info@raboktechnologies.co.ke</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tekup-header-bottom bg-white">
        <div className="container-fuild">
          <nav className="navbar site-navbar">
            <div className="brand-logo">
              <Link href="/">
                <BrandLogo logoImage="/images/logo/logo-dark.svg" />
              </Link>
            </div>
            <div className="menu-block-wrapper">
              <div className="menu-overlay"></div>
              <nav
                className={`menu-block ${isActive ? "active" : ""}`}
                id="append-menu-header"
              >
                <div className="mobile-menu-head">
                  <div className="go-back" onClick={goBackClickHandler}>
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title"></div>
                  <div
                    className="mobile-menu-close"
                    onClick={closeMenuClickHandler}
                  >
                    {" "}
                    &times;
                  </div>
                </div>
                <ul className="site-menu-main" onClick={menuMainClickHandler}>
                  <li className="nav-item">
                    <Link href="/" className="nav-link-item">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="about-us" className="nav-link-item">About Us</Link>
                  </li>
                  <li className="nav-item nav-item-has-children">
                    <Link href="#" className="nav-link-item drop-trigger">Services <i className="ri-arrow-down-s-line"></i></Link>
                    <ul className="sub-menu" id="submenu-1">
                      <li className="sub-menu--item">
                        <Link href="service">
                          <span className="menu-item-text">Business Intelligence</span>
                        </Link>
                      </li>
                      <li className="sub-menu--item">
                        <Link href="service">
                          <span className="menu-item-text">Data Analytics</span>
                        </Link>
                      </li>
                      <li className="sub-menu--item">
                        <Link href="service">
                          <span className="menu-item-text">Data Strategy Consulting</span>
                        </Link>
                      </li>
                      <li className="sub-menu--item">
                        <Link href="service">
                          <span className="menu-item-text">Dashboard & Reporting</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="pricing" className="nav-link-item">Pricing</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="blog" className="nav-link-item">Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="contact-us" className="nav-link-item">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-btn header-btn-l1 ms-auto  d-lg-flex">
              <div className="tekup-header-icon">
                <div className="tekup-header-search" onClick={() => setSearchBar(true)}>
                  <i className="ri-search-line"></i>
                </div>
                <Link className="tekup-default-btn tekup-header-btn" href="contact-us">Get in Touch <i className="ri-arrow-right-up-line"></i></Link>
              </div>
            </div>
            <div className="mobile-menu-trigger" onClick={menuTriggerClickHandler}>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
      <div className={`tekup-header-search-section ${searchBar ? "open" : ""}`}>
        <div className="container">
          <div className="tekup-header-search-box">
            <input type="search" placeholder="Search here..." />
            <button id="header-search" type="button"><img src="/images/v1/search-dark.png" alt="" /></button>
            <p>Type above and press Enter to search. Press Close to cancel.</p>
          </div>
        </div>
        <div className="tekup-header-search-close" onClick={() => setSearchBar(false)}>
          <i className="ri-close-line"></i>
        </div>
      </div>
      <div className={`search-overlay ${searchBar ? "open" : ""}`} onClick={() => setSearchBar(false)}></div>
    </header>
  );
};

export default HeaderEight;
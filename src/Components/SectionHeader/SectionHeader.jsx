import React from "react";
import "./SectionHeader.css";
import { Link } from "react-router-dom";

export default function SectionHeader({ title, desc, btnTitle, btnHref }) {
  return (
    <div>
      <div className="courses-header">
        <div className="courses-header__right">
          <span className="courses-header__title title">{title}</span>
          <span className="courses-header__text">{desc}</span>
        </div>

        {btnTitle ? (
          <div className="courses-header__left">
            <Link to={`/${btnHref}`} className="courses-header__link">
              {btnTitle}
              <i className="fas fa-arrow-left courses-header__icon"></i>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
<div className="courses-header">
  <div className="courses-header__right">
    <span className="courses-header__title title">Test</span>
    <span className="courses-header__text">Test</span>
  </div>

  <div className="courses-header__left">
    <a href="#" className="courses-header__link">
      تمامی دوره ها
      <i className="fas fa-arrow-left courses-header__icon"></i>
    </a>
  </div>
</div>;

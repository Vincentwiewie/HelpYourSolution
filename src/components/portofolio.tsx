"use client";
import { portofolioModel } from "@/app/interface/Model";
import { useState } from "react";

export default function portofolio({
  title,
  subTitle,
  category,
  data,
}: portofolioModel) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  return (
    <section className="portfolio-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h6 className="sub-title">{title}</h6>
              <h2>{subTitle}</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="portfolio-list">
              <ul className="nav" id="portfolio-flters">
                <li
                  className={
                    selectedCategory == "all"
                      ? "filter filter-active"
                      : "filter"
                  }
                  onClick={() => {
                    setSelectedCategory("all");
                  }}
                >
                  All
                </li>
                {category.map((m: string) => {
                  return (
                    <li
                      className={
                        selectedCategory == m
                          ? "filter filter-active"
                          : "filter"
                      }
                      key={m}
                      onClick={() => {
                        setSelectedCategory(m);
                      }}
                    >
                      {m}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="row">
            {data.map((m) => {
              return m.type == selectedCategory || selectedCategory == "all" ? (
                <div
                  className={`col-lg-4 col-md-6 portfolio-grid-item all`}
                  key={m.image}
                >
                  <div className="portfolio-item">
                    <img src={m.image} alt="image" style={{ height: "45vh" }} />
                    <div className="portfolio-content-overlay">
                      <p>{m.label}</p>
                      <h3>
                        <a>{m.subLabel}</a>
                      </h3>
                      <a
                        className="portfolio-link-icon"
                        href="tel:081284691689"
                      >
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

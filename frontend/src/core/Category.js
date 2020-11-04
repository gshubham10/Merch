import React, { useEffect, useState } from "react";

import { getCategories } from "./helpler/coreapicalls";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const loadAllCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };
  useEffect(() => {
    loadAllCategories();
  }, []);

  return (
    <div className="col-lg-3">
      <div className="hero__categories">
        <div className="hero__categories__all">
          <i className="fa fa-bars"></i>
          <span>All Categories</span>
        </div>
        <ul>
          {" "}
          {categories.map((category, index) => (
            <li key={index}> {category.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;

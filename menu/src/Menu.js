import React from "react";

const Menu = ({ img, title, category, price, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt="" className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
        </header>
        <h4 className="price">{price}</h4>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default Menu;

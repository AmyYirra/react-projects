import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["All", ...new Set(items.map((item)=>item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
      if (category === "All") {
        setMenuItems(items);
        return;
      }
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
        </div>

        <div className="underline"></div>
        <Categories categories={categories} filterItems={filterItems} />
        <div>
          <section className="section-center">
            {menuItems.map((item) => {
              return <Menu {...item} key={item.id} />;
            })}
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;

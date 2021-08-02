import React, { useState, useEffect } from "react";
import List from "./List";
// // eslint-disable-next-line no-unused-vars
// import Alert from "./Alert";

const getLocalStorage = () => {
  let grocery = localStorage.getItem("list");
  if (grocery) {
    return JSON.parse(grocery);
  } else return [];
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: new Date().getTime().toString(), title: name };
    setList([...list, newItem]);
    list.map((item) => {
      if (item.id === editId) {
        return { ...item, title: name };
      }
      return item;
    });
    setName("");
    setEditId(null);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setEditId(id);
    setName(specificItem.title);
    setIsEditing(true);
  };
  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocey-form">
        <input
          type="text"
          className="grocery"
          placeholder="e.g. eggs"
          value={name}
          onChange={handleChange}
        />
        <button className="sub-btn">{isEditing ? "edit" : "submit"}</button>
      </form>
      {list.length > 0 && (
        <div className="grocery-list">
          {list.map((item) => {
            return (
              <List item={item} removeItem={removeItem} editItem={editItem} />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default App;

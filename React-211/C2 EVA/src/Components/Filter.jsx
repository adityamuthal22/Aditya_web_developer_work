import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  console.log("urlCategory:", urlCategory);
  const [category, setCategory] = useState(urlCategory || []);

  const handleCategory = (e) => {
    let option = e.target.value;

    const newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    if (category) {
      const params = {};
      category && (params.category = category);
      setSearchParams(params);
    }
  }, [category, setSearchParams]);
  console.log("category:", category);
  return (
    <div style={{ border: "2px solid", width: "15%", borderRadius: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input
            type="checkbox"
            value="Sneakers"
            defaultChecked={category.includes("Sneakers")}
            onChange={handleCategory}
          />
          <label>Sneakers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Loafers"
            defaultChecked={category.includes("Loafers")}
            onChange={handleCategory}
          />
          <label>Loafers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Canvas"
            defaultChecked={category.includes("Canvas")}
            onChange={handleCategory}
          />
          <label>Canvas</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Boots"
            defaultChecked={category.includes("Boots")}
            onChange={handleCategory}
          />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;

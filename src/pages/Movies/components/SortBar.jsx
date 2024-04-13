import React from "react";

const SortBar = ({ onToggleSort, sortDirection }) => {
  return (
    <div>
      <button onClick={onToggleSort}>
        {sortDirection === "asc" ? "인기도 높은순" : "인기도 낮은순"}
      </button>
    </div>
  );
};

export default SortBar;

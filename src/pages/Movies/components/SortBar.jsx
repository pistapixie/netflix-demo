import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const SortBar = ({ onSortChange, currentSort }) => {
  return (
    <DropdownButton
      title={`정렬: ${
        currentSort === "popularity.desc" ? "인기도 높은순" : "인기도 낮은순"
      }`}
      variant="danger"
      className="rounded"
      menuVariant="dark"
    >
      <Dropdown.Item
        eventKey="popularity.desc"
        onClick={() => onSortChange("popularity.desc")}
        active={currentSort === "popularity.desc"}
      >
        인기도 높은순
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="popularity.asc"
        onClick={() => onSortChange("popularity.asc")}
        active={currentSort === "popularity.asc"}
      >
        인기도 낮은순
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default SortBar;

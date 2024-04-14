import React, { useState } from "react";

const Review = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const maxContentLength = 200;

  return (
    <div
      style={{
        border: "1px solid darkred",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "8px",
        textAlign: "left",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {review.author}
        </p>
        <p
          style={{
            fontSize: "smaller",
            marginBottom: "10px",
          }}
        >
          {review.updated_at.split("T")[0]} (updated)
        </p>
      </div>
      <p>
        {expanded || review.content.length <= maxContentLength
          ? review.content
          : `${review.content.substring(0, maxContentLength)}...`}
      </p>
      {review.content.length > maxContentLength && (
        <button
          onClick={toggleExpanded}
          style={{
            background: "transparent",
            border: "none",
            color: "gray",
            textDecoration: "underline",
            cursor: "pointer",
            textAlign: "left",
            padding: "0",
          }}
        >
          {expanded ? "Less" : "More"}
        </button>
      )}
    </div>
  );
};

export default Review;

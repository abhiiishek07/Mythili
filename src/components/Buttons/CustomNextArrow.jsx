import React from "react";

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#E3E4E6",
        padding: "2px",
        height: "2rem",
        width: "2rem",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0.5rem",
      }}
      onClick={onClick}
    />
  );
};

export default CustomNextArrow;

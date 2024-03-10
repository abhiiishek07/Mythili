import React from "react";

const CustomePrevArrow = (props) => {
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
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
};

export default CustomePrevArrow;

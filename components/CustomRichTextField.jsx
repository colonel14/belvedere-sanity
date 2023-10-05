import React from "react";

const CustomRichTextField = ({ input }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        minHeight: "200px",
        padding: "8px",
      }}
      dangerouslySetInnerHTML={{ __html: input.value }}
    />
  );
};

export const customRichTextField = {
  Component: CustomRichTextField,
  format: (value) => value,
  parse: (value) => value,
};

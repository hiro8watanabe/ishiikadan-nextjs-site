import React from "react";

export const MarginLeft: React.FC<{
  style?: React.CSSProperties;
  spacer: string | number;
}> = ({ style = {}, spacer, ...delegated }) => {
  return (
    <span
      style={{
        display: "block",
        width: 1,
        height: 1,
        marginLeft: "auto",
        ...style,
      }}
      {...delegated}
    />
  );
};

import React, { ReactNode } from "react";

export const Spacer: React.FC<{
  size: number | string;
  axis?: string;
  style?: React.CSSProperties;
}> = ({ size, axis, style = {}, ...delegated }) => {
  const width = axis === "vertical" ? 1 : size;
  const height = axis === "horizontal" ? 1 : size;
  return (
    <span
      style={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...delegated}
    />
  );
};


import { FC, CSSProperties, ReactNode } from "react";
import { animated } from "react-spring";
import useMouseStalker from "../../hooks/mouseStalker/useMouseStalker";

type Props = {
  children?: ReactNode;
};

const initMouse = {
  width: 16,
  height: 16,
  borderRadius: 8,
  opacity: 0,
  top: 0,
  left: 0,
};

const springConfig = {
  // 変化の速さ. 大きくすると遅くなる.
  frequency: 0.12,
  // どのタイミングで減速するか. 大きくすると減衰の開始が速くなる.
  damping: 1.8,
};

const mouseStyles: CSSProperties = {
  pointerEvents: "none",
  position: "fixed",
  zIndex: 10000,
  backgroundColor: "white",
  mixBlendMode: "difference",
};

export const MouseStalker: FC<Props> = ({ children }) => {
  const springStyles = useMouseStalker(initMouse, springConfig, 6);

  return (
    <animated.div
      style={{
        ...mouseStyles,
        ...springStyles,
      }}
    >
      {children}
    </animated.div>
  );
};

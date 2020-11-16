//@ts-ignore
import React from "react";

interface Vertical {
  height: string;
  width?: never;
  style?: Record<string, string>;
}

interface Horizon {
  width: string;
  height?: never;
  style?: Record<string, string>;
}

type Props = Vertical | Horizon;

/**
 * 空隙
 * @param props 宽高
 */

export default function Gap(props: Props) {
  const { style, height, width } = props;
  return <div style={{ height, width, ...style }} />;
}

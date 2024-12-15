import React from "react";
import { SVG_COMPONENTS_MAPPINGS } from "../../../constants/icons-constant";

function SvgWrapper({ svgSrc, children, ...props }) {
  const SvgComponent = SVG_COMPONENTS_MAPPINGS[svgSrc];
  return SvgComponent ? (
    <SvgComponent {...props}> {children} </SvgComponent>
  ) : null;
}

export default SvgWrapper;

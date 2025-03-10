import { ReactComponent as Mail } from "../assets/mail.svg";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { ReactComponent as ArrowPink } from "../assets/arrow-pink.svg";
export const SVG_COMPONENTS_MAPPINGS = {
  location: Location,
  mail: Mail,
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
  arrow: Arrow,
  arrowPink: ArrowPink,
  // mail: Mail,
};

/* To be implemented in the future. */
// src/constants/icons-constant.js
// const SVG_COMPONENTS_MAPPINGS = {};

// function importAll(r) {
//   r.keys().forEach((key) => {
//     const componentName = key
//       .replace("./", "") // Remove "./" from the beginning
//       .replace(".svg", ""); // Remove ".svg" extension
//     SVG_COMPONENTS_MAPPINGS[componentName] = r(key).ReactComponent;
//   });
// }

// // Dynamically require all SVG files in the icons folder
// importAll(require.context("../assets/icons", false, /\.svg$/));

// export { SVG_COMPONENTS_MAPPINGS };

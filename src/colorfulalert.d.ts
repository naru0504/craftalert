import cral, { colorfulalert } from "./core";

declare global {
  const cral: colorfulalert;
  const colorfulalert: colorfulalert;
}

export default cral;
export as namespace cral;

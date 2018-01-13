import cral, { craftalert } from "./core";

declare global {
  const cral: craftalert;
  const craftalert: craftalert;
}

export default cral;
export as namespace cral;

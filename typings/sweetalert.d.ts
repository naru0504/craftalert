import cral, { SweetAlert } from "./core";

declare global {
  const cral: SweetAlert;
  const sweetAlert: SweetAlert;
}

export default cral;
export as namespace cral;

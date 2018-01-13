/*
 * List of class names that we
 * use throughout the library to
 * manipulate the DOM.
 */

export interface ClassNameList {
  [key: string]: string,
};

const OVERLAY: string = 'cral-overlay';
const BUTTON: string = 'cral-button';
const ICON: string = 'cral-icon';

export const CLASS_NAMES: ClassNameList = {
  MODAL: 'cral-modal',
  OVERLAY,
  SHOW_MODAL: `${OVERLAY}--show-modal`,

  MODAL_TITLE: `cral-title`,
  MODAL_TEXT: `cral-text`,
  ICON,
  ICON_CUSTOM: `${ICON}--custom`,

  CONTENT: 'cral-content',

  FOOTER: 'cral-footer',
  BUTTON_CONTAINER: 'cral-button-container',
  BUTTON,
  CONFIRM_BUTTON: `${BUTTON}--confirm`,
  CANCEL_BUTTON: `${BUTTON}--cancel`,
  DANGER_BUTTON: `${BUTTON}--danger`,
  BUTTON_LOADING: `${BUTTON}--loading`,
  BUTTON_LOADER: `${BUTTON}__loader`,
};

export default CLASS_NAMES;


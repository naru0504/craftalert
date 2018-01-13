import { getNode } from '../utils';
import { cralOptions } from '../options';

import CLASS_NAMES from '../class-list';
const { MODAL } = CLASS_NAMES;

import initModalOnce, {
  initModalContent,
} from './modal';

import initOverlayOnce from './overlay';
import addEventListeners from '../event-listeners';
import { throwErr } from '../utils';

/*
 * Inject modal and overlay into the DOM
 * Then format the modal according to the given opts
 */
export const init = (opts: cralOptions): void => {
  const modal: Element = getNode(MODAL);

  if (!modal) {
    if (!document.body) {
      throwErr("You can only use colorfulalert AFTER the DOM has loaded!");
    }

    initOverlayOnce();
    initModalOnce();
  }

  initModalContent(opts);
  addEventListeners(opts);
};

export default init;


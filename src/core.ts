/*
 * craftalert
 * 2014-2017 – Tristan Edwards
 * https://github.com/naru0504/craftalert
 */

import init from './modules/init';

import {
  openModal,
  onAction,
  getState,
  stopLoading,
} from './modules/actions';

import state, {
  setActionValue,
  ActionOptions,
  cralState,
} from './modules/state';

import {
  cralOptions,
  getOpts,
  setDefaults,
} from './modules/options';

export type cralParams = (string|Partial<cralOptions>)[];

export interface craftalert {
  (...params: cralParams): Promise<any>,
  close? (namespace: string): void,
  getState? (): cralState,
  setActionValue? (opts: string|ActionOptions): void,
  stopLoading? (): void,
  setDefaults? (opts: object): void,
};

const cral:craftalert = (...args) => {

  // Prevent library to be run in Node env:
  if (typeof window === 'undefined') return;

  const opts: cralOptions = getOpts(...args);

  return new Promise<any>((resolve, reject) => {
    state.promise = { resolve, reject };

    init(opts);

    // For fade animation to work:
    setTimeout(() => {
      openModal();
    });

  });
};

cral.close = onAction;
cral.getState = getState;
cral.setActionValue = setActionValue;
cral.stopLoading = stopLoading;
cral.setDefaults = setDefaults;

export default cral;


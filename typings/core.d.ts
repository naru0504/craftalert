import { ActionOptions, cralState } from './modules/state';
import { cralOptions } from './modules/options';
export declare type cralParams = (string | Partial<cralOptions>)[];
export interface craftalert {
    (...params: cralParams): Promise<any>;
    close?(namespace: string): void;
    getState?(): cralState;
    setActionValue?(opts: string | ActionOptions): void;
    stopLoading?(): void;
    setDefaults?(opts: object): void;
}
declare const cral: craftalert;
export default cral;

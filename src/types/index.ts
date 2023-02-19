import { Method } from "axios";

export type Methods = Lowercase<Method>;

export interface Action<T> {
    type : string;
    payload : T;
    meta : any;
}

export interface CallApiPayload {
    link: string;
    method: Methods;
    data: any;
    type : string;
}
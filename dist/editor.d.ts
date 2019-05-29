#!/usr/bin/env node
export interface Options {
    file: string;
    host?: string;
    port?: string;
    silent?: boolean;
}
export declare const edit: (options: Options) => void;
export default edit;

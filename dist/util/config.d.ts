interface Config {
    name: string;
    rootDir: string;
    editorPath: string;
    userHome?: string;
    debug: boolean;
    nodeModules: string;
    editorConfig: object;
    browser: string;
}
declare const config: Config;
export default config;

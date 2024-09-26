import type { options } from "./types";
export declare class AutoSwagger {
    private options;
    private schemas;
    private commentParser;
    private modelParser;
    private interfaceParser;
    private routeParser;
    private validatorParser;
    private customPaths;
    ui(url: string, options?: options): string;
    rapidoc(url: string, style?: string): string;
    scalar(url: string): string;
    jsonToYaml(json: any): any;
    json(routes: any, options: options): Promise<string | {
        openapi: string;
        info: any;
        components: {
            responses: {
                Forbidden: {
                    description: string;
                };
                Accepted: {
                    description: string;
                };
                Created: {
                    description: string;
                };
                NotFound: {
                    description: string;
                };
                NotAcceptable: {
                    description: string;
                };
            };
            securitySchemes: any;
            schemas: {};
        };
        paths: {};
        tags: any[];
    }>;
    writeFile(routes: any, options: options): Promise<void>;
    private readFile;
    docs(routes: any, options: options): Promise<any>;
    private generate;
    private getDataBasedOnAdonisVersion;
    private getSchemas;
    private getValidators;
    private getModels;
    private getInterfaces;
    private getFiles;
}

declare type ComponentInjectRes<T> = {
    [K in keyof T]: () => T[K];
};
export declare const componentInject: <ComponentOpts_1>() => ComponentInjectRes<ComponentOpts_1>;
export {};

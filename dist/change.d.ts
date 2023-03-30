declare const change: <T extends Record<string, any>>(target: T, caseFunc: (str: string) => string) => Record<string, any> | undefined;
export default change;

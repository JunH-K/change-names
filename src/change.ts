const convert = <T extends Record<string, any>>(
  obj: T,
  transformer: (str: string) => string
): Record<string, any> => {
  if (Array.isArray(obj)) {
    return obj.map((value: Record<string, any>) => convert(value, transformer));
  }

  if (obj !== null && typeof obj === "object") {
    const newObj: Record<string, any> = {};

    for (const [key, value] of Object.entries(obj)) {
      const newKey = transformer(key);
      newObj[newKey] = convert(value, transformer);
    }
    return newObj;
  }
  return obj;
};

const change = <T extends Record<string, any>>(
  target: T,
  caseFunc: (str: string) => string
) => {
  try {
    return convert(target, caseFunc);
  } catch (e) {
    console.error("error:", e);
  }
};

export default change;

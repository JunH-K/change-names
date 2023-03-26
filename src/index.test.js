import change, { pascalCase, camelCase, snakeCase } from "./index";

describe("toSnake", function () {
  test("camel to snake", () => {
    const camel = {
      camelCase: {
        camelCase2: 2,
        camelCase3: 4,
      },
    };

    const camelToSnake = {
      camel_case: {
        camel_case2: 2,
        camel_case3: 4,
      },
    };
    expect(change(camel, snakeCase)).toEqual(camelToSnake);
  });

  test("pascal to snake", () => {
    const pascal = {
      PascalCaseExample: {
        PascalCaseExample2: 2,
        PascalCaseExample3: 4,
      },
    };

    const pascalToSnake = {
      pascal_case_example: {
        pascal_case_example2: 2,
        pascal_case_example3: 4,
      },
    };

    expect(change(pascal, snakeCase)).toEqual(pascalToSnake);
  });
});

describe("toCamel", function () {
  test("snake to camel", () => {
    const snake = {
      camel_case: {
        camel_case2: 2,
        camel_case3: 4,
      },
    };

    const snakeToCamel = {
      camelCase: {
        camelCase2: 2,
        camelCase3: 4,
      },
    };
    expect(change(snake, camelCase)).toEqual(snakeToCamel);
  });

  test("pascal to camel", () => {
    const pascal = {
      PascalCaseExample: {
        PascalCaseExample2: 2,
        PascalCaseExample3: 4,
      },
    };

    const pascalToCamel = {
      pascalCaseExample: {
        pascalCaseExample2: 2,
        pascalCaseExample3: 4,
      },
    };

    expect(change(pascal, camelCase)).toEqual(pascalToCamel);
  });
});

describe("toPascal", function () {
  const toPascal = {
    CamelCase: {
      CamelCase2: 2,
      CamelCase3: 4,
    },
  };

  test("snake to pascal", () => {
    const snake = {
      camel_case: {
        camel_case2: 2,
        camel_case3: 4,
      },
    };
    expect(change(snake, pascalCase)).toEqual(toPascal);
  });
  test("camel to pascal", () => {
    const camel = {
      camelCase: {
        camelCase2: 2,
        camelCase3: 4,
      },
    };
    expect(change(camel, pascalCase)).toEqual(toPascal);
  });
});

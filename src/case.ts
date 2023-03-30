const checkCase = (str: string) => {
  if (/^[a-z]+(_[a-z0-9]+)*$/.test(str)) {
    return "snake";
  } else if (/^[a-z]+([A-Z][a-z0-9]*)*$/.test(str)) {
    return "camel";
  } else if (/^[A-Za-z]*([A-Z][A-Za-z0-9]*)*$/.test(str)) {
    return "pascal";
  } else {
    throw new Error(`Invalid case found in string: ${str}`);
  }
};

//To Pascal
const camelToPascalCase = (str: string) => {
  return str.replace(/^[a-z]/, ($1) => {
    return $1.toUpperCase();
  });
};

const snakeToPascalCase = (str: string) => {
  return str
    .replace(/^[a-z]/, ($1) => {
      return $1.toUpperCase();
    })
    .replace(/([-_][a-z])/gi, ($1) =>
      $1.toUpperCase().replace("-", "").replace("_", "")
    );
};

//To Snake
const camelToSnake = (str: string) => {
  return str.replace(/[A-Z]/g, ($1) => `_${$1.toLowerCase()}`);
};

const pascalToSnakeCase = (str: string) => {
  return str
    .replace(/[\w]([A-Z])/g, ($1) => {
      return $1[0] + "_" + $1[1].toLowerCase();
    })
    .toLowerCase();
};

//To Camel
const snakeToCamel = (str: string) => {
  return str.replace(/([-_][a-z])/gi, ($1) =>
    $1.toUpperCase().replace("-", "").replace("_", "")
  );
};

const pascalToCamel = (str: string) => {
  return str.replace(/^[A-Z]/, ($1) => {
    return $1.toLowerCase();
  });
};

const camelCase = (target: string) => {
  const to = {
    snake: snakeToCamel,
    pascal: pascalToCamel,
  };

  const cases = checkCase(target);
  const toCase = to[cases as keyof typeof to];
  return toCase ? toCase(target) : target;
};

const snakeCase = (target: string) => {
  const to = {
    camel: camelToSnake,
    pascal: pascalToSnakeCase,
  };
  const cases = checkCase(target);
  const toCase = to[cases as keyof typeof to];
  return toCase ? toCase(target) : target;
};

const pascalCase = (target: string) => {
  const to = {
    camel: camelToPascalCase,
    snake: snakeToPascalCase,
  };
  const cases = checkCase(target);
  const toCase = to[cases as keyof typeof to];
  return toCase ? toCase(target) : target;
};

export { snakeCase, camelCase, pascalCase };

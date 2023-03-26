const checkCase = (str) => {
  if (/^[a-z]+(_[a-z0-9]+)*$/.test(str)) {
    return "snake";
  } else if (/^[a-z]+([A-Z][a-z0-9]*)*$/.test(str)) {
    return "camel";
  } else if (/^[A-Za-z]*([A-Z][A-Za-z0-9]*)*$/.test(str)) {
    return "pascal";
  } else {
    return new Error("not Found Case");
  }
};

//To Pascal
const camelToPascalCase = (str) => {
  return str.replace(/^[a-z]/, ($1) => {
    return $1.toUpperCase();
  });
};

const snakeToPascalCase = (str) => {
  return str
    .replace(/^[a-z]/, ($1) => {
      return $1.toUpperCase();
    })
    .replace(/([-_][a-z])/gi, ($1) =>
      $1.toUpperCase().replace("-", "").replace("_", "")
    );
};

//To Snake
const camelToSnake = (str) => {
  return str.replace(/[A-Z]/g, ($1) => `_${$1.toLowerCase()}`);
};

const pascalToSnakeCase = (str) => {
  return str
    .replace(/[\w]([A-Z])/g, ($1) => {
      return $1[0] + "_" + $1[1].toLowerCase();
    })
    .toLowerCase();
};

//To Camel
const snakeToCamel = (str) => {
  return str.replace(/([-_][a-z])/gi, ($1) =>
    $1.toUpperCase().replace("-", "").replace("_", "")
  );
};

const pascalToCamel = (str) => {
  return str.replace(/^[A-Z]/, ($1) => {
    return $1.toLowerCase();
  });
};

const camelCase = (target) => {
  const to = {
    snake: snakeToCamel,
    pascal: pascalToCamel,
  };

  const cases = checkCase(target);
  return to[cases] ? to[cases](target) : target;
};

const snakeCase = (target) => {
  const to = {
    camel: camelToSnake,
    pascal: pascalToSnakeCase,
  };
  const cases = checkCase(target);
  return to[cases] ? to[cases](target) : target;
};

const pascalCase = (target) => {
  const to = {
    camel: camelToPascalCase,
    snake: snakeToPascalCase,
  };
  const cases = checkCase(target);
  return to[cases] ? to[cases](target) : target;
};

const convert = (obj, caseFunc) => {
  if (obj !== null && typeof obj === "object") {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
      const newKey = caseFunc(key);
      newObj[newKey] = convert(value, caseFunc);
    }
    return newObj;
  } else if (Array.isArray(obj)) {
    return obj.map(convert, caseFunc);
  }
  return obj;
};

const change = (target, caseFunc) => {
  try {
    return convert(target, caseFunc);
  } catch (e) {
    console.error("error:", e);
  }
};

export default change;
export { snakeCase, camelCase, pascalCase };

# Change JavaScript string, Object properties name.

[![npm](https://img.shields.io/npm/v/change-names)](https://www.npmjs.com/package/change-names)
[![Downloads](https://img.shields.io/npm/dt/change-names)](http://npm-stat.com/charts.html?package=change-names)
[![license](https://img.shields.io/npm/l/change-names)](https://img.shields.io/npm/l/change-names)

Change the object properties or string to camel case, snake case, parscal case.

> Install

```bash
npm i change-names
```

> Usage

```javascript
import change, { camelCase, snakeCase, pascalCase } from "change-names";

//change string
camelCase("CamelCase"); // → camelCase
snakeCase("camelCase"); // → camel_case
pascalCase("camel_case"); // → CamelCase

// Change the object's property name to snakecase.
change(
  {
    camelCase: {
      camelCase2: 2,
      camelCase3: 4,
    },
  },
  snakeCase
);
// camel_case: {
//     camel_case2: 2,
//     camel_case3: 4,
// }

// Change the object's property name to camelcase.
change(
  {
    camel_case: {
      camel_case2: 2,
      camel_case3: 4,
    },
  },
  camelCase
);
// camelCase: {
//     camelCase2: 2,
//     camelCase3: 4,
// },

// Change the object's property name to pascalcase.
change(
  {
    camel_case: {
      camel_case2: 2,
      camel_case3: 4,
    },
  },
  pascalCase
);
// {
//     CamelCase: {
//         CamelCase2: 2,
//         CamelCase3: 4,
//     },
// }

```


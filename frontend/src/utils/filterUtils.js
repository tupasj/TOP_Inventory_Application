/* eslint-disable no-fallthrough */
/* eslint-disable default-case */

const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const getFilterCategory = (value) => {
  const filterValueParsed = parseFloat(value);

  if (filterValueParsed <= 5.0) {
    return "minIntMatch";
  } else if (filterValueParsed >= 50) {
    return "maxIntMatch";
  } else {
    return "stringMatch";
  }
};

const filterbyCategory = (productsToFilter, filterCategory, filterValue) => {
  const filterValueParsed = parseFloat(filterValue);
  let appliedFilter;

  switch (filterCategory) {
    case "stringMatch":
      appliedFilter = productsToFilter.filter((product) => {
        const matchingKey = getKeyByValue(product, filterValue);
        return matchingKey;
      });
      break;
    case "minIntMatch":
      appliedFilter = productsToFilter.filter((product) => {
        return filterValueParsed <= product.rating;
      });
      break;
    case "maxIntMatch":
      appliedFilter = productsToFilter.filter((product) => {
        return filterValueParsed >= product.price;
      });
      break;
  }
  return appliedFilter;
};

export { getKeyByValue, getFilterCategory, filterbyCategory };

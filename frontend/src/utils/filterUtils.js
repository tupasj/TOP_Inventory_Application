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

const makeFilterQueryParamsString = (filterArray) => {
  const filterCategories = [
    {
      title: "category",
      items: ["tops", "pants", "shorts", "accessories"],
    },
    {
      title: "style",
      items: ["casual", "formal", "semi-formal", "indoor"],
    },
    {
      title: "rating",
      items: ["3.0", "3.5", "4.0", "4.5", "5.0"],
    },
    {
      title: "price",
      items: ["50", "100", "150", "200", "250", "300"],
    },
  ];
  const makeQueryParamsObject = (filterArray) => {
    const queryParamsObject = {};
    // Iterate through filterArray
    for (let i = 0; i < filterArray.length; i++) {
      // Iterate through filterCategories
      for (let j = 0; j < filterCategories.length; j++) {
        // Iterate through items
        for (let k = 0; k < filterCategories[j].items.length; k++) {
          // When the current filterArray element matches the current items element, add property to queryParamsObject
          if (filterArray[i] === filterCategories[j].items[k]) {
            const categoryTitle = filterCategories[j].title;
            const categoryItem = filterArray[i];
            queryParamsObject[categoryTitle] = categoryItem;
            break;
          }
        }
      }
    }
    return queryParamsObject;
  };

  const queryParamsObject = makeQueryParamsObject(filterArray);

  let filterQueryParamsString = "https://top-inventory-application.up.railway.app/products/filter?";
  for (const property in queryParamsObject) {
    filterQueryParamsString += `${property}=${queryParamsObject[property]}&`;
  }
  filterQueryParamsString = filterQueryParamsString.slice(0, -1);

  return filterQueryParamsString;
};

export {
  getKeyByValue,
  getFilterCategory,
  filterbyCategory,
  makeFilterQueryParamsString,
};

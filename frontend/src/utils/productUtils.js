const getSearchResults = (searchValue, productsByType) => {
  const getMatchingProductNames = () => {
    const productNameMatches = [];
    for (let i = 0; i < productsByType.length; i++) {
      const currentProductName = productsByType[i].name.toLowerCase();
      const searchQuery = searchValue.toLowerCase();
      if (currentProductName.includes(searchQuery)) {
        productNameMatches.push(currentProductName);
      }
    }
    return productNameMatches;
  };

  const productNameMatches = getMatchingProductNames();

  const makeSearchResults = () => {
    const searchResults = [];
    for (let j = 0; j < productNameMatches.length; j++) {
      const currentMatchedName = productNameMatches[j].toLowerCase();
      for (let k = 0; k < productsByType.length; k++) {
        const currentProduct = productsByType[k];
        const currentProductName = productsByType[k].name.toLowerCase();
        if (currentProductName === currentMatchedName) {
          searchResults.push(currentProduct);
          break;
        }
      }
    }
    return searchResults;
  };

  const searchResults = makeSearchResults();
  return searchResults;
};

export { getSearchResults };

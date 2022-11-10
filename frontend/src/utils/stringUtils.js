const removeSpaces = (str) => {
  return (str = str.replace(/\s/g, ""));
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { removeSpaces, capitalizeFirstLetter };

const NoProductMatch = (props) => {
  const searchQuery = props.searchQuery;

  return (
    <div>
      Could not find any products matching {`'${searchQuery}'`}. Try searching for
      a different product.
    </div>
  );
};

export { NoProductMatch };

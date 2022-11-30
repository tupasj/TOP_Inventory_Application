import { HeaderButtons } from "./HeaderButtons";
import { Logo } from "./Logo";
import { Search } from "./Search";

const Header = (props) => {
  const itemCount = props.itemCount;
  const setSearchQuery = props.setSearchQuery;
  const type = props.type;
  const setType = props.setType;
  const setClothes = props.setClothes;
  const orders = props.orders;

  return (
    <header className="flex justify-between items-center px-9 h-[65px] bg-peach-dark">
      <Logo setType={setType} />
      <Search
        type={type}
        setSearchQuery={setSearchQuery}
        setClothes={setClothes}
      />
      <HeaderButtons itemCount={itemCount} orders={orders} />
    </header>
  );
};

export { Header };

import { HeaderButtons } from './HeaderButtons';
import { Logo } from './Logo';
import { Search } from './Search';
import { Navigation } from '../Navigation';

const Header = (props) => {
  const itemCount = props.itemCount;
  const setSearchQuery = props.setSearchQuery;
  const type = props.type;
  const setType = props.setType;
  const setClothes = props.setClothes;
  const orders = props.orders;

  return (
    <header>
      <div className="flex justify-between items-center py-5 pl-5 pr-8 bg-white">
        <Logo setType={setType} />
        <Search
          type={type}
          setSearchQuery={setSearchQuery}
          setClothes={setClothes}
        />
        <HeaderButtons itemCount={itemCount} orders={orders} />
      </div>
      <div className="bg-dark-gray/50 h-[1px]"></div>
      <Navigation setType={setType} />
    </header>
  );
};

export { Header };

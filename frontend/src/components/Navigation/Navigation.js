import { Link, Outlet } from 'react-router-dom';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navigation = (props) => {
  const setType = props.setType;

  return (
    <nav className="px-2 py-3 flex justify-center items-center">
      <div className="w-1/2 flex justify-around items-center text-lg">
        <Link
          className="hover:underline"
          to="/men"
          onClick={() => setType('men')}
        >
          Men
        </Link>
        <Link
          className="hover:underline"
          to="/women"
          onClick={() => setType('women')}
        >
          Women
        </Link>
        <Link
          className="hover:underline"
          to="/brand-new"
          onClick={() => setType('brand-new')}
        >
          Brand new
        </Link>
        <Link
          className="text-red visited:text-red hover:underline"
          to="/on-sale"
          onClick={() => setType('on-sale')}
        >
          On Sale
        </Link>
        <Outlet />
      </div>
    </nav>
  );
};

export { Navigation };

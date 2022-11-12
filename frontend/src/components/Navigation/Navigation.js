import { Link, Outlet } from 'react-router-dom';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navigation = (props) => {
    const setType = props.setType;

    return (
        <nav>
            <Link to="/men" onClick={() => setType('men')}>Men</Link>
            <Link to="/women" onClick={() => setType('women')}>Women</Link>
            <Link to="/brand-new" onClick={() => setType('brand-new')}>Brand new</Link>
            <Link className="nav__anchor--red" to="/on-sale" onClick={() => setType('on-sale')}>On Sale</Link>
            <Outlet />
        </nav>
    );
};

export { Navigation };

import { HeaderButtons } from './HeaderButtons';
import { Logo } from './Logo';
import { Search } from './Search';

const Header = (props) => {
    const itemCount = props.itemCount;
    const setSearchQuery = props.setSearchQuery;
    const type = props.type;
    const setType = props.setType;

    return (
        <header>
            <Logo setType={setType }/>
            <Search type={type} setSearchQuery={setSearchQuery} />
            <HeaderButtons itemCount={itemCount} />
        </header>
    );
};

export { Header };

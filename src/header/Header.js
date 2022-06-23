import MenuItems from "./components/MenuItems";
import { useState } from "react";
import Search from "./components/Search";

const Header = () =>
{
    const [searchValue, setSearchValue] = useState("");
    const onChange = (e) => {
        setSearchValue(e.target.value);
        
    }

    return (
        <header>
            <MenuItems></MenuItems>
            <Search onChange={onChange} value={searchValue}></Search>
        </header>
    );
}
export default Header;
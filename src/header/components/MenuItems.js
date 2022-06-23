import {Link} from 'react-router-dom';

const MenuItems = () => {
    const items = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ];
    return (
        <ul>
            {items.map(item => (
                <li key={item.name}>
                    <Link to={item.link}>{item.name}</Link>
                </li>
            ))}
        </ul>
    );
}
export default MenuItems;

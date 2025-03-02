import Logo from "./Logo";
import styles from './Header.module.css'
import Navigation from "./Navigation";
import Search from "./Search";
import AuthButton from "./AuthButton";

const Header = () => {
    return <header className={styles.header}>
        <Logo color={'white'}/>
        <Navigation />
        <Search />
        <AuthButton />
    </header>
}

export default Header;
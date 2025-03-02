import { useState } from 'react';
import styles from './Header.module.css'
import AuthModalForm from '../authorization/AuthModalForm';

const AuthButton = () => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    return (
        <div>
            <button
                className={styles.header__authBtn}
                onClick={() => setIsAuthOpen(true)}
            >Войти</button>
            <AuthModalForm isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        </div>
    )
}

export default AuthButton;

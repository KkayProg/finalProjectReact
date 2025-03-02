import { useState } from "react";
import Logo from "../header/Logo";
import AuthModal from './AuthModal';
import styles from './AuthModal.module.css'


const AuthModalForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => setIsLogin((prev) => !prev);

    return (
        <AuthModal isOpen={isOpen} onClose={onClose}>
            <div className={styles.modalLogo}>
                <Logo color={'black'} />
            </div>
            {!isLogin && (
                <p className={styles.registrationDesr}>Регистрация</p>
            )}
            <div className={styles.authModal}>
                <form>
                    <div className={styles.authModalItem}>
                        <span>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 3.75C21.5523 3.75 22 4.19772 22 4.75V20.7566C22 21.3052 21.5447 21.75 21.0082 21.75H2.9918C2.44405 21.75 2 21.3051 2 20.7566V19.75H20V8.05L12 15.25L2 6.25V4.75C2 4.19772 2.44772 3.75 3 3.75H21ZM8 15.75V17.75H0V15.75H8ZM5 10.75V12.75H0V10.75H5ZM19.5659 5.75H4.43414L12 12.5593L19.5659 5.75Z" fill="black" fillOpacity="0.4" />
                            </svg>
                        </span>
                        <input type="email" placeholder="Электронная почта" />
                    </div>
                    {!isLogin && (
                        <div className={styles.authModalItem}>
                            <span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 22.75C4 18.3317 7.58172 14.75 12 14.75C16.4183 14.75 20 18.3317 20 22.75H18C18 19.4363 15.3137 16.75 12 16.75C8.68629 16.75 6 19.4363 6 22.75H4ZM12 13.75C8.685 13.75 6 11.065 6 7.75C6 4.435 8.685 1.75 12 1.75C15.315 1.75 18 4.435 18 7.75C18 11.065 15.315 13.75 12 13.75ZM12 11.75C14.21 11.75 16 9.96 16 7.75C16 5.54 14.21 3.75 12 3.75C9.79 3.75 8 5.54 8 7.75C8 9.96 9.79 11.75 12 11.75Z" fill="black" fillOpacity="0.4" />
                                </svg>
                            </span>
                            <input type="text" placeholder="Имя" />
                        </div>
                    )}
                    {!isLogin && (
                        <div className={styles.authModalItem}>
                            <span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 22.75C4 18.3317 7.58172 14.75 12 14.75C16.4183 14.75 20 18.3317 20 22.75H18C18 19.4363 15.3137 16.75 12 16.75C8.68629 16.75 6 19.4363 6 22.75H4ZM12 13.75C8.685 13.75 6 11.065 6 7.75C6 4.435 8.685 1.75 12 1.75C15.315 1.75 18 4.435 18 7.75C18 11.065 15.315 13.75 12 13.75ZM12 11.75C14.21 11.75 16 9.96 16 7.75C16 5.54 14.21 3.75 12 3.75C9.79 3.75 8 5.54 8 7.75C8 9.96 9.79 11.75 12 11.75Z" fill="black" fillOpacity="0.4" />
                                </svg>
                            </span>
                            <input type="text" placeholder="Фамилия" />
                        </div>
                    )}
                    <div className={styles.authModalItem}>
                        <span>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.917 13.75C12.441 16.5877 9.973 18.75 7 18.75C3.68629 18.75 1 16.0637 1 12.75C1 9.43629 3.68629 6.75 7 6.75C9.973 6.75 12.441 8.91229 12.917 11.75H23V13.75H21V17.75H19V13.75H17V17.75H15V13.75H12.917ZM7 16.75C9.20914 16.75 11 14.9591 11 12.75C11 10.5409 9.20914 8.75 7 8.75C4.79086 8.75 3 10.5409 3 12.75C3 14.9591 4.79086 16.75 7 16.75Z" fill="black" fillOpacity="0.4" />
                            </svg>
                        </span>
                        <input type="password" placeholder="Пароль" />
                    </div>
                    {!isLogin && (
                        <div className={styles.authModalItem}>
                            <span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.917 13.75C12.441 16.5877 9.973 18.75 7 18.75C3.68629 18.75 1 16.0637 1 12.75C1 9.43629 3.68629 6.75 7 6.75C9.973 6.75 12.441 8.91229 12.917 11.75H23V13.75H21V17.75H19V13.75H17V17.75H15V13.75H12.917ZM7 16.75C9.20914 16.75 11 14.9591 11 12.75C11 10.5409 9.20914 8.75 7 8.75C4.79086 8.75 3 10.5409 3 12.75C3 14.9591 4.79086 16.75 7 16.75Z" fill="black" fillOpacity="0.4" />
                                </svg>
                            </span>
                            <input type="password" placeholder="Подтвердите пароль" />
                        </div>
                    )}
                    <button className={styles.authFormBtn} type="submit">{isLogin ? "Войти" : "Создать аккаунт"}</button>
                </form>
                <p onClick={toggleForm} className={styles.switchText}>
                    {isLogin ? "Регистрация" : "У меня есть пароль"}
                </p>
            </div>
        </AuthModal>
    )
}

export default AuthModalForm;
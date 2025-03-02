import Logo from '../header/Logo';
import AuthModal from './AuthModal';
import styles from './AuthModal.module.css';

const RegistrationSuccess = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <AuthModal isOpen={isOpen} onClose={onClose}>
            <div className={styles.modalLogo}>
                <Logo color={'black'} />
            </div>
        </AuthModal>
    )
}

export default RegistrationSuccess;
import {Navigation} from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks';

import styles from './app-bar.module.css';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header className={styles.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
    )
}
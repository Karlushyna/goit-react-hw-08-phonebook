import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import styles from './login-form.module.css';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTurget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
        form.reset();
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label}>
          Email
          <input
            className={styles.label}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            className={styles.label}
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </label>
  
        <button className={styles.formBtn} type="submit">
          Log In
        </button>
        <div></div>
      </form>
    )
}
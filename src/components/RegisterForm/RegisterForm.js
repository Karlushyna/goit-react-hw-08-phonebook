import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import styles from './register-from.module.css';

export const RegisterForm = () =>{
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTurget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={styles.label}>
        Username
        <input
          className={styles.label}
          type="text"
          name="name"
          placeholder="Enter user name"
        />
      </label>
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
        Register
      </button>
    </form>
    )
}

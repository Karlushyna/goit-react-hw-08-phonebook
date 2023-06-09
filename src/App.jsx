import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Layout } from 'components/Layout/Layout';
import Navbar from 'components/Navbar/Navbar';
import UserRoutes from 'UserRoutes';

import styles from './main.module.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <div className={styles.container}>
              <Navbar/>
              <UserRoutes/>
            </div>
          </BrowserRouter>
        </Layout>
      </PersistGate>
    </Provider>
  );
}
export default App;

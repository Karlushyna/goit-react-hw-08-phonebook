import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import UserRoutes from 'UserRoutes';
import AuthLayout from 'modules/AuthLayout/AuthLayout';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <UserRoutes />
            <NotificationContainer />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
};

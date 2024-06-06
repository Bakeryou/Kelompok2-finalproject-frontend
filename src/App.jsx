import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}

export default App
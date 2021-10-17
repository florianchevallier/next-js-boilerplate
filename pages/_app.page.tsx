import { configureAppStore } from 'app/redux/configureStore';
const store = configureAppStore();
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;

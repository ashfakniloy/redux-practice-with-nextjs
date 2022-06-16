import { Provider } from "react-redux";
import getStore from "../app/store";
// import { wrapper } from "../app/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = getStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

// export default wrapper.withRedux(MyApp);
export default MyApp;

import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./utils/ScrollToTop";
import Routes from "./Routes";
import { StylesProvider, ThemeProvider } from "@material-ui/core";
import { theme } from "./styles/theme";

function App() {
  /*const [items, setItems] = useState();

  useEffect(() => {
    const query = gql`
      query {
        item(id: "611576c63d6100465ed5b4d9") {
          id
          type
          simtlixCode
          isPartOfKit
        }
      }
    `;
    request("http://localhost:3000/inventory/graphql?", query).then((data) =>
      setItems(data)
    );
  }, []);*/

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;

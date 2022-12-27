import { CardContainer } from "./components/CardContainer";
import { Cart } from "./components/Cart";
import { ProductsContextProvider } from "./Contexts/ProductsContext";
import { TotalContextProvider } from "./Contexts/TotalContext";

const App = () => {
  return (
    <ProductsContextProvider>
      <TotalContextProvider>
        <div className="app">
          <CardContainer />
          <Cart />
        </div>
      </TotalContextProvider>
    </ProductsContextProvider>
  );
};

export default App;

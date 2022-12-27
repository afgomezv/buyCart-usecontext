import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsContext";
import { TotalContext } from "../Contexts/TotalContext";
import { BsCart4 } from "react-icons/bs";

const CardContainer = () => {
  const products = useContext(ProductsContext);
  const { total, setTotal } = useContext(TotalContext);

  return (
    <div className="cardContainer">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img className="card-img" src={product.images[0]} alt="imagen" />
            <p className="product-name">{product.title}</p>
            <div className="priceContainer">
              <p className="price">{product.price}</p>
              <button
                onClick={() => {
                  setTotal(total + product.price);
                }}
              >
                <BsCart4 />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { CardContainer };

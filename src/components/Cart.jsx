import { useContext } from "react";
import { TotalContext } from "../Contexts/TotalContext";

import { BsTrashFill } from "react-icons/bs";

const Cart = () => {
  const { total, setTotal } = useContext(TotalContext);
  return (
    <div className="cart-container">
      <div className="cart">
        <p>Total: {total}</p>
        <button
          onClick={() => {
            setTotal(0);
          }}
          className="button-cart"
        >
          <BsTrashFill />
        </button>
      </div>
    </div>
  );
};

export { Cart };

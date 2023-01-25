import { createContext, useState, useEffect } from "react";

const url = "https://api.levbitz.com/ecomm/pdts.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([""]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <DataContext.Provider
      value={{
        products,
        cart,
        total,
        num,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

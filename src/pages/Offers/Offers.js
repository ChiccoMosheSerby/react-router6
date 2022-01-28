import { useState } from "react";
import { Main } from "./Offers.styles";

export default function Offers() {
  const [items] = useState([
    { title: "First Offer", price: 21.99 },
    { title: "Second Offer", price: 34.99 },
  ]);

  return (
    <>
      <h3>Latest Offers</h3>
      <Main className="offers">
        {items.map((item) => (
          <div key={item.title}>
            <img src="https://via.placeholder.com/350x200" alt="product" />
            <h4>{item.title}</h4>
            <p>£{item.price}</p>
          </div>
        ))}
      </Main>
    </>
  );
}

import { Link } from "react-router-dom";
import { useAllProducts } from "../../api/products";

import { Main } from "./Products.styles";
export default function Products() {
  const { data, status } = useAllProducts();
  return (
    <Main>
      {status === "loading" ? (
        <p>Loading Store... </p>
      ) : (
        <div className="products">
          {data?.map((p) => (
            <Link to={`/products/${p.id}`} className="product" key={p.id}>
              <div>{p.title}</div>
              {/* <img src="https://via.placeholder.com/250x150" alt="product" /> */}
              <img src={p.image} alt={p.title} className="galleryImage" />
              <div>
                <span>price: </span>
                {p.price}
              </div>
            </Link>
          ))}
        </div>
      )}
    </Main>
  );
}

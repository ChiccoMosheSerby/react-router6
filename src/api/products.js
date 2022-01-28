import { useQuery } from "react-query";

export const useAllProducts = () => {
  return useQuery(
    ["products"],
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const res = await fetch("https://fakestoreapi.com/products/");
      // const data = await res.json()
      if (!res.ok) {
        const message = `An error has occured: ${res.status}`;
        throw new Error(message);
      }
      return res.json();
    },
    {
      retry: 3,
      staleTime: 200,
    }
  );
};

///////////////////////////////////////////////////////////////////////////////

export const useProduct = (id) => {
  return useQuery(id && ["products", id], () => getProductById(id), {
    retry: 3,
    staleTime: 200,
  });
};
const getProductById = async (productId) => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

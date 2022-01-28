import { useEffect } from "react";
import { useParams, useNavigate, useLocation, Outlet } from "react-router-dom";
import { useProduct } from "../../api/products"
import { BreadCrumbs, Main, Product } from "./ProductPage.styles";

export default function ProductPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  const breadcrumbs = pathName.substring(1);
  const bc = breadcrumbs.split("/");
  bc.pop();
  const { id } = useParams();
  const { data, isError, isLoading, status } = useProduct(id);
  // const {
  //   data,
  //   dataUpdatedAt,
  //   error,
  //   errorUpdatedAt,
  //   failureCount,
  //   isError,
  //   isFetched,
  //   isFetchedAfterMount,
  //   isFetching,
  //   isIdle,
  //   isLoading,
  //   isLoadingError,
  //   isPlaceholderData,
  //   isPreviousData,
  //   isRefetchError,
  //   isRefetching,
  //   isStale,
  //   isSuccess,
  //   refetch,
  //   remove,
  //   status,
  // } = useQuery(id && ["products", id], () => getProductById(id), {
  //   retry: 3,
  //   staleTime: 200,
  // });

  useEffect(() => {
    isError && navigate("/products");
  }, [isError]);
  const goBackHandler = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/");
  };
  const goToOffers = () => {
    navigate("offers");
  };

  return (
    <>
      <BreadCrumbs>
        {bc.map((i, idx) => {
          let fw = "normal";
          if (idx == bc.length - 1) {
            fw = "bold";
          }
          return (
            <span style={{ fontWeight: fw }} key = {idx}>
              {i} {idx !== bc.length - 1 ? "/" : data?.title}
            </span>
          );
        })}
      </BreadCrumbs>
      <Main>
        {isLoading || isError ? (
          <div>{status}</div>
        ) : (
          <Product>
            <div className="image">
              {/* <img src="https://via.placeholder.com/520x460" alt="" /> */}
              <img src={data.image} alt={data.title} className="productImg" />
              <p>
                {data?.rating?.count != 0 &&
                  `${data?.rating?.count} people rated it : ${data?.rating?.rate}`}
              </p>
              <h2>£{data.price}</h2>
            </div>
            <div className="details">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </Product>
        )}
        <button onClick={goToOffers}>SHOW OFFERS</button>
        <Outlet />
      </Main>
      <button onClick={goBackHandler}>Go Back</button>
      <button onClick={goHome}>Go HOME</button>
    </>
  );
}

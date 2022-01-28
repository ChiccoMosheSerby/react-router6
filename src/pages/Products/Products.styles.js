import styled from "styled-components";

export const Main = styled.div`
  max-width: 960px;
  margin: 0 auto;
  .galleryImage {
    width: 100px;
    height: auto;
    max-height: 150px;
    border: solid 2px transparent;
    border-radius: 4px;
    box-sizing: border-box;
    transition: transform 0.2s;
    outline: none;
  }

  .offers,
  .products {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin: auto;
    width: fit-content;
  }

  .product {
    width: 30%;
    border: solid 1px rgba(192, 192, 192, 0.712);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    border-radius: 4px;
    box-sizing: border-box;
    height: 300px;
  }
`;
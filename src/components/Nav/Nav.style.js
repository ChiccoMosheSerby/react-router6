import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 40px;
  width: 100%;
  position: sticky;
  top: 0;

  .navLink {
    text-decoration: none;
    border-bottom: transparent 2px solid;
    transition: border-color 0.3s;
    :hover {
      border-color: rgba(245, 201, 201, 0.37);
    }
    &.Active {
      border-color: red;
    }
  }
`;

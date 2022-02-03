import styled, { css } from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: -120px;
  height: 70px;
  /* transform: translateY(-120px); */
  transition: ease 0.3s;
  ${({ show }) =>
    show &&
    css`
      top: 0px;
    `}
  backdrop-filter: blur(20px);
  border-bottom: 1px solid #e2e2e2;

  .navContent {
    margin: auto;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 960px;
    width: 100%;
    /* border: solid 1px red; */
    .navLink {
      height: 55%;
      width: 60px;
      margin-top: 50%;
      align-self: flex-end;
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
  }
`;

import React from "react";
import styled from "styled-components";

const HeaderInner = styled.div`
  background-color: black;
  color: white;
  font-size: 30px;
  font-weight: 900;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return <HeaderInner>Beom's TodoList</HeaderInner>;
};

export default Header;

import styled from "styled-components";

export const NavBar = styled.nav`
  color: white;
  background-color: brown;
  height: 4rem;
  text-align: center;
  padding-top: 20px;
  font-size: 1.8rem;
  box-shadow: 1px 1px 3px 0.5px darkgray;
`;

const Header = () => {
  return <NavBar>NASA Api app</NavBar>;
};

export default Header;

import styled from "styled-components";

export const StyledFooter = styled.nav`
  color: white;
  background-color: blue;
  height: 4rem;
  text-align: center;
  padding-top: 20px;
  font-size: 1.8rem;
  box-shadow: 1px 1px 3px 0.5px darkgray;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Project created during Wizeline Academy React Testing Bootcamp
    </StyledFooter>
  );
};

export default Footer;

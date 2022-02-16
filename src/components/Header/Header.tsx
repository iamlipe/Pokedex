import React from "react";

// components
import { Toggle } from "../index";
import {
  Container,
  Title,
  ReactangleTopHeader,
  ContainerContentStyle,
  ContainerTitleStyle,
} from "./styles";

// icons
import Logo from "../../assets/icons/logo.svg";

const Header = () => {
  return (
    <Container>
      <ReactangleTopHeader />
      <ContainerContentStyle>
        <ContainerTitleStyle>
          <Logo width={27} />
          <Title>ioasys pokedéx</Title>
        </ContainerTitleStyle>
        <Toggle />
      </ContainerContentStyle>
    </Container>
  );
};

export default Header;

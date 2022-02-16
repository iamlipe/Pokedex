import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerToggle = styled.View`
  width: 39px;
  height: 27px;
  border-radius: 15px;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondaryColor};
`;

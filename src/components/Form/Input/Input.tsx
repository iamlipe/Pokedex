import React, { Dispatch } from "react";

// components
import { Container, ContainerInput, ButtonIcon, Label } from "./styles";

// icons
import Search from "../../../assets/icons/search.svg";
import Close from "../../../assets/icons/close.svg";

interface Props {
  onChangeText: Dispatch<string>;
  value: string;
  placeholder: string;
  handleDelete: () => void;
}

const Input: React.FC<Props> = ({
  onChangeText,
  value,
  placeholder,
  handleDelete,
}) => {
  const renderIconRight = () => (
    <ButtonIcon onPress={handleDelete}>
      {!value ? <Search /> : <Close width={17} />}
    </ButtonIcon>
  );

  return (
    <Container>
      <Label>Buscar</Label>
      <ContainerInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
      {renderIconRight()}
    </Container>
  );
};

export default Input;

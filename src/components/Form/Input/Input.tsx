import React, { useState } from "react";

// components
import { Container, ContainerInput, ButtonIcon, Label } from "./styles";

// icons
import Search from "../../../assets/icons/search.svg";
import Close from "../../../assets/icons/close.svg";

interface Props {
  placeholder: string;
  onSubmitEditing?: any;
  onDeleteSearchInput?: any;
  onEmptyInput?: any;
}

const Input: React.FC<Props> = ({
  placeholder,
  onSubmitEditing = () => null,
  onDeleteSearchInput = () => null,
  onEmptyInput = () => null,
}) => {
  const [inputText, setInputText] = useState("");

  return (
    <Container>
      <Label>Buscar</Label>
      <ContainerInput
        onChangeText={(text) => {
          if (!text.length) {
            onEmptyInput();
          }

          setInputText(text);
        }}
        value={inputText}
        placeholder={placeholder}
        onSubmitEditing={() => onSubmitEditing(inputText)}
      />
      <ButtonIcon
        onPress={() => {
          setInputText("");
          onDeleteSearchInput();
        }}
      >
        {!inputText ? <Search /> : <Close width={17} />}
      </ButtonIcon>
    </Container>
  );
};

export default Input;

import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import {
  Container,
  HeaderContainer,
  PlaceHolderContainer,
  TextInput,
  InputText,
  InputRightContainer,
} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  inputRight?: ReactNode;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
  filled(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, placeholder, inputRight, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
    filled() {
      setIsFilled(true);
    },
    value(val: string) {
      inputValueRef.current.value = val;
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  const handlePress = useCallback(() => {
    inputElementRef.current.focus();
  }, []);

  return (
    <Container
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!error}
      onPress={handlePress}
    >
      <PlaceHolderContainer>
        <HeaderContainer>
          <InputText
            isFocused={isFocused}
            isFilled={isFilled}
            isErrored={!!error}
          >
            {placeholder}
          </InputText>
        </HeaderContainer>

        <TextInput
          ref={inputElementRef}
          keyboardAppearance="dark"
          placeholderTextColor="#666360"
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          isFocused={isFocused}
          isFilled={isFilled}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />
        <InputRightContainer>{inputRight}</InputRightContainer>
      </PlaceHolderContainer>
    </Container>
  );
};

export default forwardRef(Input);

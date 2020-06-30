import { ViewStyle, TextInput } from 'react-native';
import { ReactElement } from 'react';

export interface IAutocompleteItem {
  isPicker: boolean;
  isSelected: boolean;
  onPress(): void;
  value: string;
}

export interface IClearButton {
  onPress(): void;
  icon?: string;
  fullScreen?: boolean;
  style?: ViewStyle;
}

export interface ITextInput {
  caretHidden?: boolean;
  clearButton?: boolean;
  underline?: boolean;
  editable?: boolean;
  errorMessage?: string;
  hintMessage?: string;
  keyboardType?: TextInput['props']['keyboardType'];
  label?: string;
  maxLength?: number;
  multiline?: boolean;
  icon?: string;
  iconStyle?: ViewStyle;
  numberOfLines?: number;
  onBlur?(): void;
  onChangeText(text: string): void;
  onClick?(): void;
  onSubmitEditing?(): void;
  onClear?(): void;
  placeholder?: string;
  render?(renderProps): ReactElement;
  showError?: boolean;
  showHint?: boolean;
  style?: ViewStyle;
  value?: string;
  secureTextEntry?: boolean;
  textContentType?: TextInput['props']['textContentType'];
  customLeftButton?: {
    onPress(): void;
    icon: string;
  };
}

export interface TextInputStyle {
  clearButtonStyle(showLabel: boolean, multiline: boolean | undefined): ViewStyle | TextStyle;
  helperText: ViewStyle;
  inputStyle(showLabel: boolean): ViewStyle;
  leftIconContainerStyle: TextStyle;
  leftIconStyle(isFocused: boolean, showLabel: boolean, multiline: boolean | undefined): TextStyle;
  multilineStyle: ViewStyle;
  textInputAndIconContainer: ViewStyle;
}

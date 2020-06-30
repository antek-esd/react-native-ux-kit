import { ViewStyle } from 'react-native';

export interface IAutocompleteTextInput {
  isEnableScroll: string;
  lettersToStartShowAutocomplete?: number;
  mode?: 'search picker' | 'picker' | 'autocomplete text input';
  onChangeText?(text: string): void;
  onClick?(): void;
  styleAutocomplete: ViewStyle;
  updateState?(a: UpdateStateArg): void;
  value?: string;

  autocompleteData: Array<AutocompleteItemType | string>;

  textInputProps: {
    value?: string;
    onClick?(): void;
    onChangeText(text: string): void;
    onSubmitEditing?(): void;
    icon?: string;
  };
}

type UpdateStateArg = { [x: string]: boolean };

export type AutocompleteItemType = {
  value: string;
  id: number;
};

export interface IAutoCompleteInputStyle {
  inputContainerStyle: ViewStyle;
  listContainerStyle(hasIcon: boolean): ViewStyle;
  listStyle: ViewStyle;
  mainContainer: ViewStyle;
}

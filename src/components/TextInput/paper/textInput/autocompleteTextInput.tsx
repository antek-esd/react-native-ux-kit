// import React, { useState, useRef, useEffect, FC, ReactElement } from 'react';
// import { Colors } from 'react-native-paper';
// import { Platform, Keyboard } from 'react-native';
// import Autocomplete from 'react-native-autocomplete-input';
// import { AutocompleteItem, TextInput } from './components';
// import { IAutocompleteTextInput, IAutoCompleteInputStyle, AutocompleteItemType } from './types.d';

// const ios = Platform.OS === 'ios';

// export const AutocompleteTextInput: FC<IAutocompleteTextInput> = ({
//   autocompleteData,
//   isEnableScroll,
//   lettersToStartShowAutocomplete,
//   mode,
//   styleAutocomplete,
//   textInputProps,
//   updateState,
// }): ReactElement => {
//   let autocomplete = useRef<Autocomplete<string | AutocompleteItemType> | null>(null);
//   const isPicker = mode === 'search picker' || mode === 'picker';
//   const [text, setText] = useState(textInputProps.value);
//   const [isShowResult, setIsShowResult] = useState(false);
//   const [data, setData] = useState(autocompleteData);

//   useEffect(() => {
//     if (mode !== 'picker') {
//       const getFilteredData = () =>
//         autocompleteData.filter((item) => {
//           const i: string = typeof item === 'object' ? item?.value : item;
//           return i.toLowerCase().indexOf(text?.toLowerCase() ?? '') === 0;
//         });
//       const newData =
//         text && text.length >= (lettersToStartShowAutocomplete ?? 1) && data
//           ? getFilteredData()
//           : autocompleteData;
//       setData(newData);
//     }
//   }, [text]);

//   const onBlur = () => {
//     setIsShowResult(false);
//     if (isPicker && textInputProps.value) {
//       setText(textInputProps.value);
//     }
//     if (textInputProps.onSubmitEditing) textInputProps.onSubmitEditing();
//     Keyboard.dismiss();
//   };

//   const onFocus = () => {
//     setIsShowResult(true);
//     if (textInputProps.onClick) textInputProps.onClick();
//   };

//   const onStartShouldSetResponderCapture = () => {
//     if (updateState) updateState({ [isEnableScroll]: false });
//     if (autocomplete?.resultList.props.scrollEventThrottle === 0 && !isEnableScroll) {
//       if (updateState) updateState({ [isEnableScroll]: true });
//     }
//     return true;
//   };

//   const onChangeText = (val: string) => {
//     setText(val);
//     setIsShowResult(true);
//     return !isPicker ? textInputProps.onChangeText(val) : null;
//   };

//   const renderTextInput = () => {
//     return (
//       <TextInput
//         {...textInputProps}
//         onChangeText={onChangeText}
//         onSubmitEditing={onBlur}
//         onClick={onFocus}
//         onBlur={onBlur}
//         style={{ zIndex: -1 }}
//         value={mode === 'search picker' ? text : textInputProps.value}
//         editable={mode !== 'picker'}
//         customLeftButton={{
//           icon: isPicker ? 'angle-down' : undefined,
//           onPress: () => {
//             if (isShowResult) return onBlur();
//             if (mode === 'search picker') setText('');
//             if (mode === 'picker') setTimeout(Keyboard.dismiss);
//             return setIsShowResult(!isShowResult);
//           },
//         }}
//       />
//     );
//   };

//   const renderAutocompleteItem = (itemData: {
//     index: number;
//     item: AutocompleteItemType | string;
//   }) => {
//     const value = typeof itemData.item === 'object' ? itemData.item.value : itemData.item;
//     const id = typeof itemData.item === 'object' ? itemData.item.id : value;
//     return (
//       <AutocompleteItem
//         value={value}
//         isPicker={isPicker}
//         onPress={() => {
//           textInputProps.onChangeText(id.toString());
//           setText(value);
//           setIsShowResult(false);
//           Keyboard.dismiss();
//           onBlur();
//         }}
//         isSelected={isPicker ? value === textInputProps.value : false}
//       />
//     );
//   };

//   return (
//     <Autocomplete
//       data={data}
//       defaultValue={textInputProps.value}
//       hideResults={!isShowResult}
//       inputContainerStyle={styles.inputContainerStyle}
//       keyExtractor={(item, i) => String(i)}
//       listContainerStyle={[styles.listContainerStyle(!!textInputProps.icon), styleAutocomplete]}
//       listStyle={styles.listStyle}
//       onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}
//       ref={(ref) => (autocomplete = ref)}
//       renderItem={renderAutocompleteItem}
//       renderTextInput={renderTextInput}
//     />
//   );
// };

// const defaultProps: IAutocompleteTextInput = {
//   autocompleteData: [],
//   isEnableScroll: '',
//   lettersToStartShowAutocomplete: 1,
//   mode: 'autocomplete text input',
//   onChangeText: () => {},
//   onClick: () => {},
//   styleAutocomplete: {},
//   updateState: () => {},
//   value: undefined,
//   textInputProps: {
//     value: '',
//     onClick: undefined,
//     onChangeText: () => {},
//     onSubmitEditing: undefined,
//     icon: 'times',
//   },
// };

// AutocompleteTextInput.defaultProps = defaultProps;

// const styles: IAutoCompleteInputStyle = {
//   inputContainerStyle: {
//     borderColor: 'transparent',
//   },
//   listContainerStyle: (hasIcon) => ({
//     margin: 8,
//     marginLeft: hasIcon ? (ios ? 30 : 24) : ios ? 0 : -10,
//     maxHeight: 125,
//     position: ios ? 'absolute' : 'relative',
//     marginTop: ios ? 58 : -27,
//     width: hasIcon ? (ios ? '91%' : '96%') : ios ? '100%' : '112%',
//     zIndex: 20,
//   }),
//   listStyle: {
//     borderColor: Colors.grey300,
//     maxHeight: 125,
//   },
//   mainContainer: {
//     width: '100%',
//   },
// };

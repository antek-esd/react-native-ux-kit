import React, { useState, useRef, FC, ReactElement } from 'react';
import { View, Platform, ViewStyle, TextStyle, TextInput as RNTextInput } from 'react-native';
import { HelperText, TextInput as PaperTextInput, ThemeProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ClearButton } from '.';
import { ITextInput } from './types.d';
import DefaultTheme from '../../../../../styles/DefaultTheme';
import { withTheme } from '../../../../../core/theming';
import { styles } from './styles';

const ios = Platform.OS === 'ios';

const Input: FC<ITextInput> = ({
  caretHidden,
  clearButton,
  customLeftButton,
  editable,
  errorMessage,
  hintMessage,
  icon,
  iconStyle,
  keyboardType,
  label,
  maxLength,
  multiline,
  numberOfLines,
  onBlur: onBlurProp,
  onChangeText: onChangeTextProp,
  onClear,
  onClick,
  onSubmitEditing,
  placeholder,
  render,
  secureTextEntry,
  showError,
  showHint,
  style: propStyle,
  textContentType,
  theme,
  underline,
  value,
}): ReactElement => {
  const [isFocused, setIsFocused] = useState(false);
  const myInput = useRef<RNTextInput>(null);

  const onBlur = () => {
    setIsFocused(false);
    if (onBlurProp) onBlurProp();
  };

  const onFocus = () => {
    if (onClick) onClick();
    setIsFocused(true);
  };

  const onChangeText = (text: string) => {
    onChangeTextProp(text);
  };

  const onClearText = () => {
    if (onClear) onClear();
    onChangeTextProp('');
  };

  const renderIcon = () => {
    if (!icon) return null;
    return (
      <View style={styles.leftIconContainerStyle as TextStyle}>
        <Icon
          name={icon}
          style={[styles.leftIconStyle(!!(isFocused || value), !!label, multiline), iconStyle]}
        />
      </View>
    );
  };

  const renderRightButton = () => {
    if (customLeftButton?.icon)
      return (
        <ClearButton
          onPress={() => {
            if (myInput?.current?.focus) myInput.current.focus();
            customLeftButton.onPress();
          }}
          icon={customLeftButton.icon}
          fullScreen={!editable}
        />
      );
    if (!isFocused && clearButton) return null;
    return (
      <ClearButton
        onPress={onClearText}
        style={styles.clearButtonStyle(!!label, multiline) as ViewStyle}
      />
    );
  };

  const renderHelperText = () => {
    return (
      <HelperText
        style={styles.helperText}
        type={showError ? 'error' : ''}
        visible={showError || showHint}
      >
        {showError ? errorMessage : hintMessage}
      </HelperText>
    );
  };

  return (
    <ThemeProvider theme={DefaultTheme}>
      <View style={styles.textInputAndIconContainer}>
        {renderIcon()}
        <View style={{ flex: 1 }}>
          <PaperTextInput
            // theme={{ colors: { primary: 'grey', text: 'grey' } }} // TODO: text color
            dense={multiline && !label && !ios}
            caretHidden={caretHidden}
            editable={editable}
            error={showError}
            keyboardType={keyboardType}
            label={
              ((isFocused || value) && !!label) || (multiline && !isFocused) ? label : undefined
            }
            maxLength={maxLength}
            multiline={multiline}
            numberOfLines={numberOfLines}
            onBlur={onBlur}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onSubmitEditing={onSubmitEditing}
            placeholder={!label || !isFocused ? placeholder : undefined}
            ref={myInput}
            render={render}
            secureTextEntry={secureTextEntry}
            style={[
              styles.inputStyle(isFocused, !!label, multiline ?? false, theme.colors.primary),
              propStyle,
            ]}
            textContentType={textContentType}
            underlineColor={underline ? 'grey' : 'transparent'}
            value={value}
          />
          {renderHelperText()}
        </View>
        {renderRightButton()}
      </View>
    </ThemeProvider>
  );
};

const defaultProps: ITextInput = {
  caretHidden: false,
  clearButton: true,
  customLeftButton: undefined,
  editable: true,
  errorMessage: undefined,
  hintMessage: 'hint',
  icon: undefined,
  iconStyle: {},
  keyboardType: undefined,
  label: undefined,
  maxLength: undefined,
  multiline: false,
  numberOfLines: 1,
  onBlur: () => {},
  onChangeText: () => {},
  onClear: () => {},
  onClick: () => {},
  onSubmitEditing: () => {},
  placeholder: '',
  render: undefined,
  secureTextEntry: false,
  showError: false,
  showHint: false,
  style: {},
  textContentType: undefined,
  underline: true,
  value: undefined,
  theme: DefaultTheme,
};

Input.defaultProps = defaultProps;

export const TextInput = withTheme(Input);

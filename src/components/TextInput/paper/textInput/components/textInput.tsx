import React, { useState, useRef, FC, ReactElement } from 'react';
import { View, Platform, ViewStyle, TextStyle, TextInput as RNTextInput } from 'react-native';
import { HelperText, TextInput as PaperTextInput, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ClearButton } from '.';
import { ITextInput, TextInputStyle } from './types.d';

const ios = Platform.OS === 'ios';

export const TextInput: FC<ITextInput> = ({
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
    <>
      <View style={styles.textInputAndIconContainer}>
        {renderIcon()}
        <View style={{ flex: 1 }}>
          <PaperTextInput
            theme={{ colors: { primary: 'grey', text: 'grey' } }} // TODO: text color
            // dense={multiline && !label}
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
            style={[styles.inputStyle(isFocused, !!label, multiline ?? false), propStyle]}
            textContentType={textContentType}
            underlineColor={underline ? 'grey' : 'transparent'}
            value={value}
          />
          {renderHelperText()}
        </View>
        {renderRightButton()}
      </View>
    </>
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
};

TextInput.defaultProps = defaultProps;

const styles: TextInputStyle = {
  clearButtonStyle: (showLabel, multiline): ViewStyle => {
    const getTop = () => {
      if (multiline && !showLabel) return 25;
      if (!showLabel) return 12;
      return 30;
    };
    return { top: getTop() };
  },
  helperText: {
    top: 0,
  },
  inputStyle: (isFocused, showLabel, multiline) => {
    const getHeight = () => {
      if (multiline) return { height: undefined, minHeight: 45 };
      if (showLabel) return { height: 60 };
      return { height: 50 };
    };
    const borderWidth = isFocused ? 1 : 0;
    return {
      backgroundColor: isFocused ? Colors.grey100 : 'transparent',
      textAlign: 'justify',
      ...getHeight(),
      borderTopWidth: borderWidth,
      borderLeftWidth: borderWidth,
      borderRightWidth: borderWidth,
      borderColor: 'grey',
      paddingRight: 5,
    };
  },
  leftIconContainerStyle: {
    marginLeft: ios ? 30 : 37,
  },
  leftIconStyle: (isFocused, showLabel, multiline) => {
    const getTop = () => {
      if (multiline && !showLabel) return 25;
      if (!showLabel) return 12;
      if (isFocused) return 30;
      return 25;
    };
    return {
      fontSize: 18,
      position: 'absolute',
      right: 15,
      top: getTop(),
      color: isFocused ? 'black' : 'gray', // TODO: color
    };
  },
  textInputAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

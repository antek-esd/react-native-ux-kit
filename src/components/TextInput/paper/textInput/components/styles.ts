import { ViewStyle, Platform } from 'react-native';
import { Colors } from 'react-native-paper';
import { TextInputStyle } from './types.d';

const ios = Platform.OS === 'ios';

export const styles: TextInputStyle = {
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
  inputStyle: (isFocused, showLabel, multiline, color) => {
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
      borderColor: color,
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

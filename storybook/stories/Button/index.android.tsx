import React, { FC, ReactElement } from 'react';
import { TouchableNativeFeedback } from 'react-native';

interface IProps {
  onPress(): void;
}

const Button: FC<IProps> = ({ onPress, children }): ReactElement => {
  return <TouchableNativeFeedback onPress={onPress}>{children}</TouchableNativeFeedback>;
};

Button.defaultProps = {
  onPress: () => {},
};

export default Button;

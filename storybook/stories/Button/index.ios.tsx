import React, { FC, ReactElement } from 'react';
import { TouchableHighlight } from 'react-native';

interface IProps {
  onPress(): void;
}

const Button: FC<IProps> = ({ onPress, children }): ReactElement => {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
};

Button.defaultProps = {
  onPress: () => {},
};

export default Button;

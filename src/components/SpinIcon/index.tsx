import React, { FC, ReactElement, ComponentClass } from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { withTheme } from '../../core/theming';
import DefaultTheme from '../../styles/DefaultTheme';
import { ISpinIcon } from './types.d';

const AnimIcon = Animatable.createAnimatableComponent(
  Icon as ComponentClass<{ style?: any; name?: string; size?: number; color?: string }, any>
);

const Spinner: FC<ISpinIcon> = (props): ReactElement => {
  const { icon, isSpin, onPress, color } = props;

  const spinValue = new Animated.Value(0);

  Animated.timing(spinValue, {
    toValue: 100,
    duration: 120000,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <AnimIcon
        {...props}
        style={{
          transform: isSpin ? [{ rotate: spin }] : undefined,
          alignSelf: 'center',
          padding: 10,
        }}
        size={24}
        name={icon}
        color={color}
      />
    </TouchableOpacity>
  );
};

const defaultProps: ISpinIcon = {
  onPress: undefined,
  icon: 'google',
  isSpin: false,
  color: DefaultTheme.colors.primary,
  theme: DefaultTheme,
};

Spinner.defaultProps = defaultProps;

export const SpinIcon = withTheme(Spinner);

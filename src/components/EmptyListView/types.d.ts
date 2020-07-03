import { ViewStyle } from 'react-native';
import { Theme } from '../../types.d';

export interface IEmptyList {
  text?: string;
  icon?: string;
  image?: string;
  style?: ViewStyle;
  theme: Theme;
}

export type DynamicStyleType = {
  textPosition(color: string): ViewStyle;
};

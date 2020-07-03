import { Theme } from 'src/types.d';

export interface ISpinIcon {
  icon: string;
  isSpin: boolean;
  onPress?(): void;
  color?: string;
  theme: Theme;
}

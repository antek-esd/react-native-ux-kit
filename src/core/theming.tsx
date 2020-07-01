import { createTheming } from '@callstack/react-theme-provider';
import DefaultTheme from '../styles/DefaultTheme';
import { Theme } from '../types.d';

export const { ThemeProvider, withTheme, useTheme } = createTheming<Theme>(DefaultTheme);

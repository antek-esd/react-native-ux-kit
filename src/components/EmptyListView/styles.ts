import { StyleSheet } from 'react-native';
import { DynamicStyleType } from './types.d';

export const styles = StyleSheet.create({
  logo: {
    marginBottom: 20,
  },
  text: {
    color: '#778899',
    fontSize: 20,
    textAlign: 'center',
  },
});

export const dynamicStyles: DynamicStyleType = {
  textPosition: (backgroundColor: string) => ({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
    flex: 1,
  }),
};

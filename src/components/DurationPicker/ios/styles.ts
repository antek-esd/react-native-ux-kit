import { StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'react-native-paper';

export const styles = StyleSheet.create({
  buttonAction: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#006BFF',
    fontSize: 20,
    fontWeight: '500',
  },
  buttonTextCancel: {
    color: '#666',
    fontWeight: '400',
  },
  picker: {
    flex: 1,
  },
  separator: {
    alignSelf: 'center',
    fontSize: 16,
  },
});

type Style = {
  body(theme: 'dark' | 'default'): ViewStyle;
  header(theme: 'dark' | 'default'): ViewStyle;
};

export const dynamicStyles: Style = {
  body: (theme) => ({
    flexDirection: 'row',
    backgroundColor: theme === 'dark' ? Colors.grey900 : 'white',
  }),
  header: (theme) => ({
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme === 'dark' ? Colors.grey600 : Colors.grey300,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'space-between',
    backgroundColor: theme === 'dark' ? Colors.grey900 : 'white',
  }),
};

/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, ReactElement } from 'react';
import { View, StyleSheet } from 'react-native';

const CenterView: FC = ({ children }): ReactElement => {
  return <View style={styles.main}>{children}</View>;
};

CenterView.defaultProps = {
  children: null,
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default CenterView;

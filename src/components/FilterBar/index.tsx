import React, { ReactElement, FC } from 'react';
import { StyleSheet, Platform, Text, Dimensions } from 'react-native';
import { Colors, IconButton } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { IFilterBar } from './types.d';

const { width } = Dimensions.get('window');

export const FilterBar: FC<IFilterBar> = (props): ReactElement | null => {
  const { onCancelButtonPress, text, icon, isVisible } = props;

  return (
    <Animatable.View
      animation={isVisible ? 'slideInDown' : 'fadeOutUp'}
      duration={1000}
      style={styles.containerStyle}
      useNativeDriver
    >
      <Animatable.View style={styles.iconAndTextContainer}>
        <Icon name={icon ?? 'filter'} style={styles.iconStyle} />
        <Text style={styles.textStyle}>{text}</Text>
      </Animatable.View>
      <IconButton
        icon={() => <Icon name="times" />}
        style={{ padding: 10, alignSelf: 'center', marginRight: 0 }}
        onPress={() => {
          if (onCancelButtonPress) setTimeout(onCancelButtonPress, 50);
        }}
      />
    </Animatable.View>
  );
};

const defaultProps: IFilterBar = {
  icon: 'filter',
  isVisible: false,
  onCancelButtonPress: () => {},
  text: 'Filter Bar',
};

FilterBar.defaultProps = defaultProps;

const styles = StyleSheet.create({
  containerStyle: {
    alignContent: 'center',
    backgroundColor: Colors.yellow500,
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 37 : 30,
    justifyContent: 'space-between',
    paddingLeft: 10,
    position: 'absolute',
    top: 0,
    width,
    zIndex: 5,
  },
  iconAndTextContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    maxWidth: '90%',
  },
  iconStyle: {
    alignSelf: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 14,
    marginLeft: 10,
  },
});

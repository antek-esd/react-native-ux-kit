import React, { FC, ReactElement } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { IClearButton } from './types.d';

const ClearButton: FC<IClearButton> = ({ onPress, icon, fullScreen, style }): ReactElement => {
  return (
    <View style={[styles.button(fullScreen ?? false) as ViewStyle, style]}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={icon ?? 'times'}
          size={18}
          color="gray" // TODO: theming
          style={styles.icon as ViewStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const defaultProps: IClearButton = {
  icon: 'times',
  fullScreen: false,
  style: {},
  onPress: () => {},
};

ClearButton.defaultProps = defaultProps;

const styles = {
  button: (fullScreen: boolean) => ({
    right: 2,
    width: fullScreen ? '100%' : '10%',
    position: 'absolute',
    top: 32,
    zIndex: 17,
    height: 30,
  }),
  icon: { alignSelf: 'flex-end' },
};

export { ClearButton };

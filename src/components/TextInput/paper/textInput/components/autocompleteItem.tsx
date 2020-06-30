import React, { ReactElement, FC } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { IAutocompleteItem } from './types.d';

export const AutocompleteItem: FC<IAutocompleteItem> = ({
  isPicker,
  isSelected,
  onPress,
  value,
}): ReactElement => {
  const { containerStyle, textStyle } = styles;
  return (
    <>
      <TouchableOpacity style={containerStyle} onPress={onPress}>
        {isPicker ? (
          <Icon
            name="check"
            style={{
              alignSelf: 'center',
              color: isSelected ? 'black' : 'transparent',
            }}
          />
        ) : (
          false
        )}
        <Text style={textStyle} numberOfLines={1}>
          {value}
        </Text>
      </TouchableOpacity>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: '100%',
    height: 40,
    zIndex: 30,
  },
  textStyle: {
    fontSize: 16,
    height: 40,
    marginLeft: 10,
    paddingTop: 8,
  },
});

import React, { FC } from 'react';
import { Text, Image, SafeAreaView, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { withTheme } from '../../core/theming';
import { IEmptyList } from './types.d';
import DefaultTheme from '../../styles/DefaultTheme';
import { styles, dynamicStyles } from './styles';
import defaultImage from './new.png';

export const EmptyList: FC<IEmptyList> = (props) => {
  const { text, icon, style, theme, image } = props;

  const renderImage = () => {
    if (icon)
      return <Icon name={icon ?? 'plus-square'} size={100} color="gray" style={styles.logo} />;
    if (image) return <Image style={styles.logo} source={image as ImageSourcePropType} />;
    return <Image style={styles.logo} source={defaultImage as ImageSourcePropType} />;
  };

  return (
    <SafeAreaView style={[dynamicStyles.textPosition(theme.colors.background), style]}>
      {renderImage()}
      <Text style={styles.text}>{text}</Text>
    </SafeAreaView>
  );
};

const defaultProps: IEmptyList = {
  icon: undefined,
  theme: DefaultTheme,
  style: {},
  text: 'Empty list',
  image: undefined,
};

EmptyList.defaultProps = defaultProps;

export const EmptyListView = withTheme(EmptyList);

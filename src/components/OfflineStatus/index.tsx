import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Dimensions, ViewStyle, TouchableOpacity } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import * as Animatable from 'react-native-animatable';
import { IOfflineStatus } from './types.d';

const { width, height } = Dimensions.get('window');

const OfflineNotification: FC<IOfflineStatus> = (props): ReactElement | null => {
  const { position, text, disableScreen } = props;
  const [connectionStatus, setConnectionStatus] = useState(true);
  const [textAnimation, setTextAnimation] = useState<string | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log('Connection type', state.isInternetReachable);
      setConnectionStatus(state.isConnected);
    });
    return unsubscribe;
  }, []);

  if (connectionStatus) return null;
  const animation = position === 'top' ? 'slideInDown' : 'slideInUp';
  return (
    <>
      {disableScreen ? (
        <TouchableOpacity
          onPress={() => setTextAnimation(textAnimation ? undefined : 'bounceIn')}
          activeOpacity={0.3}
          style={styles.disableScreenView as ViewStyle}
        />
      ) : null}
      <Animatable.View
        animation={animation}
        duration={2000}
        style={styles.offlineContainer(position ?? 'bottom')}
        useNativeDriver
      >
        <Animatable.Text animation={textAnimation} style={styles.offlineText}>
          {text}
        </Animatable.Text>
      </Animatable.View>
    </>
  );
};

OfflineNotification.defaultProps = {
  position: 'bottom',
  text: 'No internet connection',
  disableScreen: false,
};

const styles = {
  disableScreenView: {
    backgroundColor: 'gray',
    opacity: 0.3,
    width,
    position: 'absolute',
    height,
    zIndex: 20,
  },
  offlineContainer: (position: string): ViewStyle => ({
    alignItems: 'center',
    backgroundColor: '#b52424',
    bottom: position === 'bottom' ? 0 : undefined,
    top: position === 'top' ? 0 : undefined,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    width,
    zIndex: 30,
  }),
  offlineText: {
    color: '#fff',
  },
};

export { OfflineNotification };

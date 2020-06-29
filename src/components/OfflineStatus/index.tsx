import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Text, Dimensions, ViewStyle, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import * as Animatable from 'react-native-animatable';
import { IOfflineStatus } from './types.d';

const { width, height } = Dimensions.get('window');

const OfflineNotification: FC<IOfflineStatus> = (props): ReactElement | null => {
  const { position, text, disableScreen } = props;
  const [connectionStatus, setConnectionStatus] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log('Connection type', state.isInternetReachable);
      setConnectionStatus(state.isConnected);
    });
    return unsubscribe;
  }, []);

  const MiniOfflineSign = () => {
    const animation = position === 'top' ? 'slideInDown' : 'slideInUp';
    return (
      <>
        {disableScreen ? <View style={styles.disableScreenView as ViewStyle} /> : null}
        <Animatable.View
          animation={animation}
          duration={2000}
          style={styles.offlineContainer(position ?? 'bottom')}
          useNativeDriver
        >
          <Text style={styles.offlineText}>{text}</Text>
        </Animatable.View>
      </>
    );
  };

  if (connectionStatus) return null;
  return <MiniOfflineSign />;
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
  }),
  offlineText: {
    color: '#fff',
  },
};

export { OfflineNotification };

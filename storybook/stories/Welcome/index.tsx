/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, ReactElement, FC } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { DurationPicker } from 'react-native-common-ux-kit';

const Welcome: FC = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const [duration, setDuration] = useState({ hour: '0', minute: '0' });

  return (
    <View style={styles.container}>
      <Button
        onPress={() => setIsVisible(!isVisible)}
        title={`${duration.hour}:${duration.minute}`}
      />
      <DurationPicker
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onConfirm={setDuration}
        selectedTime={duration}
      />
    </View>
  );
};

Welcome.defaultProps = {
  showApp: null,
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 18,
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 18,
  },
});

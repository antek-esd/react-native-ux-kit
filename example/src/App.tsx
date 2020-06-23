import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { T, DurationPicker } from 'react-native-ux-kit';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [duration, setDuration] = useState({ hour: '0', minute: '0'});
  console.log(duration.hour);
  return (
    <View style={styles.container}>
      <T />
      <Button onPress={() => setIsVisible(!isVisible)} title={`${duration.hour}:${duration.minute}`} />
      <DurationPicker 
        isVisible={isVisible} 
        setIsVisible={setIsVisible} 
        title={'setTime'} 
        onConfirm={setDuration}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

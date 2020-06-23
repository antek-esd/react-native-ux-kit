[![npm version](https://badge.fury.io/js/react-native-common-ux-kit.svg)](https://badge.fury.io/js/react-native-common-ux-kit)

# react-native-common-ux-kit

Duration picker

## Installation

```sh
npm install react-native-common-ux-kit
```

## Usage

```js
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { DurationPicker } from 'react-native-common-ux-kit';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [duration, setDuration] = useState({ hour: '0', minute: '0'});
  return (
    <View style={styles.container}>
      <Button onPress={() => setIsVisible(!isVisible)} title={`${duration.hour}:${duration.minute}`} />
      <DurationPicker 
        isVisible={isVisible} 
        setIsVisible={setIsVisible} 
        onConfirm={setDuration}
        selectedTime={duration}
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
```

## License

MIT

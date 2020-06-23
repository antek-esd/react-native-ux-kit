# react-native-ux-kit

dur

## Installation

```sh
npm install react-native-ux-kit
```

## Usage

```js
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { DurationPicker } from 'react-native-ux-kit';

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
```

// ...

const result = await UxKit.multiply(3, 7);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

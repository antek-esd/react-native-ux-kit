# Offline bar

<img src="./offline-bar.gif" height="350" >


## Props

| Prop                        | Default | type     | Desc                                                                                                               |
| --------------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| position(optional) |  'bottom'  | 'top \| bottom' | position of notification on the screen  |
| text(optional) | 'No internet connection' | string  | notification text |
| disableScreen(optional) | false | boolean | forbid to tap on the screen

## Usage

```javascript
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { OfflineBar } from 'react-native-common-ux-kit';

export default function App() {
  return (
    <View style={styles.container}>
      <OfflineBar disableScreen/>
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

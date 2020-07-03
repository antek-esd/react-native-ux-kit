# Offline notification

## Props

| Prop                        | Default | type     | Desc                                                                                                               |
| --------------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| icon |  | [FontAwesome5](https://oblador.github.io/react-native-vector-icons/) | name of the icon |
| isSpin | false | boolean  | If `true` animation on |
| onPress(optional) | | function | Callback that is called when the icon was clicked |
| color(optional) | | color | icon color |

## Usage

```javascript
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import  { SpinIcon } from 'react-native-common-ux-kit';

function App() {
  const [isSpin, setIsSpin] = useState(false);
  return (
    <View style={styles.container}>
      <SpinIcon icon='car' isSpin={isSpin} onPress={() => setIsSpin(!isSpin)}/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

```

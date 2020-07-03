# Empty List View

<img src="./empty-list.png" height="350" />

## Props

| Prop                        | Default | type     | Desc                                                                                                               |
| --------------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| icon(optional) | | [FontAwesome5](https://oblador.github.io/react-native-vector-icons/) | name of the icon which will be shown instead of image |
| image(optional) | | image source  | custom image to show |
| style(optional) | | style | custom styles |
| text(optional) | 'Empty list' | string | text to show |

## Usage

```javascript
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import  { EmptyListView } from 'react-native-common-ux-kit';
import { SafeAreaView } from 'react-native-safe-area-context';
function App() {
  const [isFilterBarVisible, setIsFilterBarVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <EmptyListView />
    </SafeAreaView>
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

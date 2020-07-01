import React, { useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import  { DurationPicker, OfflineNotification, TextInput } from 'react-native-common-ux-kit';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [duration, setDuration] = useState({ hour: '0', minute: '0'});
  return (
    <View style={styles.container}>
      <Button onPress={() => setIsVisible(!isVisible)} title={`${duration.hour}:${duration.minute}`} />
      <DurationPicker 
        isVisible={isVisible} 
        setIsVisible={setIsVisible} 
        onConfirm={setDuration}
        selectedTime={duration}
        // darkTheme
      />
      <OfflineNotification position="bottom" disableScreen/>
      <TextInput onChangeText={setText} value={text} icon="pen" placeholder="placeholder" multiline/>
      <TextInput label="input" onChangeText={setText} value={text} icon="book" placeholder="placeholder" underline={false}/>
      <TextInput label="input" placeholder="TextInput" onChangeText={setText} value={text} underline={false}/>
      <TextInput label="input" placeholder="TextInput" onChangeText={setText} value={text} icon="google" multiline/>

    </View>
  );
}

const STORYBOOK_START = false;

export default STORYBOOK_START
? require('../../storybook').default
: App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

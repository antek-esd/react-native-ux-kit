import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import  { DurationPicker, OfflineBar, TextInput, SpinIcon } from 'react-native-common-ux-kit';
import { SafeAreaView } from 'react-native-safe-area-context';
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [duration, setDuration] = useState({ hour: '0', minute: '0'});
  const [isSpin, setIsSpin] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <SpinIcon icon='car' isSpin={isSpin} onPress={() => setIsSpin(!isSpin)}/>
      <OfflineBar position="bottom" disableScreen/>
      <Button onPress={() => setIsVisible(!isVisible)} title={`${duration.hour}:${duration.minute}`} />
      <DurationPicker 
        isVisible={isVisible} 
        setIsVisible={setIsVisible} 
        onConfirm={setDuration}
        selectedTime={duration}
        darkTheme
      />
      <TextInput onChangeText={setText} value={text} icon="pen" placeholder="placeholder" multiline/>
      <TextInput label="input" onChangeText={setText} value={text} icon="book" placeholder="placeholder" underline={false}/>
      <TextInput label="input" placeholder="TextInput" onChangeText={setText} value={text} underline={false}/>
      <TextInput label="input" placeholder="TextInput" onChangeText={setText} value={text} icon="google" multiline/>
    </SafeAreaView>
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
    marginBottom: 12,
  },
});

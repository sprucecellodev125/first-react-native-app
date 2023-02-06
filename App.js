import { StatusBar } from 'expo-status-bar';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
          style={{width: 300, height: 300, borderRadius: 300}}
          source={{uri: 'https://avatars.githubusercontent.com/u/91181632'}}
        />
      <Text style={{fontSize: 30}}>SpruceCello125</Text>
      <Text>Hello world. I created this react native app because I want to learn how to code android app.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

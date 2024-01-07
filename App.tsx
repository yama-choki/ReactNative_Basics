import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'tailwind-rn';

export default function App() {
  return (
    <View style={tw('flex-1 bg-gray-200 justify-center items-center')} >
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

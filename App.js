import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import Home from './src/views/home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <View style={{ flex: 1 }}>
        <Home />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7, 26, 93, 255)',
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
});

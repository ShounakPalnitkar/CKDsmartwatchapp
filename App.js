import React from 'react';
import { WebView } from 'react-native-webview';
import { Platform } from 'react-native';
import { View, StyleSheet } from 'react-native';

export default function App() {
  const uri = Platform.OS === 'android'
    ? 'file:///android_asset/html/index.html'
    : require('./assets/html/index.html'); // iOS

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri }}
        originWhitelist={['*']}
        style={{ flex: 1 }}
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

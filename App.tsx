import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NovaScotiaConciergeNav} from './NovaScotiaConciergeNav';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <NovaScotiaConciergeNav />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NovaScotiaConciergeShell} from './NovaScotiaConcierge/NovaScotiaConciergeApp/NovaScotiaConciergeShell';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NovaScotiaConciergeShell />
    </SafeAreaProvider>
  );
}

export default App;

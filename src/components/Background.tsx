import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  type ImageSourcePropType,
} from 'react-native';

type Props = {
  source: ImageSourcePropType;
  children: React.ReactNode;
  scrollable?: boolean;
};

export function Background({source, children, scrollable = true}: Props) {
  const content = scrollable ? (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    children
  );

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.image}
        resizeMode="cover">
        {content}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
});

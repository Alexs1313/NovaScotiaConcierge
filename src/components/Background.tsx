import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {images} from '../data/assets';

type Props = {
  children: React.ReactNode;
  scrollable?: boolean;
};

export function Background({children, scrollable = true}: Props) {
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
    <View style={styles.shell}>
      <ImageBackground
        source={images.sceneBackdrop}
        style={styles.image}
        resizeMode="cover">
        {content}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: { flex: 1 },
  image: { flex: 1 },
});

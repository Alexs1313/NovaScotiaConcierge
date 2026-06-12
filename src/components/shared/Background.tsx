import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {images} from '../../content/assets';

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
    <View style={styles.backdropRoot}>
      <ImageBackground
        source={images.sceneBackdrop}
        style={styles.backdropBackdropImage}
        resizeMode="cover">
        {content}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backdropRoot: { flex: 1 },
  backdropBackdropImage: { flex: 1 },
});

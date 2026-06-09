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
    <View style={styles.novaScotiaConciergeRoot}>
      <ImageBackground
        source={require('../../../NovaScotiaConciergeAssets/NovaScotiaConciergeBackground.png')}
        style={styles.novaScotiaConciergeImage}
        resizeMode="cover">
        {content}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeRoot: {
    flex: 1,
  },
  novaScotiaConciergeImage: {
    flex: 1,
  },
  novaScotiaConciergeGradient: {
    ...StyleSheet.absoluteFillObject,
  },
});

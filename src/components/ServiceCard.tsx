import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import type {Service} from '../data/services';
import {colors} from '../constants/theme';

type Props = {
  service: Service;
  onBook: () => void;
};

export function ServiceCard({service, onBook}: Props) {
  return (
    <View style={styles.panel}>
      <View style={styles.rowTop}>
        <View style={styles.glyphBox}>
          <Text style={styles.glyph}>{service.icon}</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.headingRow}>
            <Text style={styles.heading}>{service.title}</Text>
            <View style={styles.tag}>
              <Text style={styles.tagLabel}>{service.tag}</Text>
            </View>
          </View>
          <Text style={styles.metaTime}>{service.time}</Text>
        </View>
      </View>
      <Text style={styles.copy}>{service.description}</Text>
      <Pressable style={styles.actionBook} onPress={onBook}>
        <Text style={styles.actionBookLabel}>Book Now</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    gap: 9,
  },
  rowTop: {
    flexDirection: 'row',
    gap: 12,
  },
  glyphBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: colors.panelInner,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glyph: {
    fontSize: 20,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  headingRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
  heading: {
    color: colors.cream,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  tag: {
    backgroundColor: colors.panelInner,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  tagLabel: {
    color: colors.gold,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  metaTime: {
    color: colors.gold,
    fontSize: 11,
  },
  copy: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
  actionBook: {
    backgroundColor: colors.panelInner,
    borderWidth: 1,
    borderColor: colors.selectedItemEdge,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  actionBookLabel: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
  },
});

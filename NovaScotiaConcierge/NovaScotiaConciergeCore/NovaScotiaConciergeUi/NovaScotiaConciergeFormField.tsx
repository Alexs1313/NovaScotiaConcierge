import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from 'react-native';
import {colors} from '../NovaScotiaConciergeTheme/NovaScotiaConciergeColors';

type Props = {
  label: string;
  multiline?: boolean;
} & TextInputProps;

export function FormField({label, multiline, style, ...inputProps}: Props) {
  return (
    <View style={styles.novaScotiaConciergeContainer}>
      <Text style={styles.novaScotiaConciergeLabel}>{label}</Text>
      <TextInput
        style={[styles.novaScotiaConciergeInput, multiline && styles.novaScotiaConciergeInputMultiline, style]}
        placeholderTextColor={colors.inputPlaceholder}
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  novaScotiaConciergeContainer: {
    gap: 5,
    paddingTop: 3,
  },
  novaScotiaConciergeLabel: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  novaScotiaConciergeInput: {
    backgroundColor: colors.inputBg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: colors.cream,
    fontSize: 13,
  },
  novaScotiaConciergeInputMultiline: {
    minHeight: 60,
    paddingTop: 12,
  },
});

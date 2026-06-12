import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from 'react-native';
import {colors} from '../../constants/theme';

type Props = {
  label: string;
  multiline?: boolean;
} & TextInputProps;

export function FormField({label, multiline, style, ...inputProps}: Props) {
  return (
    <View style={styles.formFieldField}>
      <Text style={styles.formFieldLabel}>{label}</Text>
      <TextInput
        style={[styles.formFieldInput, multiline && styles.fieldInputMulti, style]}
        placeholderTextColor={colors.fieldPlaceholder}
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formFieldField: {
    gap: 5,
    paddingTop: 3,
  },
  formFieldLabel: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  formFieldInput: {
    backgroundColor: colors.fieldBg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: colors.cream,
    fontSize: 13,
  },
  fieldInputMulti: {
    minHeight: 60,
    paddingTop: 12,
  },
});

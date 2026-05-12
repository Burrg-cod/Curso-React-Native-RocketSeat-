import {StyleSheet } from 'react-native';
import {colors} from '@/styles/color';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  primaryTitle: {
    fontSize: 16,
    color: colors.green[300],
    fontWeight: 600,
  },
  secondaryTitle: {
    color: colors.gray[400],
    fontSize: 16,
}
});

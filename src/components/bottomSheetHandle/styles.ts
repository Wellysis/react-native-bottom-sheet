import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  indicator: {
    alignSelf: 'center',
    width: (13 * WINDOW_WIDTH) / 100,
    height: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
});

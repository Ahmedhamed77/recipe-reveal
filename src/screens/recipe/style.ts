import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: COLORS.dark,
  },
  imageStyle: {
    width: '100%',
    height: 500,
    borderRadius: 12,
    marginBottom: 12,
  },
  arrowStyle: {
    marginHorizontal: 12,
    marginVertical: 12,
    width: 45,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 45 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 29,
    color: COLORS.dark,
  },
  contentContainer: {
    paddingHorizontal: 12,
  },
  commonText: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 12,
    color: COLORS.dark,
  },
  lastUpdateContainer: {
    flexDirection: 'row',
  },
  lastUpdateText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.dark,
  },
  commonSpace: {
    marginHorizontal: 12,
  },
});

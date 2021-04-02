// Dependencies
import { StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

const styles = makeStyles((theme: any) => ({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    zIndex: 3,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
}));

export default styles;

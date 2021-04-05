// Dependencies
import { makeStyles } from 'react-native-elements';

const styles = makeStyles((theme: any) => ({
  container: {
    marginVertical: 8,
  },
  iconContainer: {
    alignItems: 'flex-end',
    bottom: 24,
    flex: 1,
    position: 'absolute',
    width: '70%',
  },
  icon: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    elevation: 4,
    padding: 4,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
  },
}));

export default styles;

// Dependencies
import { makeStyles } from 'react-native-elements';

const styles = makeStyles((theme: any) => ({
  scrollContainer: {
    backgroundColor: theme.colors.white,
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.grey1,
    paddingVertical: 8,
    textAlign: 'center',
  },
}));

export default styles;

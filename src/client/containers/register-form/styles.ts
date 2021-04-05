// Dependencies
import { makeStyles } from 'react-native-elements';

const styles = makeStyles((theme: any) => ({
  container: {
    marginVertical: 8,
  },
  textErrorContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  textError: {
    color: theme.colors.error,
  },
}));

export default styles;

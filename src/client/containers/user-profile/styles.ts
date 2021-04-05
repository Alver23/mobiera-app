// Dependencies
import { makeStyles } from 'react-native-elements';

const styles = makeStyles((theme: any) => ({
  avatarContainer: {
    borderColor: theme.colors.white,
    borderWidth: 2,
  },
  backgroundBlack: {
    backgroundColor: theme.colors.black,
  },
  cardContainer: {
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  cardUserInfoContainer: {
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
  },
  text: {
    color: theme.colors.black,
    marginVertical: 12,
  },
  buttonContainer: {
    marginVertical: 12,
  },
}));

export default styles;

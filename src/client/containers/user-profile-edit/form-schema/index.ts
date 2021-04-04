// Dependencies
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])|(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_])|(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])).*/,
      'password must contain at least 3 of the following 4 types of characters: (a-z)(A-Z)(0-9)(!@#$%^&*)'
    )
    .min(4)
    .required(),
});

export default schema;

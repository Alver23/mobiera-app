// Dependencies
import React, { ReactElement, FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Button, Input, Icon } from 'react-native-elements';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

// Interfaces
import { IFormData } from './interfaces';

// Form Schema
import formSchema from './form-schema';

// Hooks
import useAuthentication from './hooks';

// Styles
import useStyles from './styles';

const LoginForm: FC = (): ReactElement => {
  const [showPassword, setShowPassword] = React.useState<boolean>(true);
  const styles = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(formSchema),
  });

  const [error, onSubmit] = useAuthentication();

  const passwordIcon: any = {
    true: 'eye',
    false: 'eye-slash',
  };

  const onChangeSetPassword = React.useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            autoCapitalize="none"
            textContentType="emailAddress"
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors?.email?.message}
            rightIcon={<Icon name="email" type="material" size={24} />}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            secureTextEntry={showPassword}
            textContentType="password"
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors?.password?.message}
            rightIcon={
              <TouchableOpacity onPress={onChangeSetPassword}>
                <Icon
                  name={passwordIcon[`${showPassword}`]}
                  type="font-awesome"
                  size={24}
                />
              </TouchableOpacity>
            }
          />
        )}
        name="password"
      />
      {error && (
        <View style={styles.textErrorContainer}>
          <Text style={styles.textError}>
            The user does not is Unauthorized
          </Text>
        </View>
      )}
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default LoginForm;

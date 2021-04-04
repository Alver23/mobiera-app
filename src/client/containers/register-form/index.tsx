// Dependencies
import React, { ReactElement, FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Input, Icon, Text } from 'react-native-elements';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

// Hooks
import usePasswordState from '@mobiera/hooks/password-state';

// Interfaces
import { IFormData } from './interfaces';

// Form Schema
import formSchema from './form-schema';

// Hooks
import useSignUp from './hooks';

// Styles
import useStyles from './styles';

const RegisterForm: FC = (): ReactElement => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    resolver: yupResolver(formSchema),
  });
  const styles = useStyles();

  const [passwordIcon, showPassword, onChangeSetPassword] = usePasswordState();
  const [message, onSubmit] = useSignUp(reset);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            autoCapitalize="words"
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors?.name?.message}
            rightIcon={<Icon name="user-o" type="font-awesome" size={24} />}
          />
        )}
        name="name"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            autoCapitalize="none"
            placeholder="Email"
            keyboardType="email-address"
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
                <Icon name={passwordIcon} type="font-awesome" size={24} />
              </TouchableOpacity>
            }
          />
        )}
        name="password"
      />
      {message && (
        <View style={styles.textErrorContainer}>
          <Text style={styles.textError}>{message}</Text>
        </View>
      )}
      <Button title="Continue" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default RegisterForm;

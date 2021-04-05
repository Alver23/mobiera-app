// Dependencies
import React, { ReactElement, FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

// Hooks
import usePasswordState from '@mobiera/hooks/password-state';

// Interfaces
import { IFormData, IUserFormProps } from './interfaces';

const UserForm: FC<IUserFormProps> = ({
  children,
  defaultValues = {},
  formSchema,
  onSubmit,
}: IUserFormProps): ReactElement => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    defaultValues,
    resolver: yupResolver(formSchema),
  });

  const submitForm = React.useCallback(
    (values: IFormData) => {
      onSubmit(values);
      reset();
    },
    [onSubmit, reset]
  );

  const [passwordIcon, showPassword, onChangeSetPassword] = usePasswordState();

  return (
    <>
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
      {children}
      <Button title="Continue" onPress={handleSubmit(submitForm)} />
    </>
  );
};

export default UserForm;

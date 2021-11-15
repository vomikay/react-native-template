import {client} from 'core/services/api';
import {SignInRequestData, SignInResponseData} from 'features/auth/types';

class AuthRepository {
  public signIn = async (data: SignInRequestData) => {
    const response = await client.post<SignInResponseData>(
      '/auth/signIn',
      data,
    );
    return response.data;
  };
}

export const authRepository = Object.freeze(new AuthRepository());

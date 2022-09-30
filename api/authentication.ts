import { flaqAxios } from './config/axios';
import { AxiosError } from 'axios';

export enum Status {
  Success = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

export enum FailedAuthenticationReason {
  Unkown,
  DeactivatedUser, // The user exists, but is no longer active.
  InvalidCode, // The code provided is invalid.
}

export type AuthenticationFailure = {
  reason: FailedAuthenticationReason;
  message: string;
};

export enum Roles {
  ADMIN = 'Admin',
  CREATOR = 'Creator',
}
export interface AuthData {
  role: Roles | undefined;
  accessToken: string | undefined;
  refreshToken: string | undefined;
}
export type roles = 'Admin' | 'Creator' | undefined;

export type Response =
  | { status: Status.Success; data: AuthData }
  | { status: Status.BadRequest; data: AuthenticationFailure }
  | { status: Status.Unauthorized; data: AuthenticationFailure };

export const verifyDiscordAuth = async (code: string): Promise<Response> => {
  try {
    const response = await flaqAxios().post<AuthData>(`/auth/discord-auth`, {
      code,
    });

    return { status: Status.Success, data: response.data };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 400) {
        return {
          status: Status.BadRequest,
          data: {
            reason: FailedAuthenticationReason.InvalidCode,
            message: 'Invalid code',
          },
        };
      }
    }
    return {
      status: Status.Unauthorized,
      data: {
        reason: FailedAuthenticationReason.Unkown,
        message: 'Unknown error occured.',
      },
    };
  }
};

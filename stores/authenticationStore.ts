<<<<<<< HEAD
import create from "zustand";
import { persist } from "zustand/middleware";
import { AuthData } from "../api/authentication";
import { isDevelopementEnvironment } from "../utils/devDetect";
import getConfig from "next/config";
=======
import create, { StateCreator } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { AuthData, Status, verifyDiscordAuth } from '../api/authentication';
import { isDevelopementEnvironment } from '../utils/devDetect';
import getConfig from 'next/config';
>>>>>>> d04b438 (prettier setup and formating with it)

const { publicRuntimeConfig } = getConfig();

export interface AuthState {
  isLoggedIn: boolean;
  authData: AuthData;
  errorMessage: string | undefined;
}

export interface AuthActions {
  login: () => void;
<<<<<<< HEAD
=======
  // verifyDiscordAuth: (code: string) => Promise<void>;
>>>>>>> d04b438 (prettier setup and formating with it)
  setAuthState: (authData: AuthData) => void;
  setErrorMessage: (message: string) => void;
  logout: () => void;
  reset: () => void;
}

const initialAuthState: AuthState = {
  isLoggedIn: false,
  authData: {
    role: undefined,
    accessToken: undefined,
    refreshToken: undefined,
  },
  errorMessage: undefined,
};

export const useAuthenticationStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      ...initialAuthState,

      login: () => {
        const location = window.location;
        if (isDevelopementEnvironment()) {
          location.assign(publicRuntimeConfig.dev_discord_url);
        } else {
          location.replace(publicRuntimeConfig.prod_discord_url);
        }
      },

      setAuthState: (authData: AuthData) => {
        set({ isLoggedIn: true, authData: authData });
      },

      setErrorMessage: (message: string) => {
        set({ errorMessage: message });
      },

      logout: () => {
        set(initialAuthState);
      },

      reset: () => {
        set(initialAuthState);
      },
    }),
    {
<<<<<<< HEAD
      name: "authentication",
=======
      name: 'authentication',
>>>>>>> d04b438 (prettier setup and formating with it)
    }
  )
);

export default useAuthenticationStore;

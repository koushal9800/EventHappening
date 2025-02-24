import { CompositeScreenProps } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type AppNavigationProps = {
  Onboarding: undefined;
  Login: undefined;
};

export type BottomTabRoutes = {
  Home: undefined;
  Booking: undefined;
  Search: undefined;
  Wishlist: undefined;
  Account: undefined;
};

export type AppProps<T extends keyof AppNavigationProps> = 
  StackScreenProps<AppNavigationProps, T>;

export type BottomTabNavigationProps<T extends keyof BottomTabRoutes> = 
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabRoutes, T>,
    AppProps<keyof AppNavigationProps>
  >;

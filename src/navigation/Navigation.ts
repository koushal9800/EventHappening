import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type AppNavigationProps = {
    Onboarding:undefined;
    Login: undefined
}

export type AppProps<T extends keyof AppNavigationProps> =
  StackScreenProps<AppNavigationProps, T>;
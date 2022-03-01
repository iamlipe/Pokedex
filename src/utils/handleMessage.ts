import Snackbar from "react-native-snackbar";

export function handleMessage(message: string) {
  Snackbar.show({
    text: message,
  });
}

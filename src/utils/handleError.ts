import Snackbar from "react-native-snackbar";

interface IError extends Error {
  response?: {
    data?: {
      messageString?: string;
    };
  };
}

export function handleError(err: IError): void {
  Snackbar.show({
    text:
      err?.response?.data?.messageString ||
      err?.message ||
      "Houve um imprevisto, tente novamente mais tarde",
  });
}

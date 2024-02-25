import React from "react";
import Navigation from "./src/navigation/Navigation";
import { NativeWindStyleSheet } from "nativewind";
import { Provider } from "react-redux";
import store from "./src/store";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

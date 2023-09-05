import React from "react";
import { Button } from "@react-native-material/core";
import { DisplayAnImage } from "./Components/Image.tsx";
import { SearchBar } from "./src/screen/searchBar.tsx";

const App = () => (
  DisplayAnImage(),
  SearchBar()
);

export default App;
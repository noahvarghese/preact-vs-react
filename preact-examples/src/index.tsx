import * as React from "preact";

import { App } from "./App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Container 'root' not found.");
}

React.render(<App />, container);

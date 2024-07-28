import * as React from "preact";

import { BadSetState } from "./BadSetState";
import { ExpectedOrder } from "./ExpectedOrder";

export const App = (): React.JSX.Element => {
  return (
    <>
      <BadSetState />
      <ExpectedOrder />
    </>
  );
};

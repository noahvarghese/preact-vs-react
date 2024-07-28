import * as React from "react";

import { BadSetState } from "./BadSetState";
import { ExpectedOrder } from "./ExpectedOrder";

export const App = (): JSX.Element => {
  return (
    <>
      <BadSetState />
      <ExpectedOrder />
    </>
  );
};

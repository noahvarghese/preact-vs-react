import * as React from "preact";
import { useEffect } from "preact/hooks";

export const ExpectedOrder = (): React.JSX.Element => {
  useEffect(() => console.log("ExpectedOrder"), []);

  return <Parent />;
};

const Parent = (): React.JSX.Element => {
  useEffect(() => console.log("ExpectedOrder -> Parent"), []);

  return <Child />;
};

const Child = (): React.JSX.Element => {
  useEffect(() => console.log("ExpectedOrder -> Parent -> Child"), []);

  return <p>Expected order</p>;
};

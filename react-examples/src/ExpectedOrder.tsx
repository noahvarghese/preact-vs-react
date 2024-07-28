import * as React from "react";

export const ExpectedOrder = (): JSX.Element => {
  React.useEffect(() => console.log("ExpectedOrder"), []);

  return <Parent />;
};

const Parent = (): JSX.Element => {
  React.useEffect(() => console.log("ExpectedOrder -> Parent"), []);

  return <Child />;
};

const Child = (): JSX.Element => {
  React.useEffect(() => console.log("ExpectedOrder -> Parent -> Child"), []);

  return <p>Expected order</p>;
};

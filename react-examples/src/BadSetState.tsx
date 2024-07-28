import * as React from "react";

export const BadSetState = (): JSX.Element => {
  const [state, setState] = React.useState("");

  React.useEffect(() => console.log("BadSetState"), []);

  return <Parent setState={setState} />;
};

const Parent = ({
  setState,
}: {
  setState: (value: string) => void;
}): JSX.Element => {
  React.useMemo(() => setState("test"), []);

  React.useEffect(() => console.log("BadSetState -> Parent"), []);

  return <Child />;
};

const Child = (): JSX.Element => {
  React.useEffect(() => console.log("BadSetState -> Parent -> Child"), []);

  return <p>Bad set state</p>;
};

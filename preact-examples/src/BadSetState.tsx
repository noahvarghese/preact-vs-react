import * as React from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";

export const BadSetState = (): React.JSX.Element => {
  const [state, setState] = useState("");

  useEffect(() => console.log("BadSetState"), []);

  return <Parent setState={setState} />;
};

const Parent = ({
  setState,
}: {
  setState: (value: string) => void;
}): React.JSX.Element => {
  useMemo(() => setState("test"), []);

  useEffect(() => console.log("BadSetState -> Parent"), []);

  return <Child />;
};

const Child = (): React.JSX.Element => {
  useEffect(() => console.log("BadSetState -> Parent -> Child"), []);

  return <p>Bad set state</p>;
};

import React, { useState, useCallback, memo } from "react";

const CounterHOC = (OriginalComponent) => {
  const WithState = memo((props) => {
    const [count, setCount] = useState(0);

    const inc = useCallback(() => {
      setCount((prev) => prev + 1);
    }, [setCount]);

    const dec = useCallback(() => {
      setCount((prev) => prev - 1);
    }, [setCount]);

    const addedProps = { ...props, count, inc, dec };
    return <OriginalComponent {...addedProps} />;
  });

  return WithState;
};

export default CounterHOC;

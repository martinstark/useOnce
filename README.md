# useOnce

Tiny typescript hook for running a segment of code once, immediately before the render is committed to the screen.

It is the rough equivalent of `componentWillMount` using React hooks.

See [explanation]().

_Note: this is not necessarily a recommended pattern, but it is a question that comes up every so often._

# Usage

```javascript
// Without return value

const runBeforeFirstRender = () => {};

const Component = () => {
  useOnce(runBeforeFirstRender);

  return <></>;
};

// With return value

const runBeforeFirstRender = () => "result";

const Component = () => {
  const r = useOnce(runBeforeFirstRender);

  return <>{r}</>;
};
```

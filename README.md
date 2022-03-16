#Board

## Installation

```
nmp i  board-lukuku
```

## import

```
import dynamic from "next/dynamic";
const DynamicComponent = dynamic(
  () => import("board-lukuku/lib/esm/index").then((mod) => mod.RichEditor),
  { ssr: false, loading: () => <p>...</p> }
);

```

## Usages

```
 <DynamicComponent handleContent={handleEditorContent} />
```

## Props

```
 const handleEditorContent = (content: any) => {
    console.log("content", content);
  };
```

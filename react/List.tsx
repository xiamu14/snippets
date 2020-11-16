// @ts-ignore
import React from "react";

interface Props<T> {
  data: T[] | null;
  item: (item: T, index: number) => React.ReactNode;
}

export default function List<T>(props: Props<T>) {
  const { data, item } = props;
  return (
    <div>
      {data
        ? data.map((value, index) => {
            return item(value, index);
          })
        : null}
    </div>
  );
}

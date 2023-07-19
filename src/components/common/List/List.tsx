import React from "react";

type ListPropsType<T> = {
  items: Array<T>,
  renderItem: (item: T) => React.ReactNode
  className?: string
}

const List = <T extends { id: string }>({items, renderItem, className}: ListPropsType<T>) => {
  return (
    <ul className={className ? className : ""}>
      {items.map(item => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default List;
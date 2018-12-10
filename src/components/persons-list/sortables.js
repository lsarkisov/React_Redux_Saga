import React from "react";
import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from "react-sortable-hoc";

const DragHandle = SortableHandle(() => <span className="person__list--dragbar" />);

const SortableItem = SortableElement(({ value, toggle }) => {
  return (
    <dl className="person__list">
      <dt className="person__list--name" onClick={() => toggle(value)}>
        {value.name}
      </dt>
      <dd className="person__list--org">{value.org_name}</dd>
      <dd className="person__list--avatar" onClick={() => toggle(value)}>
        <img src="/img/avatar.png" alt="" />
      </dd>
      <dd>
        <DragHandle />
      </dd>
    </dl>
  );
});

const SortableList = SortableContainer(
  ({ persons, current, delta, toggle, onFiltering }) => {
    return (
      <div>
        {persons
          .filter((person, index) => onFiltering(index, current, delta))
          .map((value, index) => (
            <SortableItem
              key={`value.firstName-${index}`}
              index={index}
              value={value}
              current={current}
              delta={delta}
              toggle={toggle}
              onFiltering={onFiltering}
            />
          ))}
      </div>
    );
  }
);

export default SortableList;

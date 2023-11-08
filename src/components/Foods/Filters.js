import React from "react";
import { Filter } from "../common";
import { useFoodContext } from "../../contexts";
export const Filters = () => {
const {filterVegan,filterAll,filterMeat } = useFoodContext();

  return (
    <div className="filters flex gap-8 mb-16">
      <Filter onClick={() => filterAll()} text="All"  icon="fluent-emoji:shallow-pan-of-food"/>
      <Filter onClick={() => filterVegan()} text="Vegan" icon="fluent-emoji:broccoli" />
      <Filter onClick={() => filterMeat()} text="Meat" icon="fluent-emoji:cut-of-meat"/>
    </div>
  );
};

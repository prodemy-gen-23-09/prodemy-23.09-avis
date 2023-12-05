import React from "react";
import FilterComponents from "./FilterComponents";
import SortButton from "./button";

function Sidebar({onPriceFilter,onDateFilter,onSortByDate}) {
    return (
        <aside className="sidebar">
            <FilterComponents onPriceFilter ={onPriceFilter} 
            onDateFilter={onDateFilter}/>
            <SortButton onClick={onSortByDate}/>
        </aside>
    )
}

export default Sidebar;
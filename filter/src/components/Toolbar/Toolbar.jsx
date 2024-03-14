import React from 'react'

export const Toolbar = ({filters, selected, onSelectFilter}) => {

  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <li key={filter}>
          <button onClick={onSelectFilter(filter)} className={filter == selected? "active" : "nonActive"}>{filter}</button>
        </li>
      ))}
    </div>
  )
}

import React from 'react'
import FilterContainer from '../components/FilterContainer'
import CollectibleContainer from '../components/CollectibleContainer'
import '../styles/Display.css'

const Display = () => {
  return (
    <div className="display-page">
      <div className="filter-container">
        <FilterContainer />
      </div>

      <div className="display-container">
        <CollectibleContainer />
      </div>
    </div>
  )
}

export default Display;
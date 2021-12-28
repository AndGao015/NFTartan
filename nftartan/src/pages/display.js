import React from 'react'
import FilterContainer from '../components/FilterContainer'
import CollectibleContainer from '../components/CollectibleContainer'
import '../styles/Display.css'

const Display = () => {
  return (
    <div class="display-page">
      <div class="filter-container">
        <FilterContainer />
      </div>
      <div class="display-container">
      </div>
    </div>
  )
}

export default Display;
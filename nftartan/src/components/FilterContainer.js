import React, { useState } from 'react'
import DropFilter from '../components/DropFilter'
import ViewSwitch from '../components/ViewSwitch'
import '../styles/FilterContainer.css'

const FilterContainer = () => {
  // numCollectibles, numSelected to be replaced w/ returned backend info
  // from ID's NFT wallet
  const [numCollectibles, setNumCollect] = useState(42069);
  const [numSelected, setNumSelect] = useState(1337);

  const handleShareBtnClick = () => {
    alert("Under construction...")
  }

  const handleDropdownBtnClick = () => {
    alert("Under construction...")
  }

  return (
    <div className="flex-container">
      <div className="flex-child left">

        <div className="collectible-text">
          {numCollectibles} Collectibles ({numSelected} Selected)
        </div>

        {/* Create dropdown sort menus here */}
        <div className="flex-dropdown-container">
          <div className="flex-child-dropdown">
            <DropFilter text="Recent"/>
          </div>
          <div className="flex-child-dropdown">
            <DropFilter text="All"/>
          </div>
        </div>     

      </div>

      <div className="flex-child right">

        <button onClick={() => handleShareBtnClick()} className="share-btn">
          Create a Shareable Link!
        </button>

        {/* Create toggleable NFT wallet buttons here */}
        <div className="flex-switch-container">
          <ViewSwitch />
        </div>
      </div>
    </div>
  )
}

export default FilterContainer;
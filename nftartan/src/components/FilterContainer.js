import React, { useState } from 'react'
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
      <div className="flex-child collectible">

        <div className="collectible-text">
          {numCollectibles} Collectibles ({numSelected} Selected)
        </div>

        {/* Create dropdown sort menus here */}
        <div className="dropdown-filter">
          <button onClick={() => handleDropdownBtnClick()}>
            Recent
          </button>
        </div>     
      </div>

      <div className="flex-child btn">

        <button onClick={() => handleShareBtnClick()}className="share-btn">
          Create a Shareable Link!
        </button>

        {/* Create toggleable NFT wallet buttons here */}

      </div>
    </div>
  )
}

export default FilterContainer;
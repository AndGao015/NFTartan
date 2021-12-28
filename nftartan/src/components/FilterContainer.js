import React from 'react'
import '../styles/FilterContainer.css'

const FilterContainer = () => {
  // numCollectibles, numSelected to be replaced w/ returned backend info
  // from ID's NFT wallet
  const numCollectibles = 42069;
  const numSelected = 0;
  return (
    <div className="flex-container">
      <div className="flex-child collectible">
        <div className="collectible-text">
          {numCollectibles} Collectibles ({numSelected} Selected)
        </div>
      </div>

      <div className="flex-child btn">
        <button className="share-btn">
          Create a Shareable Link!
        </button>
      </div>
    </div>
  )
}

export default FilterContainer;
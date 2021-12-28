import React from 'react'
import '../styles/FilterContainer.css'

const FilterContainer = () => {
  // numCollectibles, numSelected to be replaced w/ returned backend info
  // from ID's NFT wallet
  const numCollectibles = 42069;
  const numSelected = 0;
  return (
    <div>
      <div class="collectible-text">
        {numCollectibles} Collectibles ({numSelected} Selected)
      </div>
    </div>
  )
}

export default FilterContainer;
import React from 'react'
import CardComponent from './CardComponent'
function CardContainer(props) {
  const cardList = props?.cardData?.jdList
  return (
    <div className='cardContainer'>
    {cardList?.map( cardItemData => {
      let uniqueId = cardItemData?.jdUid
      return <CardComponent {...cardItemData} key={uniqueId}/>
    })}
    </div>
  )
}

export default CardContainer
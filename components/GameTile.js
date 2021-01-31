import React from 'react';
import FlippableCard from './FlippableCard';

const GameTile = ({
  rowNumber,
  columnNumber,
  value,
  selected,
  locked,
  onTilePressed,
  totalColumns
}) => {

  const handleTilePressed = () => {
    onTilePressed({
      rowNumber: rowNumber,
      columnNumber: columnNumber,
      value: value,
      selected: selected,
      locked: locked 
    })
  }

  const tileStyle = {
    height: 300 / totalColumns,
    width: 300 / totalColumns,
    borderRadius: '10%',

    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 1,
  }

  return (
    <FlippableCard
      value={value}
      onTilePressed={handleTilePressed}
      totalColumns={totalColumns}
      cardStyle={tileStyle}
      flipped={locked || selected }
    />
  );
}

export default GameTile;

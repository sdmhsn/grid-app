import React from 'react';
import AddTileButton from '../AddTileButton';
import Tile from '../Tile';
import { useSelector, useDispatch } from 'react-redux';
import { addTileWithChecking, removeTile } from '../../features/Grid/action';

const colors = ['red', 'blue', 'pink', 'yellow', 'gray'];

const Grid = () => {
  let gridTiles = useSelector((state) => state.grid); // state.grid mengacu pada property 'grid' dengan value 'reducer' {grid: reducer}, yang terdapat dalam store.js
  let dispatch = useDispatch();

// console.log(gridTiles);
// console.log(addTile)

  return (
    <div>
      <div style={{ maxWidth: 400, overflow: 'hidden' }}>
        {gridTiles.map((tile, index) => {
          return <Tile {...tile} key={index} onDoubleClick={() => dispatch(removeTile(tile.id))} />;
        })}
      </div>
      <br />
      <div>
        {colors.map((color) => {
          return <AddTileButton key={color} color={color} onClick={() => dispatch(addTileWithChecking(color))} />;
        })}
      </div>
    </div>
  );
};

export default Grid;

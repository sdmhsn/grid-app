import { ADD_TILE, REMOVE_TILE } from "./constants";

const addTile = (color) => {
  return {
    type: ADD_TILE,
    color,
    created_at: Date.now(),
  };
};

const removeTile = (id) => {
  return {
    type: REMOVE_TILE,
    id,
  };
};

const addTileWithChecking = (color) => {
  return (dispatch, getState) => {
    if (getState().grid.length < 5) {
      dispatch(addTile(color));
    }
  }
};

export { addTile, removeTile, addTileWithChecking };

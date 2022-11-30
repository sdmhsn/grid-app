import { ADD_TILE, REMOVE_TILE } from "./constants";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // --------------------------------------------
    case ADD_TILE:
      return [
        ...state,
        { id: state.length + 1, color: action.color }
      ];
    // --------------------------------------------
    case REMOVE_TILE:
      const removeTile = state.filter((tile) => tile.id !== action.id);
      return removeTile;
    // --------------------------------------------
    
    default:
      return state;
  }
};

export default reducer;

// case 'ADD_TILE':
//       const nextId = state.length + 1;
//       const newTile = {
//         id: nextId,
//         color: action.color,
//       };
//       return [...state, newTile];

// case 'REMOVE_TILE':
//      return state.filter(tile => tile.id !== action.id);
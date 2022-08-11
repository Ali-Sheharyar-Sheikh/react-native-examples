// Actions types
export const ADD_ITEM = 'ADD_ITEM';
export const EMPTY_LIST = 'EMPTY_LIST';

// Actions
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});
export const emptyList = () => ({
  type: EMPTY_LIST,
  payload: '',
});

// Initial State
const initialState = {
  itemList: [],
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        itemList: state.itemList.concat({
          id: Math.random(),
          name: action.payload,
        }),
      };
    case EMPTY_LIST:
      return {
        ...state,
        itemList: [],
      };
    default:
      return state;
  }
};
export default rootReducer;

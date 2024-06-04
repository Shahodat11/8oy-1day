const initialState = {
  items: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_LIKE':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_FROM_LIKE':
      return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
    default:
      return state;
  }
};

export default likeReducer;

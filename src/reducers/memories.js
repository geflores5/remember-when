const memoriesInitialState = [];

export default (state = memoriesInitialState, action) => {
  switch (action.type) {
    case 'ADD_MEMORY':
      return [...state, action.memory];
    case 'REMOVE_MEMORY':
      return state.filter(({ id }) => id !== action.memory.id);
    case 'EDIT_MEMORY':
      return state.map((memory) => {
        if (memory.id === action.memory.id) {
          return {
            ...memory,
            ...action.memory,
          };
        }
        return memory;
      });
    case 'ADD_MEMORY_ERROR':
      console.log('add memory error' + action.err);
      return state;
    case 'EDIT_MEMORY_ERROR':
      console.log('edit memory error' + action.err);
      return state;
    case 'REMOVE_MEMORY_ERROR':
      console.log('remove memory error' + action.err);
      return state;
    default:
      return state;
  }
};

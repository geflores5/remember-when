const timelinesInitialState = [];

export default (state = timelinesInitialState, action) => {
  switch (action.type) {
    case 'ADD_TIMELINE':
      return [...state, action.timeline];
    case 'REMOVE_TIMELINE':
      return state.filter(({ id }) => id !== action.timeline.id);
    case 'EDIT_TIMELINE':
      return state.map((timeline) => {
        if (timeline.id === action.timeline.id) {
          return {
            ...timeline,
            ...action.timeline,
          };
        }
        return timeline;
      });
    case 'ADD_TIMELINE_ERROR':
      console.log('add timeline error' + action.err);
      return state;
    case 'EDIT_TIMELINE_ERROR':
      console.log('edit timeline error' + action.err);
      return state;
    case 'REMOVE_TIMELINE_ERROR':
      console.log('remove timeline error' + action.err);
      return state;
    default:
      return state;
  }
};

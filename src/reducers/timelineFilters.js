const timelineFiltersInitialState = { text: '' };

export default (state = timelineFiltersInitialState, action) => {
  switch (action.type) {
    case 'SET_TIMELINE_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

export const setMemoryTextFilter = (text = '') => ({
    type: 'SET_MEMORY_TEXT_FILTER',
    text,
  });
  
  export const sortByAscending = () => ({
    type: 'SORTY_BY_ASCENDING',
  });
  
  export const sortByDescending = () => ({
    type: 'SORTY_BY_DESCENDING',
  });
  
  export const setStartDate = startDate => ({
    type: 'SET_START_DATE',
    startDate,
  });
  
  export const setEndDate = endDate => ({
    type: 'SET_END_DATE',
    endDate,
  });
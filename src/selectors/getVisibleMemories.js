const getVisibleMemories = (memories, {
  text, sortBy, startDate, endDate,
}) =>
  memories.filter((memory) => {
    // const startDateMatch = typeof startDate !== 'number' || memory.date >= startDate;
    // const endDateMatch = typeof endDate !== 'number' || memory.date <= endDate;
    const startDateMatch = true;
    const endDateMatch = true;
    const textMatch =
      memory.title.toLowerCase().includes(text.toLowerCase()) ||
      memory.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  });
// .sort((a, b) => {
//   if (sortBy === 'ascending') {
//     return a.date < b.date ? -1 : 1;
//   } else if (sortBy === 'descending') {
//     return a.date < b.date ? 1 : -1;
//   }
// });
export default getVisibleMemories;
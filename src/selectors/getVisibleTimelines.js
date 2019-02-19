const getVisibleTimelines = (timelines, { text }) => timelines && timelines.filter((timeline) => {
  const textMatch =
      timeline.title.toLowerCase().includes(text.toLowerCase()) ||
      timeline.description.toLowerCase().includes(text.toLowerCase());

  return textMatch;
});

export default getVisibleTimelines;
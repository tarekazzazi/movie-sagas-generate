const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    case "SET_MOVIES_GENRE":
      return action.payload;
    default:
      return state;
  }
};

export default genres;

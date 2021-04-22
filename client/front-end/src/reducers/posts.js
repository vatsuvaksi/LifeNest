// What are reducers ?
const reducers = (posts = [], action) => {
  switch (action) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};

export default reducers;


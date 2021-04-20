import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();    //Since .find will take time therefore we have to use await and make the function asynchronous 
    res.json(postMessages)
    .status(200);
  } catch (error) {
   res.status(404).json({message : error.message});
  }
};
export const createPost = (req, res) => {
  res.send("<h1>posting </h1>");
};

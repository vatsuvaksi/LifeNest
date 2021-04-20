import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find(); //Since .find will take time therefore we have to use await and make the function asynchronous
    res.json(postMessages).status(200);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPost = async (req, res) => {
  const post = req.body; //this will have the data from the user through body-parser
  const newPost = new PostMessage(post); //This will pass the json file (post) to the model whose schema is already created
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 
 /*“CORS” stands for Cross-Origin Resource Sharing. It allows you to make requests 
 from one website to another website in the browser, which is normally prohibited by another browser policy 
 called the Same-Origin Policy (SOP).
*/

const app =express();

/*
"extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded
"Limit" is used to parse the maximum size 
*/
app.use(bodyParser.json({limit : "30mb" , extended: true})); 
app.use(bodyParser.urlencoded({limit : "30mb" , extended: true})); 
app.use(cors);

const CONNECTION_URL ="mongodb+srv://vatsuvaksi:Passme123@lifenest-mern.icxcw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ;

const PORT = process.env.port || 5000 ;
mongoose.connect(CONNECTION_URL , {useNewUrlParser : true , useUnifiedTopology : true})
.then(() => app.listen(PORT , () => console.log(`Server running on port ${PORT}`)))
.catch((err) => console.log(err.message));


mongoose.set('useFindAndModify' , false);

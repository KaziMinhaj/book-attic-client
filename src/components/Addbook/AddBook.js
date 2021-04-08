import axios from 'axios';
import React, { useState } from "react";
import { useForm } from "react-hook-form";



export default function AddBook() {

  const { register, handleSubmit,errors, } = useForm();
  const [imageURL, setIMageURL] = useState()
  
  const onSubmit = data => {
      console.log(data);
      console.log(imageURL);
    const eventData = {
      author: data.Author,
      book:data.Book,
      price:data.price,
      imageURL: imageURL
    };
    console.log(eventData);
    const url = `http://localhost:5000/addbook`;
    
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(res => console.log('server side response', res))
  };
  
  const handleUploadImage=(event)=>{
    console.log(event.target.files[0])
    const imageData = new FormData()
    imageData.set('key','a7e17d9873233cc0df09d86eb04a29b0')
    imageData.append('image',event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Book name</label>
        <br></br>
      <input {...register("Book")} />
      <br></br>
      <label>Author name</label>
      <br></br>
      <input {...register("Author")} />
      <br></br>
      <label>Add price</label>
      <br></br>
      <input {...register("price")} />
      <br></br>
      <label>Upload image</label>
      <br></br>
      <input type="file" onChange={handleUploadImage} />
      <input type="submit" />
    </form>
  );
}
import React from 'react';
import './CreatePost.css'
import { useState } from 'react';
import { supabase } from '../client';

const CreatePost = () => {

    const [post, setPost] = useState({title: "", author: "", description: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async(event) => {
        event.preventDefault();

        await supabase //async operation
            .from('Posts')//specify what table in the project to use
            .insert({title:post.title, author: post.author, description: post.description})//perform insertion operation: pass an object with the title, post, & description populated with data from the form
            .select();//returns the db entry back to use once inserted into the db

        window.location = "/";
    }

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" onChange={handleChange} /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={createPost}/>
            </form>
        </div>
    )

}

export default CreatePost;
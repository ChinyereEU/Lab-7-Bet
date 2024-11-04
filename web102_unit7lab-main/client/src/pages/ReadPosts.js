import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const fetchPost = async() => {
            const {data} = await supabase//assign return value from select() to variable 'data'
                .from('Posts')
                .select()
                .order('created_at', {ascending: true})//order db by 'created_at' column in ascending order

                setPosts(data);//update state of state variable by passing the returned db entries (data) to setPosts()
        }
        setPosts(props.data);
        fetchPost();
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} title={post.title} author={post.author} description={post.description}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;
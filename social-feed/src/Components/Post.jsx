import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <h3> {post.name} </h3>
            <p> {post.post} </p>
            <button>Like</button>
            <button>Dislike</button>
        </div> 
    );
}
 
export default Post;
import React from 'react';

const CreatePost = (props) => {

    const [name, setName] = useState("");
    const [post, setPost] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post,
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }

    return (
        <form>
            <label>Name:</label>
            <input type="text" value="" />
            <label>Post:</label>
            <input type="text" value="" />
            <button type="submit">Submit</button>
        </form>
    );
}
 
export default CreatePost;
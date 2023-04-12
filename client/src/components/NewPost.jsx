import classes from './NewPost.module.css';
import React, { useState } from 'react';

function NewPost(props) {

    const [bodyText, setBodyText] = useState('');
    const [authorName, setAuthorName] = useState('');

    function bodyChangeHander(event) {
        setBodyText(event.target.value);
    }

    function authorChangeHandler(event) {
        setAuthorName(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            author: authorName,
            content: bodyText,
        };
        console.log(postData);
        props.onAddPost(postData);
        props.onCancel()
    }


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHander} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler}/>
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button>Submit</button>

            </p>
        </form>
    );
}

export default NewPost;
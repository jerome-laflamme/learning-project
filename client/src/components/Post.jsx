import React from "react";
import  classes from "./Post.module.css";

function Post(props) {
    return (
        <li className={classes.post}>
            <h1 className={classes.author}>{props.author}</h1>
            <p className={classes.text}>{props.content}</p>
        </li>
    );
}

export default Post;
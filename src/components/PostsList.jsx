import React, { useState } from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onAddPost={(post) => setPosts((prevPosts) => [post, ...prevPosts])}
                        onCancel={onStopPosting}
                    />
                </Modal>
            )}

            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, index) => (
                        <Post
                            key={index}
                            title={post.title}
                            content={post.content}
                            author={post.author}
                        />
                    ))}
                </ul>
            )}

            {posts.length === 0 && (
                <div style={{ textAlign: "center" }}>
                    <h2>There are no posts yet.</h2>
                    <p>Why not add one?</p>
                </div>
            )}



        </>
    );
}

export default PostsList;
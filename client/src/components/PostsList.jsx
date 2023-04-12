import React, { useState, useEffect } from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch("http://localhost:8080/posts");
            const data = await response.json();
            setPosts(data.posts);
        }
        fetchPosts();
        setIsFetching(false);
    }, []);

    function addPostHandler(post) {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json",
            },
        })
        setPosts((prevPosts) => [post, ...prevPosts]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onAddPost={addPostHandler}
                        onCancel={onStopPosting}
                    />
                </Modal>
            )}

            {!isFetching && posts.length > 0 && (
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

            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: "center" }}>
                    <h2>There are no posts yet.</h2>
                    <p>Why not add one?</p>
                </div>
            )}

            {isFetching && (
                <div style={{ textAlign: "center" }}>
                    <h2>Loading...</h2>
                </div>
            )}

        </>
    );
}

export default PostsList;
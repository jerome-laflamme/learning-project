import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import classes from "./PostsList.module.css";
import Post from "./Post";

function PostsList() {
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post
                            id={post.id}
                            key={post.id}
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
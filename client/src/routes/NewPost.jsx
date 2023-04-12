import { Link, Form, redirect } from 'react-router-dom';
import classes from './NewPost.module.css';
import React, { useState } from 'react';
import Modal from '../components/Modal';

function NewPost(props) {

    return (
        <Modal>
            <Form className={classes.form} method='post'>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="content" required rows={3} />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="author" required/>
                </p>
                <p className={classes.actions}>
                    <Link to='..'>Cancel</Link>
                    <button>Submit</button>

                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action(data) {
    const formData = await data.request.formData()
    const post = Object.fromEntries(formData) // { body: '...', author: '...' }
    await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json",
        },
    })

    return redirect("/");
}
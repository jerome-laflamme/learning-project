import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostsList';

function Posts() {

  return (
    <>
      <main>
        <PostsList />
      </main>
      <Outlet />

    </>
  )
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data.posts;
}

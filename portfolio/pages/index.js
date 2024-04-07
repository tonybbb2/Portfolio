import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Main from "./components/Main";
import Recent from "./components/Recent";
import MainAbout from './components/MainAbout';

export default function Home({posts}) {

  return (
    <>
      <Main />
      <MainAbout />
      <Recent posts={posts}/>
    </>
  );
}

const POSTS_DIR = path.join(process.cwd(), 'pages', 'posts');

export async function getStaticProps() {
  const postFileNames = fs.readdirSync(POSTS_DIR);
  const posts = postFileNames.map(fileName => {
    const fullPath = path.join(POSTS_DIR, fileName);
    const source = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(source);

    return {
      content,
      data,
      fileName, // You can use fileName instead of filepath if needed
    };
  });

  return {
    props: {
      posts,
    },
  };
}
import fs from 'fs';
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '/lib/mdxUtils.js'

const components = {

}

export default function postPage({ source, frontMatter}) {
    return (
        <>
            <div className='w-full'>
                <h1>{frontMatter.title}</h1>
            </div>
            <MDXRemote {...source} components={components} />
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postFilePath, 'utf8');
  
    const { content, data } = matter(source);
  
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
      scope: data,
    });
  
    return {
      props: {
        source: mdxSource,
        frontMatter: data,
      },
    };
  };

export const getStaticPaths = async () => {
    return {
      paths: postFilePaths,
      fallback: false,
    };
  };
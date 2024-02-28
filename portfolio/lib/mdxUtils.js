import fs from 'fs';
import path from 'path';

const POSTS_PATH = path.join(process.cwd(), 'posts');

const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    .filter((filePath) => /\.mdx?$/.test(filePath))
    .map((filePath) => path.join(POSTS_PATH, filePath));

export { POSTS_PATH, postFilePaths };
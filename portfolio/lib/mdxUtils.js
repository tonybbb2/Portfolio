import fs from 'fs';
import path from 'path';

const POSTS_PATH = path.join(process.cwd(), 'posts');

const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    .filter((filePath) => /\.mdx?$/.test(filePath))
    .map((filePath) => {
        const fileName = path.basename(filePath, path.extname(filePath));
        return {
            params: {
                slug: fileName,
            },
        };
    });

export { POSTS_PATH, postFilePaths };
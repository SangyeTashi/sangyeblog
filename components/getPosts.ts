import fs from 'fs';
import matter from 'gray-matter';
import { Post } from './Post';
export const getPosts = (): Post[] => {
    const folder = 'posts';
    const files = fs.readdirSync(folder);
    const mdfiles = files.filter((file) => file.endsWith('.md'));

    const posts = mdfiles.map((file) => {
        const matterResults = matter(fs.readFileSync('posts/' + file, 'utf-8'));
        console.log(matterResults);

        return {
            title: matterResults.data.title,
            date: matterResults.data.date,
            subtitle: matterResults.data.subtitle,
            slug: file.replace('.md', ''),
            content: matterResults.content,
        };
    });
    return posts;
};

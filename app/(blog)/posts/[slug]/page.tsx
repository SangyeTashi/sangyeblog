import React from 'react';
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

function getPostContent(slug: string) {
    const file = fs.readFileSync('posts/' + slug + '.md', 'utf8');
    const matterResult = matter(file);
    return matterResult;
}

function page(props: any) {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <div className="py-12">
            <div className="flex items-center py-2 space-y-2 flex-col">
                <h1 className=" font-bold text-4xl">{post.data.title}</h1>
                <p className="text-slate-700">{post.data.subtitle}</p>
                {/* <p className="text-slate-700 ">{post.data.date}</p> */}
            </div>
            <article className="prose prose-slate mx-auto">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
}

export default page;

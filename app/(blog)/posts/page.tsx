import { getPosts } from '@/components/getPosts';
import PostPreview from '@/components/PostPreview';

export default function Home() {
    const posts = getPosts();
    return (
        <div className="grid sm:grid-cols-2 gap-3 p-2">
            {posts.map((post) => (
                <PostPreview key={post.slug} {...post} />
            ))}
        </div>
    );
}

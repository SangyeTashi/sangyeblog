import { getPosts } from '@/components/getPosts';
import PostPreview from '@/components/PostPreview';

export default function Home() {
    const posts = getPosts();
    return (
        <div className=" max-w-3xl mx-auto ">
            <h3 className="text-xl mb-3 italic">Recently Added</h3>
            <section className="grid sm:grid-cols-2 gap-3 ">
                {posts.map((post) => (
                    <PostPreview key={post.slug} {...post} />
                ))}
            </section>
        </div>
    );
}

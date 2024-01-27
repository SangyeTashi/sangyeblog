import { getPosts } from '@/components/getPosts';
import PostPreview from '@/components/PostPreview';

export default function Home() {
    const posts = getPosts();
    return <h1>Hi</h1>;
}

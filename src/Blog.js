import BlogHeader from './components/BlogHeader';
import BlogPost from './components/BlogPost'

function Blog() {
    return (
        <div className="Blog">
            <BlogHeader />
            <BlogPost />
            <BlogPost />
        </div>
    );
}
export default Blog;
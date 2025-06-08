
import Hero from '@/components/Articles/Hero';
import FeaturedBlog from '@/components/Articles/FeaturedArticles';
import BlogList from '@/components/Articles/ArticlesList';

const page = () => {
  return (
    <div>
        <Hero />
        <FeaturedBlog />
        <BlogList />

    </div>
  )
}
export default page;
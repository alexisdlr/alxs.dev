import { useState } from "preact/hooks";
import Categories from "./Categories";
import { getCollection } from "astro:content";
import FilteredPosts from "./Posts";

const posts = (await getCollection("blog")).sort((a, b) => {
  const dateA = new Date(a.data.pubDate);
  const dateB = new Date(b.data.pubDate);
  return dateB.getTime() - dateA.getTime();
});

const postsMapped = posts.map((p) => ({
  link: "/blog/" + p.slug,
  data: p.data,
}));

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('');

  const uniqueCategories = [
    ...new Set(posts.map((post) => post.data.category)),
  ];
  

  return (
    <section class={"flex gap-x-6"}>
      <FilteredPosts posts={postsMapped} selectedCategory={activeCategory} />
      <div class="relative">
        <div class="sticky top-28">
          <h2 class="font-semibold text-3xl my-4 text-slate-700 dark:text-darkText">
            Categories
          </h2>
          <Categories
            categories={uniqueCategories}
            onSelectCategory={(category) => setActiveCategory(category)}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

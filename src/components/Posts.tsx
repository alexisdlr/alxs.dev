import Post from "./Post";

interface FilteredPostsProps {
  posts: {
    link: string;
    data: {
      title: string;
      description: string;
      pubDate: Date;
      updatedDate?: Date | undefined;
      heroImage?: string;
      category: string;
      minRead?: string;
    };
  }[];
  selectedCategory: string;
}
const FilteredPosts = ({ posts, selectedCategory }: FilteredPostsProps) => {
  const filteredPosts = posts.filter(
    (post) => post.data.category === selectedCategory
  );
  return (
    <ul>
      {selectedCategory.length > 0
        ? filteredPosts.map((post) => (
            <li class="my-6">
              <Post post={post} />
            </li>
          ))
        : posts.map((post) => (
            <li class="my-6">
              <Post post={post} />
            </li>
          ))}
    </ul>
  );
};

export default FilteredPosts;

interface PostProps {
  post: {
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
  };
}
const Post = ({ post }: PostProps) => {
  return (
    <a
      href={post.link}
      className="flex items-center bg-iris/5 ring-navy/20 hover:bg-navy/10 hover:shadow-navy/50 hover:ring-navy text-text backdrop-blur-sm shadow-none ring-2 dark:ring-astro-pink/20 p-2 gap-2 sm:gap-4 sm:p-5 dark:hover:bg-astro-pink/10 dark:hover:ring-astro-pink hover:shadow-xl dark:hover:shadow-astro-pink/50 rounded-lg transition-all ease-in-out duration-500 h-52 max-w-3xl"
    >
      <div>
        <img
          src={post.data.heroImage}
          alt="logo"
          className="size-24 lg:size-28 object-contain rounded-md"
        />
      </div>
      <div className="flex flex-col items-start gap-2 w-full">
        <h4 className="font-semibold text-md lg:text-2xl text-slate-700 dark:text-darkText">
          {post.data.title}
        </h4>
        <p className="text-xs md:text-sm text-slate-600 dark:text-iris/90">
          {post.data.description}
        </p>
        <div className="flex w-full justify-between pr-4">
          <p className="text-xs text-surface/80 dark:text-darkText/80">
            {post.data.pubDate.toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="text-xs text-surface dark:text-darkText/90">
            {post.data.minRead} min read
          </p>
        </div>
      </div>
    </a>
  );
};

export default Post;

import { getCollection } from "astro:content";
import FormattedDate from "./FormattedDate.astro";

const posts = (await getCollection("blog")).sort(
  (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
);

const Posts = () => {
  return (
    <ul>
      {posts.map((post) => (
        <li class="my-6">
          <a
            href={`/blog/${post.slug}/`}
            class="flex items-center bg-iris/5 ring-navy/20 hover:bg-navy/10 hover:ring-navy text-text backdrop-blur-sm shadow-none ring-2 dark:ring-astro-pink/20 p-2 sm:gap-4 sm:p-5 dark:hover:bg-astro-pink/10 dark:hover:ring-astro-pink hover:shadow-xl dark:hover:shadow-astro-pink/50 rounded-lg transition-all ease-in-out duration-500 h-52 max-w-3xl"
          >
            <div class="rounded-full p-4">
              <img
                src={post.data.heroImage}
                alt="logo"
                class="size-16 object-fill rounded-full"
              />
            </div>
            <div class="flex flex-col items-start gap-2">
              <h4 class="font-semibold text-3xl text-slate-700 dark:text-darkText">
                {post.data.title}
              </h4>
              <p class="text-base text-slate-600 dark:text-darkText">
                {post.data.description}
              </p>
              <p class="text-sm text-surface dark:text-darkText/90">
                <FormattedDate date={post.data.pubDate} />
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Posts;

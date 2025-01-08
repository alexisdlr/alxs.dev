interface CategoriesProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}
const Categories = ({ categories, onSelectCategory }: CategoriesProps) => {
  return (
    <div className={"hidden md:flex gap-x-3 gap-y-2 flex-wrap"}>
      <span
        onClick={() => onSelectCategory("")}
        className={
          "px-3 cursor-pointer hover:ring-2 hover:ring-navy dark:hover:ring-iris transition-all py-1 bg-surface/10 rounded-md dark:bg-iris/10 text-slate-700 dark:text-darkText"
        }
      >
        All
      </span>
      {categories.map((cat) => (
        <span
          onClick={() => onSelectCategory(cat)}
          className={
            "px-3 cursor-pointer hover:ring-2 hover:ring-navy dark:hover:ring-iris transition-all py-1 bg-surface/10 rounded-md dark:bg-iris/10 text-slate-700 dark:text-darkText"
          }
        >
          {cat}
        </span>
      ))}
    </div>
  );
};

export default Categories;

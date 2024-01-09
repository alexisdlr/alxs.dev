interface CategoryItemProps {
  category: { name: string } 
  onClick: (cat:string) => void

}
const CategoryItem = ({ category, onClick }: CategoryItemProps) => {
  return (
    <span
      onClick={() => onClick(category.name)}
      class={
        "px-3 cursor-pointer hover:ring-2 hover:ring-navy dark:hover:ring-iris transition-all py-1 bg-surface/10 rounded-full dark:bg-iris/10 text-slate-700 dark:text-darkText"
      }
    >
      {category.name}
    </span>
  );
};

export default CategoryItem;

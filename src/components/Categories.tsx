import { useState } from "preact/hooks";
import CategoryItem from "./CategoryItem";
const Categories = ({ categories }: { categories: { name: string }[] }) => {
  const [activeCategory, setActiveCategory] = useState<null | string>(null)

  const changeActiveCategory = (cat:string) => {
    setActiveCategory(cat)
  }
  return (
    <div class={"flex gap-x-3"}>
      {categories.map((cat) => (
        <CategoryItem category={cat} onClick={changeActiveCategory} />
      ))}
    </div>
  );
};

export default Categories;

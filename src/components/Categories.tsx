import CategoryItem from './CategoryItem'
const Categories = ({categories}: {categories: {name: string}[]}) => {
  return ( <div class={'flex gap-x-3'}>
    {categories.map(cat => (
      <CategoryItem category={cat} />
    ))}
  </div> );
}
 
export default Categories;
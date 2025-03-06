import CategoryItem from '../categories/category-item.component';
import './directory.styles.scss';


const Directory = ({categories}) => {
   
  return (
    <div className='Directory-container'>
    {
      categories.map((category) => (
      <CategoryItem key={category.id} category = {category}  />
      ))
    }

    
  </div>
  )
}

export default Directory;
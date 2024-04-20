import { useEffect, useState } from 'react'
import { getCategories } from '../services/category'
import Category from './category'

function CategoryList() {
  // create state member
  const [blogs, setBlogs] = useState([])

  // used to perform action(s) after component gets loaded
  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    const result = await getCategories()
    if (result['status'] === 'success') {
      setBlogs(result['data'])
    }
  }

  return (
    <div>
      <div>
        {blogs.map((blog) => {
          return (
            <Category
              title={blog.title}
              details={blog.contents}
              // image={category.image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CategoryList

import { useNavigate } from 'react-router-dom'
import CategoryList from '../components/categoryList'

function Home() {
  // get the navigate object
  const navigate = useNavigate()

  const onLogout = () => {
    // clear the session storage
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('name')

    // navigate to login page
    navigate('/login')
  }

  return (
    <div>
      <h2 className='page-title'>My Airbnb</h2>
      <button onClick={onLogout} className='btn btn-warning'>
        Logout
      </button>

      <div>
        <CategoryList />
      </div>
    </div>
  )
}

export default Home

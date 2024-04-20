import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
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
    <div className='container' >
      <h2 className='page-title'>Just Blog</h2>
      <div style={{display:'flex'}}>
        <div >
          <div style={{}}>
              <ul>
                <li><Link to={'/addblog'}>New Blog</Link></li>
                <li>My Blog</li>
                <li>All Blog</li>
                <li>Find Blog</li>
                <li>Categories Blog</li>
                <li>Logout</li>
              </ul>
          </div>
        </div>
        <br />
        <div>
          <div className='col col-12' style={{border:'1px solid',borderRadius:'5px'}}>
             <CategoryList />
          </div>
        </div>
      </div>

    <div>
       
      </div>
    </div>
  )
}

export default Home

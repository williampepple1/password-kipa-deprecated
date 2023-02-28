import './App.css'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth' 
import Login from './pages/Login'
import Homepage from './pages/Homepage'

export default function App() {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return(
      <div>
        hey
      </div>
    )
  }

  return (
    <div>
      {!user ? (<Login />) : (

       <Homepage />
      )}
    </div>
  )
}

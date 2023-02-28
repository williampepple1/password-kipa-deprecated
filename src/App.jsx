import './App.css'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth' 
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import { ColorRing } from 'react-loader-spinner'

export default function App() {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return(
     <div className='grid h-screen place-items-center'>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
        />
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

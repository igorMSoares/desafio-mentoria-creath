import Login from '../pages/Login/Login'
import Register from '@/pages/Register/Register'
import Splash from '@/pages/Splash/Splash'
import {Routes, Route} from 'react-router-dom'

export function Router(){
    return(
        <Routes>
            <Route path='/splash' element={<Splash/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    )
}
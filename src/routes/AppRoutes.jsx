import {Route, Routes} from 'react-router'
import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users'
import Messages from '../pages/Messages'
import Orders from '../pages/Orders'
import Products from '../pages/Products'
import Settings from '../pages/Settings'
import Reports from '../pages/Reports'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>}>
           <Route element={<Dashboard/>}/>
           <Route path='users' element={<Users/>}/>
           <Route path='messages' element={<Messages />}/>
           <Route path='orders' element={<Orders />}/>
           <Route path='products' element={<Products/>}/>
           <Route path='settings' element={<Settings />} />
           <Route path='reports' element={<Reports />}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes
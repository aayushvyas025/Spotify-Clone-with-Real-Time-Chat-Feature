import { Route, Routes } from 'react-router-dom'
import { frontendRoutes } from '@/helper'
import Pages from '@/pages'

const {HomePage, AuthPage} = Pages;
const {homeRoute, authRoute} = frontendRoutes;

function MainRoutes() {
  return (
    <Routes>
       <Route path={homeRoute} element={<HomePage/>} /> 
       <Route path={authRoute} element={<AuthPage/>} />
    </Routes>
  )
}

export default MainRoutes
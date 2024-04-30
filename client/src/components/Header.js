import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import {NavLink} from 'react-router-dom'
import FestivalIcon from '@mui/icons-material/Festival';

const Header = () => {
  const [value, setValue] = useState()
  return (
    <div>
      <AppBar sx={{backgroundColor: '#232F3D'}} position='sticky'>
        <Toolbar>
            <FestivalIcon  />
            <Typography>Indian Culture Management System</Typography>
            <Tabs textColor='inherit' indicatorColor='primary' sx = {{ml:'auto'}} value={value} onChange={(e,val) =>setValue(val)}>
              
            
              
              <Tab LinkComponent = {NavLink} to = '/signup' label = 'SignUp'/>
              
              <Tab LinkComponent = {NavLink} to = '/signin' label = 'SignIn'/>
              <Tab LinkComponent = {NavLink} to = '/heritagesites' label = 'Gallery'/>
            
              <Tab LinkComponent = {NavLink} to = '/gallery' label = 'Heritage Sites'/>
              <Tab LinkComponent = {NavLink} to = '/StateList' label = 'StateList'/>
              <Tab LinkComponent = {NavLink} to = '/ContactForm' label = 'ContactForm'/>
              <Tab LinkComponent = {NavLink} to = '/IndianMap' label = 'map'/>
              
            </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
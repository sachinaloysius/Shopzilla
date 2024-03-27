import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='admin-sidebar'>
        <ul>
            <li><Link to="/admin">Dashboard</Link></li>
            <li><Link to="/admin/District">District</Link></li>
            <li><Link to='/admin/Place'>Place</Link></li>
            <li><Link to='/admin/Category'>Category</Link></li>
            <li><Link to='/admin/Subcategory'>Subcategory</Link></li>
           
        </ul>
    </div>
  )
}

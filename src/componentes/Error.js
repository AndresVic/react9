import React from 'react'
import { Link } from 'react-router-dom'

const Error = (props) =>{
        return <div>
            <hr />
            <h1>Error: 404</h1>
            <h4>Page no found</h4>
            <img src="https://i.pinimg.com/originals/84/69/13/846913110b636d7682c80cbf1873e0d7.gif" alt="Error" className="img" />
            <hr />
            <Link to="/">Link: Inicio</Link>
        </div>
    }
export default Error
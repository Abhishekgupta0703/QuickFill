import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <>
      <div className="container">
        <h1>Error 404 </h1>
        <h2>Page Not Found</h2>
        <Link className='btn' to='/'>Go Back Home</Link>
        <style jsx="true" >
          {
            `
            h1{
              font-size: 70px;
              margin: 0 auto;
              text-align: center;
              font-variant: small-caps;
              color: dimgray;
            }
            h2{
              font-size: 45px;
              margin: 0 auto;
              text-align: center;
              color: #a6a6a6;
            }
            .btn{
              margin:20px 0;
              text-decoration: none;
              color: #0097d3;
              padding:10px 15px;
              border:1px solid #0097d3;
              transition: .5s;
            }
            .btn:hover{
              color: #fff;
              background-color: #0097d3;
            }
            `
          }
        </style>
      </div>

    </>
  )
}

export default NoPage
import React, { useState } from 'react'
import './Home.css'
import Sidewar from '../../Components/Sidewar/Sidewar'
import Feed from '../../Components/Feed/Feed'

const Home = ({ sidebar }) => {

         const [category,setCategory]  = useState(0);
         return (
                  <>

                           <Sidewar sidebar={sidebar} category={category}  setCategory={setCategory} ></Sidewar>
                           <div className={`container ${sidebar?"":'large-container'}`}>
                                    <Feed category = {category}/>
                           </div>
                  </>
         )
}

export default Home
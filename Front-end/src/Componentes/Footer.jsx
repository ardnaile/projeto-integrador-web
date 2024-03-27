import React from 'react'
import { Link,Outlet } from "react-router-dom";
export default function Footer() {
  return (
       <footer className="bg-transparent">
            <div className="flex justify-center items-center">
                <div>
                    <img className="w-32 sm:w-14 md:w-16 lg:w-24 xl:w-32"  src="src\assets\icones\Git.svg" alt=""/>
                </div>
                
                <div className='items-center justify-center font-bold'>
                    <ul className=''>PROJETO NO <a href="https://github.com/ardnaile/projeto-integrador-web" target="_blank" rel="noopener noreferrer"><span className='underline hover:cursor-pointer'>GITHUB</span></a> </ul>
                </div>
                
            </div>
        </footer>

  )
}
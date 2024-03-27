import React from 'react'

const Header = () => {


  return (
    <div>
      <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold ">Flavoro Foods</h1>
      </div>
      <div>
        
      
        
      
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
        //   onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
    </div>
  )
}

export default Header

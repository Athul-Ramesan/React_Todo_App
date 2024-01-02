import React from 'react'

function NavBar() {
  return (

    <div className='fixed top-0 opacity-50 z-10 flex justify-between bg-zinc-950 h-20 w-full p-5'>
       
      <img className='fixed left-5  w-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
      <img className='fixed right-5 w-10 h-8' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
    </div>

  )
}

export default NavBar

import React from 'react'
import avatar from "../assets/images/avatar.png"
import folderIcon from "../assets/images/folder-icon.png"


const HomePage = () => {

    const gradColor = {
        background: 'linear-gradient(90deg, #579efd, #a67af7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent', // Make the text color transparent
    }

  return (
   
    <div className='flex items-center justify-center mx-auto py-20 md:py-40 px-3 lg:px-0'>
    <div className='grid grid-cols-12 gap-4 items-center w-[95%] lg:w-full justify-center'>
      {/* Column 1 */}
      <div className='col-span-12 md:col-span-12 lg:col-span-7 mx-auto'>
        <h1 className='py-1 md:py-5 text-[80px] md:text-[70px] lg:text-[96px] leading-[1] lg:tracking-[-0.12px] font-bold'>
          Free <span style={gradColor}> Unlimited File</span> Converter
        </h1>
        <p className='mt-5 leading-[1.7] text-[20px]'>
          Unleash your creativity with <span style={gradColor}>Trojan-z</span> file converter - the ultimate online tool for unlimited and free multimedia conversion. Transform images, audio, and videos effortlessly, without restrictions. Start converting now and elevate your content like never before.
        </p>
      </div>
  

  
      {/* Column 2 -  */}
      <div className='col-span-12 mt-[25px] lg:mt-0 md:col-span-12 lg:col-span-5 animate-bounce '>
        <div className="relative ">
          <img src={folderIcon} alt="Folder icon" className="relative" />
          <img src={avatar} alt="Avatar" className="absolute top-0 left-[300px] md:left-[250px] lg:left-[250px] z-10 " />
        </div>
      </div>
    </div>
  </div>
  
  
  ) 
}

export default HomePage

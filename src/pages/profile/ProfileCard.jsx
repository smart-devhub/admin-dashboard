import React from 'react'
import Button from '../../component/common/Button'

const ProfileCard = () => {
    const backgroundImage = 'https://pixlr.com/images/index/ai-image-generator-two.webp';
    const upload="https://i.pinimg.com/236x/31/58/31/31583193f57c8b2448d7d4ddb1f5122a.jpg"
    return (
        <div className='h-[370px] w-[100%] relative shadow-lg broder-1 bg-white border-gray-50  rounded-md flex flex-col'>
            <div className='h-[50%] w-[100%] rounded-tl-md rounded-tr-md bg-cover object-cover ' style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', }} />
            
            <div className='absolute top-[40%] left-[40%] rounded-full h-[100px] w-[100px] bg-cover object-cover  bg-gray-400' style={{ backgroundImage: `url(${upload})`, backgroundRepeat: 'no-repeat', }}/>
                 
           
            <div className='w-[100%] flex justify-center items-center flex-col mt-[100px] '>
                <span>name</span>
                <Button text="Change Avatar" width={150} height={40}/>
            </div>
        </div>
    )
}

export default ProfileCard
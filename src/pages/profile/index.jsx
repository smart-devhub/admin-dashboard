import React from 'react'
import ProfileCard from './ProfileCard'
import ProfileForm from './ProfileForm'

const Profile = () => {
  return (
    <div className='grid grid-cols-5 gap-2'>
      <div className='xl:col-span-2 lg:col-span-2 md:col-span-5 sm:col-span-5 xs:col-span-5'>
        <ProfileCard />
      </div>
      <div className='xl:col-span-3 lg:col-span-3 md:col-span-5 sm:col-span-5 xs:col-span-5'>
        <ProfileForm />
      </div>

    </div>
  )
}

export default Profile
import React from 'react'
import ProfileCard from './ProfileCard'
import ProfileForm from './ProfileForm'

const Profile = () => {
  return (
    <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-2'>
      <div className='col-span-1'>
        <ProfileCard />
      </div>
      <div className='col-span-1'>
        <ProfileForm />
      </div>

    </div>
  )
}

export default Profile
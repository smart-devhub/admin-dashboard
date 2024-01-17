import React from 'react'
import Input from '../../component/common/Input'

const ProfileForm = () => {
    return (
        <div className='px-3 flex flex-col gap-2'>
            <Input
                label="FirstName"
                placeholder="First Name"
                width={"100%"}
                
            />
             <Input
                label="Last Name"
                placeholder="Last Name"
                width={"100%"}
            />
             <Input
                label="Email"
                placeholder="Email"
                width={"100%"}
            />
             <Input
                label="Password"
                placeholder="Password"
                width={"100%"}
            />
             <Input
                label="Confirm Password"
                placeholder="Confirm Password"
                width={"100%"}
            />
        </div>
    )
}

export default ProfileForm
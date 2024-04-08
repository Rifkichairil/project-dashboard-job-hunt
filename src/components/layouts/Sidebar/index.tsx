import { Button } from '@/components/ui/button';
import React, { FC } from 'react'
import { AiOutlineHome, AiOutlineMail, AiOutlineUserSwitch, AiOutlineCalendar, AiOutlineSetting } from "react-icons/ai";
import { HiOutlineBuildingOffice2, HiOutlineDocumentText } from "react-icons/hi2";
import { RiLogoutBoxLine } from "react-icons/ri";


interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = ({  }) => {
    return (
        <div className='pb-12 min-h-screen'>
            {/* Menus */}
            <div className='space-y-4 py-4'>
                <div className='px-3 py-2'>
                    <h2 className='mb-2 px-4 text-lg font-semibold'>
                        Dashboard
                    </h2>
                    <div className="space-y-3">
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <AiOutlineHome className='mr-2 text-lg'/>
                            Home
                        </Button>
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <AiOutlineMail className='mr-2 text-lg'/>
                            Messages
                        </Button>
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <HiOutlineBuildingOffice2  className='mr-2 text-lg'/>
                            Company Profile
                        </Button>
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <AiOutlineUserSwitch  className='mr-2 text-lg'/>
                            All Applicants
                        </Button>
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <HiOutlineDocumentText  className='mr-2 text-lg'/>
                            Job Listing
                        </Button>
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <AiOutlineCalendar  className='mr-2 text-lg'/>
                            My Schedule
                        </Button>
                    </div>
                </div>
            </div>
            {/* Settings */}
            <div className="space-y-4">
                <h2 className='mb-2 px-4 text-lg font-semibold'>
                    Setting
                </h2>
                <div className="px-3 py-2">
                    <div className="space-y-3">
                        <Button variant={'ghost'} className='w-full justify-start rounded-none hover:text-primary'>
                        <AiOutlineSetting  className='mr-2 text-lg'/>
                            Setting
                        </Button>
                        <Button variant={'ghost'} className='w-full justify-start rounded-none text-red-500 hover:bg-red-200 hover:text-red-500'>
                        <RiLogoutBoxLine   className='mr-2 text-lg'/>
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sidebar;
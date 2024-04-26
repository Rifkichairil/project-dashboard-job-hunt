import React, { FC } from 'react'
import { Progress } from "@/components/ui/progress"
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { PartyPopperIcon } from 'lucide-react';


interface  JobDetailProps {
  // Add your component props here
}

const JobDetail: FC<JobDetailProps> = ({  }) => {
    return (
        <div>
            <div className="grid grid-cols-3 w-full gap-5">
                <div className="col-span-2 space-y-10">
                    {/* Deskripisi */}
                    <div className="">
                        <div className="text-3xl font-semibold">
                            Description
                        </div>
                        <div className="text-gray-500 mt-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam mollitia sapiente consequatur? Ducimus provident itaque voluptas doloremque, aliquid commodi quisquam praesentium nam totam ipsa saepe eaque? Iusto ipsum tempora porro.</p>
                        </div>
                    </div>
                    {/* Responsibility */}
                    <div className="">
                        <div className="text-3xl font-semibold">
                            Responsibilities
                        </div>
                        <div className="text-gray-500 mt-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam mollitia sapiente consequatur? Ducimus provident itaque voluptas doloremque, aliquid commodi quisquam praesentium nam totam ipsa saepe eaque? Iusto ipsum tempora porro.</p>
                        </div>
                    </div>
                    {/* Who you are? */}
                    <div className="">
                        <div className="text-3xl font-semibold">
                            Who You Are
                        </div>
                        <div className="text-gray-500 mt-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam mollitia sapiente consequatur? Ducimus provident itaque voluptas doloremque, aliquid commodi quisquam praesentium nam totam ipsa saepe eaque? Iusto ipsum tempora porro.</p>
                        </div>
                    </div>
                    {/* Nice to have */}
                    <div className="">
                        <div className="text-3xl font-semibold">
                            Nice to have
                        </div>
                        <div className="text-gray-500 mt-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam mollitia sapiente consequatur? Ducimus provident itaque voluptas doloremque, aliquid commodi quisquam praesentium nam totam ipsa saepe eaque? Iusto ipsum tempora porro.</p>
                        </div>
                    </div>
                </div>

                {/* About This Role */}
                <div className="">
                    <div className="text-3xl font-semibold">
                        About This Role
                    </div>
                    <div className="shadow p-3 text-center my-6">
                        1 <span className='text-gray-500'> of 10 capacity</span>
                        <Progress className='mt-3' value={10} />
                    </div>
                    
                    {/* Date */}
                    <div className="mb-10 space-y-5">
                        <div className="flex justify-between">
                            <div className="text-gray-500">Apply Before</div>
                            <div className="font-semibold">12 Aug 2023</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-gray-500">Job Posted on</div>
                            <div className="font-semibold">12 Aug 2023</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-gray-500">Job Type</div>
                            <div className="font-semibold">Full Time</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-gray-500">Salary</div>
                            <div className="font-semibold">$100 - $1000 USD</div>
                        </div>
                    </div>

                    <Separator />
                    {/* Categories */}
                    <div className="my-10">
                        <div className="text-3-xl font-semibold mb-4">
                            Categories
                        </div>
                        <div className="space-x-5">
                            {['Web'].map((item:string, i:number) => (
                                <Badge key={i}>{item}</Badge>
                            ))}
                        </div>
                    </div>

                    <Separator />
                    {/* Required Skills */}
                    <div className="my-10">
                        <div className="text-3-xl font-semibold mb-4">
                            Required Skills
                        </div>
                        <div className="space-x-5">
                            {['Html', 'Javascript'].map((item:string, i:number) => (
                                <Badge variant={'outline'} key={i}>{item}</Badge>
                            ))}
                        </div>
                    </div>

                </div>
               
            </div>
            
            <Separator />
            {/* Benefits */}
            <div className="text-3xl font-semibold mt-10">
                Perks & Benefits
            </div>
            <div className="text-gray-500">
                This jon comes with severan perks and benefits
            </div>

            <div className="grid grid-cols-4 gap-5 mt-9">
                {[0,1,2].map((item:number) => (
                    <div className="" key={item}>
                        <PartyPopperIcon className='w-10 h-10 text-primary mb-6'/>
                        <div className="text-lg font-semibold mb-3">Full Healthcare</div>
                        <div className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit omnis veritatis blanditiis itaque saepe illo, delectus corrupti, in impedit repellat expedita nihil quidem minus consequatur facilis quia rem officiis!
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JobDetail;
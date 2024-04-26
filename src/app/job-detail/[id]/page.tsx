import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Applicants from '@/components/organisms/Applicants';
import JobDetail from '@/components/organisms/JobDetail';


interface  JobDetailPageProps {
  // Add your component props here
}

const JobDetailPage: FC<JobDetailPageProps> = ({  }) => {
    return (
        <div>
            <div className="inline-flex items-center gap-5 mb-5">
                <div className="">
                    <Link href={'/job-listings'}>
                        <ArrowLeftIcon className='w-9 h-9' /> 
                    </Link>
                </div>
                <div className="">
                    <div className="text-2xl font-semibold mb-1">
                        Brand Designer
                    </div>
                    <div className="">
                        Desiggn . Fulltime . <span className='text-gray-500'>1/10 Hired</span>
                    </div>
                </div>
            </div>
            <Tabs defaultValue="applicants">
                <TabsList className='mb-8'>
                    <TabsTrigger value="applicants">Applicants</TabsTrigger>
                    <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
                </TabsList>
                <TabsContent value="applicants">
                    <Applicants />
                </TabsContent>
                <TabsContent value="jobDetails">
                    <JobDetail />
                </TabsContent>
            </Tabs>

        </div>
    );
}

export default JobDetailPage;
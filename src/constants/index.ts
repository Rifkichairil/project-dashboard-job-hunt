import { EnumValues } from "zod"

export const JOBTYPES: EnumValues = ["Full-Time", "Part-Time", "Remote", "Internship"];

export const JOB_LISTING_COLUMNS: string[] = [
    'Roles',
    'Status',
    'Date Posted',
    'Due Date',
    'Job Type',
    'Applicants',
    'Needs',
];

export const JOB_APPLICANT_COLUMNS: string[] = [
    'Name',
    'Roles',
    'Applied Date',
];

export const JOB_LISTING_DATA = [
    {
        roles: 'Software Engineer',
        status: 'Live',
        datePosted: '12 Aug 2023',
        dueDate: '12 Sep 2023',
        jobType: 'Full-Time',
        applicants: 1,
        needs: 10,
    }
]
export const JOB_APPLICANT_DATA = [
    {
        name: 'Rifki Chairil',
        roles: 'Backend Developer',
        appliedDate: '12 Aug 2023',
    },  
    {
        name: 'Fulan',
        roles: 'Web Developer',
        appliedDate: '12 Aug 2023',
    }
]

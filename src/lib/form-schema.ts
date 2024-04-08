import { JOBTYPES } from '@/constants'
import {z} from 'zod'

export const jobFormSchema = z.object({
    roles: z
        .string({required_error: 'Job Title is required'})
        .min(3, {message: 'Job must be at least 3 characters'}),
    jobType: z
        .enum(JOBTYPES, {required_error: 'You need select your job type'}),
    jobSalaryFrom: z
        .string({required_error: 'Salary from is requeired'}),
    jobSalaryTo: z
        .string({required_error: 'Salary to is requeired'}),
    categoryId: z
        .string({required_error: 'You need to select a category'}),
    requiredSkills: z
        .string()
        .array()
        .nonempty({message: 'Required skill must be at least 1 skill'}),
    jobDescription: z
        .string({required_error: 'Jobdesc is required'})
        .min(10, {message: 'Jobdesc must be at lear 10 char'}),
    responsibility: z
        .string({required_error: 'Responsibility is required'})
        .min(10, {message: 'must be at lear 10 char'}),
    whoYouAre: z
        .string({required_error: 'Who You Are is required'})
        .min(10, {message: 'must be at lear 10 char'}),
    niceToHave: z
        .string({required_error: 'Nice to have is required'})
        .min(10, {message: 'must be at lear 10 char'}),
    benefits: z
        .object({
        benefit: z
            .string(),
        description: z
            .string()
    }).array().nonempty({
        message: 'Required benefits must be at least 1 benefits'
    })
})
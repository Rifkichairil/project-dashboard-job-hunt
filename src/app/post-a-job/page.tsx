"use client"

import { jobFormSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeftIcon, Link } from 'lucide-react';
import React, { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Separator } from "@/components/ui/separator"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import FieldInput from '@/components/organisms/FieldInput';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { JOBTYPES } from '@/constants';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import InputSills from '@/components/organisms/InputSkills';
import CKEditor from '@/components/organisms/CKEditor';
import InputBenefits from '@/components/organisms/InputBenefits';
import { Button } from '@/components/ui/button';


interface  PostJobPageProps {
  // Add your component props here
}

const PostJobPage: FC<PostJobPageProps> = ({}) => {
    const [editorLoaded, setEditorLoaded ] = useState<boolean>(false)

    const form = useForm<z.infer<typeof jobFormSchema>>({
        resolver: zodResolver(jobFormSchema),
        defaultValues: {
            requiredSkills: [],
        },
    });

    const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
        console.log(val);
    }

    useEffect(() => {
        setEditorLoaded(true)
    }, [])

    return (
        <div>
            {/* Edit the content within the JSX tags */}
            <div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
                <ArrowLeftIcon className='w7 h-7' />
                <span className='text-2xl font-semibold'> Post A Job</span>
            </div>
            <div className="my-5">
                <div className="text-lg font-semibold">Basic Information</div>
                <div className="text-gray-400">List out your top persk and benefits </div>
            </div>
            <Separator />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='mt-5 space-y-6 pt-6'>
                    {/* Jobtitle */}
                    <FieldInput title='Job Title' subtitle='Job title must be describe one position'>
                    <FormField
                        control={form.control}
                        name="roles"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className='w-[450px]' placeholder="e.g Software Engineer" {...field} />
                                </FormControl>
                                <FormDescription>
                                    at least 80 char
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    </FieldInput>
                    
                    {/* Typpe */}
                    <FieldInput title="Type of employment" subtitle='You can select multiple of employment'>
                    <FormField
                        control={form.control}
                        name="jobType"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >

                                    {JOBTYPES.map((item:string, i:number) => (
                                        <FormItem key={item + i} className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value={item} />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {item}
                                            </FormLabel>
                                        </FormItem>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </FieldInput>

                    {/* Salary */}
                    <FieldInput title="Salary" subtitle='Please specify the estimated salary range for the role'>
                        <div className="w-[450px] flex flex-row justify-between items-center">
                        <FormField
                            control={form.control}
                            name="jobSalaryFrom"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input className='w-full' placeholder="$100" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <span className='text-center'>To</span>
                        <FormField
                            control={form.control}
                            name="jobSalaryTo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input className='w-full' placeholder="$1000" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                    </FieldInput>

                    {/* Category */}
                    <FieldInput title="Categories" subtitle='You can select multiple of category'>
                        <FormField
                            control={form.control}
                            name="categoryId"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Select Job categoriees</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger className='w-[450px]'>
                                        <SelectValue placeholder="Select Job categoriees" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </FieldInput>

                    {/* Skills */}
                    <FieldInput title='Skills' subtitle='Add skill for job'>
                        <InputSills form={form}/>
                    </FieldInput>

                    {/* Job Desc */}
                    <FieldInput title='Job Description' subtitle='Job title must be describe one position'>
                        <CKEditor form={form} name="jobDescription" editorLoaded={editorLoaded} />
                    </FieldInput>

                    {/* Responsibility */}
                    <FieldInput title='Responsibility' subtitle='Describe Responsibility'>
                        <CKEditor form={form} name="responsibility" editorLoaded={editorLoaded} />
                    </FieldInput>

                    {/* whoYouAre */}
                    <FieldInput title='Who You Are' subtitle='Describe whoYouAre'>
                        <CKEditor form={form} name="whoYouAre" editorLoaded={editorLoaded} />
                    </FieldInput>

                    {/* niceToHave */}
                    <FieldInput title='Nice to Have' subtitle='Describe niceToHave'>
                        <CKEditor form={form} name="niceToHave" editorLoaded={editorLoaded} />
                    </FieldInput>
                    
                    {/* benefits */}
                    <FieldInput title='Perks and Benefits' subtitle='Encorage more people'>
                        <InputBenefits form={form}/>
                    </FieldInput>

                    <div className="flex justify-end">
                        <Button size="lg"> Do a Review</Button>
                    </div>

                </form>
            </Form>
        </div>
    );
}

export default PostJobPage;
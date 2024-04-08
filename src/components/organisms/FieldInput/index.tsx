import { Separator } from '@/components/ui/separator';
import React, { FC, ReactNode } from 'react'

interface  FieldInputProps {
  // Add your component props here
  children: ReactNode,
  title: string;
  subtitle: string
}

const FieldInput: FC<FieldInputProps> = ({children, title, subtitle}) => {
    return (
        <>
            <div className='flex flex-row items-start'>
                {/* Edit the content within the JSX tags */}
                <div className="w-[35%]">
                    <div className="font-semibold">{title}</div>
                    <div className="text-gray-400 w-80">{subtitle}</div>
                </div>
                {children}
            </div>
            <Separator />
        </>
    );
}

export default FieldInput;
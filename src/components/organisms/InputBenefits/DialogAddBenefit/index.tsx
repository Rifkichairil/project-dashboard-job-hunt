import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusIcon } from 'lucide-react';
import React, { FC, useRef } from 'react'

interface  DialogAddBenefitProps {
  // Add your component props here
  updateBenefits: (item:any) => void;
}

// const DialogAddBenefit: FC<DialogAddBenefitProps> = ({  }) => {
//     return (
//         <div>
//             {/* Edit the content within the JSX tags */}
//         </div>
//     );
// }

export default function DialogAddBenefit({updateBenefits} : DialogAddBenefitProps) {
    const benefitRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    const handleSaveBenefit = () => {
        const benefit = benefitRef.current?.value;
        const description = descriptionRef.current?.value;

        if (benefit == '' || description == '') {
            return;
        }

        updateBenefits({
            benefit,
            description
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button type='button' variant={"outline"}>
                    <PlusIcon className='h-4 w-4 mr-2' />
                    Add Benefits
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:mas-2-[425px]">
                <DialogHeader>
                <DialogTitle>Add Benefit</DialogTitle>
                <DialogDescription>
                    Make a new benegit, click save button when your done.
                </DialogDescription>
                </DialogHeader>
                <div className="space-y-8 mb-5">
                    <div className="">
                        <Label htmlFor='benefit'>Benefit</Label>
                        <Input
                            id='benefit'
                            placeholder='fill your benefit'
                            ref={benefitRef}
                            />
                    </div>
                    <div className="">
                        <Label htmlFor='description'>Description</Label>
                        <Textarea
                            id='description'
                            placeholder='fill your description'
                            ref={descriptionRef}
                            />
                    </div>
                </div>
                <DialogFooter>
                    <Button type='button' onClick={handleSaveBenefit}>
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};
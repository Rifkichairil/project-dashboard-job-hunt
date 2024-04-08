import { FormField, FormItem, FormMessage } from '@/components/ui/form';
import React, { FC, useEffect, useRef } from 'react'

interface  CKEditorProps {
  form: any;
  name: any;
  editorLoaded?: boolean;
}

const CKEditor: FC<CKEditorProps> = ({ form, name, editorLoaded }) => {
    const editoRef = useRef<any>();
    const { CKEditor, ClassicEditor } = editoRef.current || {};

    useEffect(() => {
        editoRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        }
    }, []);

    return (
        <>
            {editorLoaded ? (
                <div className="">
                    <CKEditor
                        editor={ClassicEditor}
                        data={form.getValues(name)} 
                        onChange = {(event: any, editor: any) => {
                            const data = editor.getData();
                            form.setValue(name, data)
                        }}
                    />
                    <FormField 
                        control={form.control}
                        name={name}
                        render={({ field }) => (
                            <FormItem>
                                <FormMessage className='mt-3' />
                            </FormItem>
                        )}
                    />
                </div>
            ) : (
                <div className="">Loading ... </div>
            )}
        </>
    );
};

export default CKEditor;
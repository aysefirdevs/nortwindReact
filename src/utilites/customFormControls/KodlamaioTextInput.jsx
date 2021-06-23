import { useField } from 'formik'
import React from 'react'
import { FormField,Label } from 'semantic-ui-react'

export default function KodlamaioTextInput({...props}) {  
   // console.log(props)
   //reflect api
   const [field, meta] = useField(props)
   //console.log(meta)   //jsde !! metin varsa true yoksa false demek
    return (
        <FormField error={meta.touched && !!meta.error}>  
            <input {...field} {...props}/>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ):null}
        </FormField>
    )
}

import React from 'react'
import { Formik , Form , Field,ErrorMessage} from 'formik'
import * as Yup from "yup";
import { FormField , Button, Label} from 'semantic-ui-react';
import KodlamaioTextInput from '../utilites/customFormControls/KodlamaioTextInput';

export default function ProductAdd() {
    const initialValues = {productName:"", unitPrice:10}

    const schema = Yup.object({         // yup doğrulama yapmamızı sağlayan bi yapı
        productName: Yup.string().required("ürün adı zorunlu"),  //metinsel girilecek ve zorunlu alan
        unitPrice : Yup.number().required("ürün fiyatı zorunlu")
    })  

    return (
        <Formik 
            initialValues = {initialValues} 
            validationSchema = {schema} 
            onSubmit={(values)=>{  
                console.log(values)
            }}
            >
            <Form className="ui form">
                <KodlamaioTextInput name="productName" placeholder="Ürün Adı"/>
                <KodlamaioTextInput name="unitPrice" placeholder="unitPrice"/>
                <Button color="green" type="submit">Ekle</Button>
            </Form>
        </Formik>
    
    );
}

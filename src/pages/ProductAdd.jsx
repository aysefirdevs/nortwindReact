import React from 'react'
import { Formik , Form , Field} from 'formik'
import * as Yup from "yup";
import { FormField , Button} from 'semantic-ui-react';

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
                <FormField>
                    <Field name="productName" placeholder="Ürün Adı"></Field>
                </FormField>
                <FormField>
                    <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
                </FormField>
                <Button color="green" type="submit">Ekle</Button>
            </Form>
        </Formik>
    
    );
}

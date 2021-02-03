import { Formik,  useFormik } from 'formik';
import React from 'react'
import { View } from 'react-native'

import AppForm from './AppForm';
import * as Yup from "yup";
import AppFormField from './AppFormField';
import SubmitButton from './SubmitButton';
import { Button } from 'react-native-paper';


export default function Form() {
    
   
    const handleLoginPress = ({ email, password }:any) => {
        console.log(email, ':',password)
        
        };

  const validationSchema = Yup.object().shape({
   email: Yup.string().required("Please enter your email"),
    password: Yup.string().required("A password is required"),
  });
    return (
        <View style={{  marginTop: 240, flex:1}}>
            <AppForm
        initialValues={{ debtor_number: "", user_number: "", password: "" }}
        onSubmit={(values:any) => handleLoginPress(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          placeholder="email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          placeholder="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>           
        </View>
    )
}


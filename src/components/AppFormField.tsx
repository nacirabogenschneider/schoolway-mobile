import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";


function AppFormField({ name,  ...otherProps }:any) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        label={name}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        // error={touched[name] && Boolean(errors[name])}
        {...otherProps}
        
      />
      {/* <ErrorMessage error={errors[name]} visible={touched[name]} /> */}
    </>
  );
}

export default AppFormField;
import React from "react";
import { Formik } from "formik";

interface PropsValues{
    initialValues: any,
    onSubmit: any,
    validationSchema: any,
    children: any

}

function AppForm({ initialValues, onSubmit, validationSchema, children }:PropsValues) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
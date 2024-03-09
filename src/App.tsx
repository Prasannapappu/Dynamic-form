// App.tsx
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import formData from './formData.json';
import FormSection from './FormSection';

const validationSchema = Yup.object().shape({
  candidate_name: Yup.string().required('Required'),
  candidate_email: Yup.string().email('Invalid email').required('Required'),
  candidate_phone: Yup.string().required('Required'),
  candidate_location: Yup.string().required('Required'),
  marital_status: Yup.string().required('Required'),
  education_level: Yup.string().required('Required'),
  institute_name: Yup.string().required('Required'),
  completed_year: Yup.string()
    .required('Required')
    .matches(/^(19[7-9]\d|20[0-1]\d)$/, 'Must be between 1970 and 2010'),
  company_name: Yup.string().required('Required'),
  designation: Yup.string().required('Required'),
  start_year_month: Yup.string().required('Required'),
  end_year_month: Yup.string().required('Required'),
});

const initialValues: any = {};
formData.fields.forEach((field:any) => {
  initialValues[field.field_id] = '';
});

const App: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log(values); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4 text-center text-blue-500">{formData.form_header}</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            {formData.fields.map((field:any) => (
              <FormSection key={field.field_id} field={field} />
            ))}
           <div className='text-center'>
           <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mt-14"
            >
              Submit
            </button>
           </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default App;

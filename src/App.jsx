
import React, { useState, useEffect } from 'react';
import useForm from './customHooks/useFom.jsx';
import SummaryAndAdditionalPage from './pages/SummaryAndAdditonalPage.jsx';
import FormPage from './pages/FormPage.jsx';

const App = () => {
  const {
    formData, 
    isSubmit, 
    error, 
    handleChange, 
    handleSubmitEvent,
    additionalQuestions, 
  } = useForm({
    fullName: '',
    email: '',
    surveyTopic: "select",
    favoriteProgrammingLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: ''
  });

  return (
    <>
      {
        !isSubmit && 
        <FormPage
            formData = {formData}
            additionalQuestions = {additionalQuestions}
            handleChange={handleChange}
            handleSubmit={handleSubmitEvent}
            error={error}
        />
      }
      {
        isSubmit && 
        <SummaryAndAdditionalPage
          formData={formData}
          additionalQuestions={additionalQuestions}
          error={error}
        />
      }
    
    </>
    
  );
};

export default App;

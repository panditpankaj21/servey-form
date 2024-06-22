import Input from '../components/Input.jsx';
import TextArea from '../components/TextArea.jsx'
import Select from '../components/Select.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx'


const FormPage = ({
    formData,
    additionalQuestions,
    handleChange,
    handleSubmit,
    error
})=>{
    return(
    <div className="flex justify-center items-start h-full">
      <div className="w-[50%] h-max p-5 my-10 rounded-lg bg-white shadow-2xl">
      <h1 className="text-lg text-center font-bold mb-1">Enter Details</h1>
      <form onSubmit={handleSubmit}>
          <Input
              label="Full Name *"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder='John Warner'
          />
          {error.name==="name" && 
            <ErrorMessage mssg={error.message}/>}


          <Input
              label="Email *"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='John Warner'
          />
          {error.name==="email" && 
            <ErrorMessage mssg={error.message}/>}


            <Select
                label="Survey Topic *"
                name="surveyTopic"
                onChange={handleChange}
                options={["technology", "health", "education"]}
            />
            {error.name==="surveyTopic" && 
                <ErrorMessage mssg={error.message}/>}

        {formData.surveyTopic === 'technology' && (
            <div>
                <Select
                    label="Favorite Programming Language *"
                    name="favoriteProgrammingLanguage"
                    onChange={handleChange}
                    options={["javascript", "python", "java", "c#"]}
                />
                {error.name==="favoriteProgrammingLanguage" && 
                <ErrorMessage mssg={error.message}/>}

              <Input
                  label="Years of Experience *"
                  type="number"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  placeholder='e.g 2'
              />
              {error.name==="yearsOfExperience" && 
                <ErrorMessage mssg={error.message}/>}
            </div>
        )}

        {formData.surveyTopic === 'health' && (
          <div>
            <Select
                label="Exercise Frequency *"
                name="exerciseFrequency"
                onChange={handleChange}
                options={["daily", "weekly", "monthly", "rarely"]}
            />
            {error.name==="exerciseFrequency" && 
            <ErrorMessage mssg={error.message}/>}


            <Select
                label="Diet Preference *"
                name="dietPreference"
                onChange={handleChange}
                options={["vegetarian", "vegan", "non-vegetarian"]}
            />
            {error.name==="dietPreference" && 
              <ErrorMessage mssg={error.message}/>}

          </div>
        )}

        {formData.surveyTopic === 'education' && (
          <div >
            <Select
                label="Highest Qualification *"
                name="highestQualification"
                onChange={handleChange}
                options={["high-school", "bachelor's", "master's", "phd"]}
            />
            {error.name==="highestQualification" && 
              <ErrorMessage mssg={error.message}/>}

            <Input
                label="Field of Study *"
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                placeholder='John Warner'
            />
            {error.name==="fieldOfStudy" && 
              <ErrorMessage mssg={error.message}/>}
            
          </div>
        )}

        <TextArea
          label="Feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
        {error.name==="feedback" && 
          <ErrorMessage mssg={error.message}/>}

        <button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-5 rounded-md mt-4">Submit</button>
      </form>

      </div>
    </div>
    )
}

export default FormPage
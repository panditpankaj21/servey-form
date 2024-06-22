import LabelValueDisplay from "../components/LabelValueDisplay.jsx"
import Input from "../components/Input.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

function SummaryAndAdditionalPage({
    formData,
    additionalQuestions,
    error
}){
    return(
        <div className="h-full bg-gray-200 flex justify-center w-full">
            <div className=" bg-white w-1/2 h-max mt-14 p-7 shadow-2xl rounded-lg mb-5">
                <h2 className="text-2xl text-center font-bold mb-4">Summary 🙂</h2>


                <LabelValueDisplay
                    label = "Full Name :"
                    value={formData.fullName}
                />
                <LabelValueDisplay
                    label = "Email :"
                    value={formData.email}
                />
                <LabelValueDisplay
                    label = "Survey Topic :"
                    value={formData.surveyTopic}
                />
                {(formData.surveyTopic === "technology") &&
                    <>
                        <LabelValueDisplay
                            label = "Favorite Programming Language :"
                            value={formData.favoriteProgrammingLanguage}
                        />
                        <LabelValueDisplay
                            label = "Years Of Experience :"
                            value={formData.yearsOfExperience}
                        />
                    </>
                }

                {(formData.surveyTopic === "health") &&
                    <>
                        <LabelValueDisplay
                            label = "Exercise Frequency :"
                            value={formData.exerciseFrequency}
                        />
                        <LabelValueDisplay
                            label = "Diet Preference :"
                            value={formData.dietPreference}
                        />
                    </>
                }

                {(formData.surveyTopic === "education") &&
                    <>
                        <LabelValueDisplay
                            label = "Highest Qualification :"
                            value={formData.highestQualification}
                        />
                        <LabelValueDisplay
                            label = "Field Of Study :"
                            value={formData.fieldOfStudy}
                        />
                    </>
                }


                {additionalQuestions?.length > 0 && (
                    <div className="mt-8">
                    <h2 className="text-2xl text-center font-bold mb-4">Additional Questions</h2>
                    {
                        
                        additionalQuestions.map((question, index) => 
                            <Input
                                key={index}
                                type='text'
                                name={`question_${index}`}
                                label={question.question}
                            />
                    )}
                    </div>
                )}
                {error.name==="additional" && 
                    <div className="mt-4"> 
                        <ErrorMessage mssg={error.message}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default SummaryAndAdditionalPage;
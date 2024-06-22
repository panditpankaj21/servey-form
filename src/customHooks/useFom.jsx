import { useState } from "react"
import axios from "axios";

const useForm = (initialState) =>{
    const [isSubmit, setIsSubmit] = useState(false);

    const [error, setError] = useState({
        name: '',
        message: ''
    })

    const [formData, setFormData] = useState(initialState);
    const [additionalQuestions, setAdditionalQuestions] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]:value,
        }));
        
    };

    const handleSubmitEvent =  async (event)=>{
        event.preventDefault();
        
        //validation

        if(formData.fullName===""){
            setError(prev => ({
              ...prev,
              name:"name",
              message: "Name is Required!"
            }));
            return;
        }

        if(formData.email===""){
            setError(prev => ({
              ...prev,
              name:"email",
              message: "Email is Required!"
            }));
              return;
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
            setError(prev => ({
                ...prev,
                name: "email",
                message: "Please enter a valid email!"
            }))
            return;
        }

        if(formData.surveyTopic==="select"){
            setError(prev => ({
                ...prev, 
                name: "surveyTopic",
                message: "Servey Topic is required!"
            }))
            return;
        }

        if(formData.surveyTopic==="technology"){
            if(formData.favoriteProgrammingLanguage===""){
                setError(prev => ({
                    ...prev,
                    name:"favoriteProgrammingLanguage",
                    message: "Favorite Programming Language is Required!"
                }))
                return;
            }
            if(formData.yearsOfExperience===""){
                setError(prev => ({
                    ...prev,
                    name: "yearsOfExperience",
                    message: "Years Of Experience is Required!"
                }))
                return;
            }
        }else if(formData.surveyTopic==="health"){
            if(formData.exerciseFrequency===""){
                setError(prev => ({
                    ...prev,
                    name: "exerciseFrequency",
                    message: "Exercise Frequency is Required!"
                }))
                return;
            }
            if(formData.dietPreference===""){
                setError(prev => ({
                    ...prev,
                    name: "dietPreference",
                    message: "Diet Preference is Required!"
                }))
                return;
            }
        }else{
            if(formData.highestQualification===""){
                setError(prev => ({
                    ...prev,
                    name: "highestQualification",
                    message: "Highest Qualification is Required"
                }))
                return;
            }
            if(formData.fieldOfStudy===""){
                setError(prev=>({
                    ...prev,
                    name: "fieldOfStudy",
                    message: "Field Of Study is Required!"
                }))
                return;
            }
        }

        if(formData.feedback==="" || formData.feedback.length < 50){
            setError(prev => ({
                ...prev,
                name: "feedback",
                message: "Feedback is Required and it should be length of 50"
            }))
            return;
        }


        setIsSubmit(true);
        let category;
        if(formData.surveyTopic==="technology"){
            category = 18;
        }else if(formData.surveyTopic==="health"){
            category = 17;
        }else{
            category = 9;
        }

        try {
            const response = await axios.get(`https://opentdb.com/api.php?amount=4&category=${category}`);
            setAdditionalQuestions(response.data.results);
        } catch (error) {
            console.error('Error fetching additional questions:', error);
            setError(prev => ({
                ...prev,
                name: "additional",
                message: "Sorry 😔,Error fetching additional questions"
            }))
            return;
        }

        setError(prev => ({
            ...prev,
            name:"",
            message: ""
        }));
        
    }

    return{
        formData,
        isSubmit,
        error,
        handleChange,
        handleSubmitEvent,
        additionalQuestions,

    }
}

export default useForm
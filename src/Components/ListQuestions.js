import { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function ListQuestion(){

    const [questions,setQuestions] = useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        fetchQuestions();
    },[])

    function fetchQuestions(){
        axios.get(`http://localhost:5001/questions`)
        .then(response=>{
            setQuestions(response.data);
        })
        .catch(error=>{
            console.log("Error occured when fetching the questions",error);
        })
    }


    function handleDelete(id) {
        const confirmed = window.confirm("Are you sure you want to delete this question?");//Added popup alert
        if (confirmed) {
            axios.delete(`http://localhost:5001/questions/${id}`)
                .then(() => {
                    // setSuccessMessage("Question is deleted successfully.");
                    fetchQuestions();
                    // navigate("/listquestions");
                })
                .catch(error => {
                    console.log('There was an error deleting the question data!', error);
                });
        }
    }

    return(
        <div className="container">
            <h2 className="border-bottom pb-2 mb-0" style={{"fontWeight":600, "fontFamily":"monospace", "marginTop":40}}>Questions</h2>
            <div className="my-5 p-3 bg-body rounded shadow-sm">
                {questions.map(question=>(
                    <div className="d-flex text-body-secondary pt-3">  
                        <div className="pb-4 mb-0 small lh-sm border-bottom w-100">
                            <div className="d-flex justify-content-between">
                                <strong className="text-gray-dark" style={{"fontSize":18, "fontFamily":"monospace"}}>{question.id}: {question.questiontext}</strong>
                            </div><br/>
                            <div class="d-flex justify-content-between">
                                <button className="btn btn-secondary" onClick={()=>{navigate(`/readquestion/${question.id}`)}} style={{'float':"inline-end", "width":350}}>View</button>
                                <button className="btn btn-warning" onClick={()=>{navigate(`/updatequestion/${question.id}`)}}style={{'float':"inline-end", "width":350}}>Update</button>
                                <button className="btn btn-danger" onClick={()=>{handleDelete(question.id)}}style={{'float':"inline-end", "width":350}}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListQuestion;
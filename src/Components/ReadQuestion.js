import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ReadQuestion() {
    const { id } = useParams();
    const [question, setQuestion] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        fetchQuestion();
    });

    function fetchQuestion() {
        axios.get(`http://localhost:5001/questions/${id}`)
            .then(response => {
                setQuestion(response.data);
            })
            .catch(error => {
                console.log('There was an error fetching the Questions data!', error);
            });
    }

    return (
        <div className="container mt-4">
            <h2>Question Details</h2>
            <div className="row">
                {question ? (
                    <div className="col-md-12" key={question.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Question No: {question.id}</h5>
                                <p className="card-text">Question Text: {question.questiontext}</p>
                                <div className="card-text">
                                    {question.options.map((option, index) => (
                                        <p key={index}>Option {index + 1}: {option}</p>
                                    ))}
                                </div>
                                <p className="card-text">Correct Answer: {question.correctanswer}</p>
                                <p className="card-text">Category: {question.category}</p>
                                <button type="button" className="btn btn-info" onClick={() => navigate('/listquestions')}>Go back</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default ReadQuestion;

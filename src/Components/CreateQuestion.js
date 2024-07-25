import './CreateQuestion.css'
import { useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateQuestion(){
    const navigate =useNavigate();
    const formik = useFormik(
        {
            initialValues: {
                questiontext:'',
                options: ['', '', '', ''],
                correctanswer:'',
                category:'',
               
            },
            validationSchema: Yup.object({
                questiontext: Yup.string().required('Question Text is required'),
                options: Yup.array().of(Yup.string()).required('Option is required'),
                correctanswer: Yup.string().required('Correct answer is required'),
                category: Yup.string().required('Category is required'),
            })
            ,
            onSubmit:(values , {setSubmitting, resetForm , setStatus})=> {
                axios.post('http://localhost:5001/questions',values)
                    .then(response => {
                        setStatus('success');
                        resetForm();
                        navigate('/listquestions');
                    })
                    .catch(error => {
                        setStatus('error');
                    })
                    .finally(()=>{
                        setSubmitting(false);
                    });
            },
        });


        return (
            <div className='container mt-5' style={{"alignText":"center"}}>
                <h3>Add New Question</h3><br/><br/>
                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='questiontext' className='form-label'>QuestionText</label>
                        <input
                            id="questiontext"
                            name="questiontext"
                            type="text"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.questiontext}
                            data-testid="questiontext"
                        />

                        {
                            formik.touched.questiontext && formik.errors.questiontext  ? <div className='text-danger'>{formik.errors.questiontext}</div>
                            : null
                        }  
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='options' className='form-label'>Options</label>
                        {formik.values.options.map((option, index) => (
                        <div key={index} className="mb-2">
                            <input
                            id={`option${index}`}
                            name={`options[${index}]`}
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={option}
                             data-testid="options"
                            />
                        {
                            formik.touched.options && formik.errors.options ? <div className='text-danger'>{formik.errors.options}</div>
                            : null
                        } 
                        </div>
                        ))}
                    </div>
    
                    <div className='mb-3'>
                        <label htmlFor='correctanswer' className='form-label'>CorrectAnswer</label>
                        <input
                            id="correctanswer"
                            name="correctanswer"
                            type="text"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.correctanswer}
                            data-testid="correctanswer"
                        />
    
    
                        {
                            formik.touched.correctanswer && formik.errors.correctanswer ? <div className='text-danger'>{formik.errors.correctanswer}</div>
                            : null
                        }  
                    </div>
    
                    <div className='mb-3'>
                        <label htmlFor='category' className='form-label'> Category</label>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.category}
                            data-testid="category"
                        />
                        {
                            formik.touched.category && formik.errors.category ? <div className='text-danger'>{formik.errors.category}</div>
                            : null
                        }  
                    </div>
    
                    <button  type='submit' className='btn btn-success' disabled={formik.isSubmitting}>
                        Add
                    </button>

                    {
                        formik.status && formik.status ===  'success' && (
                            <span data-testid='response' className='text-success' >Success</span>
                        )
                    }
    
    
                    {
                        formik.status && formik.status ===  'error' && (
                            <span data-testid='response' className='text-danger' >Error</span>
                        )
                    }
    
                </form>
            </div>
        )
}

export default CreateQuestion;
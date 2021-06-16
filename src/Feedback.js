import React, { useState } from 'react';

const Feedback = () => {
    // Instead of creating each method on its own, we define a set of values to declare the state variables
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
        uploadedFiles: [],
        buttonText: 'Submit',
        uploadedPhotos: 'Upload Files',
    })
    //We need a destructor to simplify things so that we can call the value by (.name)
    const { name, email, phone, message, uploadedFiles, buttonText, uploadedPhotos } = values

    //Event Handlers
    const handleChange = (name) => event => {
        setValues({
            ...values, [name]: event.target.value
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values, buttonText: 'Sending...' })
        //now sending values to the backend
        console.table({ name, email, phone, message, uploadedFiles });
    };

    //Now lets start creating the form
    const feedbackform = () => (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label className="text-muted">Description</label>
                    {/* here we have onChange handler to grab the message value in the description to send it to the backend */}
                    <textarea type="text" onChange={handleChange('message')} className="form-control" value={message} required></textarea>
                </div>
                <div class="form-group">
                    <label className="text-muted">Name</label>
                    <input className="form-control" type="text" onChange={handleChange('name')} value={name} required />
                </div>
                <div class="form-group">
                    <label className="text-muted">Email</label>
                    <input className="form-control" type="email" onChange={handleChange('email')} value={email} required />
                </div>
                <div class="form-group">
                    <label className="text-muted">Phone</label>
                    <input className="form-control" type="number" onChange={handleChange('phone')} value={phone} required />
                </div>
                <div>
                    {/* we use {buttonText} since we already define it as "Submit" */}
                    <button className="btn btn-primary btn-block" style={{ marginTop: 15, }}>{buttonText}</button>
                </div>
            </form>

        </React.Fragment>
    )
    return (
        <div>
            {feedbackform()}
        </div>
    )
}

export default Feedback;

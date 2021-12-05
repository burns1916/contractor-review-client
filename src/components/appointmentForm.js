const AppoinmentForm = (props) => {

    const { onChange, onSubmit, jobName, jobDescription, appointmentTime} = props

    return(
        <>
            <form onSubmit={onSubmit}>
                <label for="Job Name">Job Name</label>
                    <input type="text" placeholder="Job Name" name="jobName" value={jobName} onChange={onChange} />
                <label for="Job Description">Job Description</label>
                    <input type="text" placeholder="Job Description" name="jobDescription" value={jobDescription} onChange={onChange} />
                <label for="Appointment Time">Appointment Time</label>
                    <input type="text" placeholder="Appointment Time" name="appointmentTime" value={appointmentTime} onChange={onChange} />
            </form>
        </>
    )
}

export default AppoinmentForm
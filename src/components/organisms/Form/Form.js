import React, {useState, useContext} from 'react';
import {StyledTitle, Wrapper} from '../UsersList/UserList.styled';
import FormField from 'components/molecules/FormField/FormField';
import {Button} from '../../atoms/Button/Button';
import {UsersContext} from "providers/UsersProviders";


const Form = () => {
    const initialFormState = {
        name: '',
        attendance: '',
        average: '',
    };
    const {handleAddUser} = useContext(UsersContext);

    const [formValues, setFormValues] = useState(initialFormState);

    const handleInputChange = (e) => {
        console.log(formValues);
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitUser = (e) => {
        e.preventDefault();
        handleAddUser(formValues)
        setFormValues(initialFormState);
    }

    return (

                <Wrapper as="form" onSubmit={handleSubmitUser}>
                    <StyledTitle>Add new student</StyledTitle>
                    <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange}/>
                    <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance}
                               onChange={handleInputChange}/>
                    <FormField label="Average" id="average" name="average" value={formValues.average}
                               onChange={handleInputChange}/>
                    <Button type="submit">Add</Button>
                </Wrapper>
    );
};

export default Form;

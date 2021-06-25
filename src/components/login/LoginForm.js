import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import * as Yup from 'yup'
import { loginFormSchema } from './formSchema'
import axiosWithAuth from '../../utils/axiosWithAuth'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useAlert } from 'react-alert'
import { ToastProvider, useToasts } from 'react-toast-notifications'

import { 
    FormContainer, 
    Input,
    Label, 
    Icon,
    LabelWrap, 
    LoginFormButton,
    Button
} from './loginStyles';

// const eye = <FontAwesomeIcon icon={faEye} />;

const initialFormValues = {
    username: '',
    password: ''
};

const initialFormErrors = {
    username: '',
    password: ''
};

export default function LoginFormInner() {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(false);
    const [passwordVis, setPasswordVis] = useState(false);
    const {addToast} = useToasts();
    const history = useHistory();
    const alert = useAlert();

    const onSubmit=(e) => {
        e.preventDefault();
        const credentials = {
            email: formValues.email,
            password: formValues.password
        };

        axiosWithAuth()
            .post(
                "", 
                credentials
            )
            .then((res) => {
                window.localStorage.setItem('token', res.data.token);
                history.push('/recommend');
            })
            .catch((err) => {
                alert.show(err.message);
            });
    };

    const onInputChange = (e) => {
        const {username, value} = e.target;
        Yup.reach(loginFormSchema, username)
            .valdiate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors, 
                    [username]: '',
                });
            })
            .catch((err) => {
                setFormErrors({
                    ...formErrors, 
                    [username]: err.errors[0]
                });
            });
        
        setFormValues({
            ...formValues, 
            [username]: value,
        });
    };

    const togglePasswordVis = () => {
        setPasswordVis(passwordVis ? false : true);
    };

    useEffect(() => {
        loginFormSchema.isValid(formValues).then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues]);

    return (
        <>
            <form className="form-wrap" onSubmit={onSubmit}>
                <div className="errors">
                  <div>{formErrors.email}</div>
                  <div>{formErrors.password}</div>
                </div>

                <FormContainer>
                    <LabelWrap>
                        <Label>
                            Username:&nbsp;
                            <Input 
                                value={formValues.username}
                                onChange={onInputChange}
                                name="username"
                                type="text"
                                placeholder="username"
                            />
                        </Label>
                    </LabelWrap>

                    <LabelWrap>
                        <Label>
                            Passowrd:&nbsp;
                            <Input  
                                value={formValues.password}
                                onChange={onInputChange}
                                name="password"
                                type={passwordVis ? "text" : "password"}
                            />
                            <Icon onClick={togglePasswordVis}>
                                {/* {eye} */}
                            </Icon>
                        </Label>
                    </LabelWrap>

                    <LoginFormButton>
                        <Button disabled={disabled}>Submit</Button>
                        <h4>Not a user?<Link className="links" to='/register'>Register here</Link></h4>
                    </LoginFormButton>
                </FormContainer>
            </form>  
        </>
    );
}

export function LoginForm() {
    return (
        <ToastProvider>
            <LoginFormInner />
        </ToastProvider>
    );
}

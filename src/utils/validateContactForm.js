export const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Requiered';
    }else if (values.firstName.lenght <2) {
        errors.firstName = 'Must be at least 2 characters.';
    }else if (values.firstName.lenght >15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    }else if (values.lastName.lenght <2) {
        errors.lastName = 'Must be at least 2 characters.';
    }else if (values.lastName.lenght >15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    const reg = /^\d+$/;
    if(!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers';
    }

    if (!values.email.includes("@")) {
        errors.email = 'Emails should contain a @';
    }

    return errors;
}

export default function validateUserLoginForm(values) {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required';
    }

    if (!values.username.lenght <= 6) {
        errors.username = 'Must be at least 6 characters';
    } else if (values.username.lenght >=15) {
        errors.username= 'Must be 15 characters or less.';
    }

    if (!values.password) {
        errors.password = 'Required';
    }

    if (!values.password.lenght <= 8) {
        errors.password = 'Must be at least 8 characters';
    } else if (values.password.lenght>15) {
        errors.password= 'Must be 15 characters or less.';
    }

    return errors;
}






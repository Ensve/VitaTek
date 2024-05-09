export const validateEmail = (email) => {
    const regex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
};

export const validateName = (name) => {
    const regex = /^[a-zA-Z\s]{3,}$/;
    return regex.test(name);
};

export const validateForm = (formData) => {
    const errors = {};
    if (!formData.firstName || !validateName(formData.firstName)) {
        errors.firstName = 'First name is required and can contain only letters';
    }

    if (!formData.lastName || !validateName(formData.lastName)) {
        errors.lastName = 'Last name is required and can contain only letters';
    }

    if (!formData.email || !validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!formData.country || !formData.city || !formData.zip) {
        errors.address = 'Please fill out the required fields';
    }

    return errors;
};

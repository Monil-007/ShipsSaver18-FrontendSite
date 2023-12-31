// Action Types
export const SET_FORM_DATA = 'SET_FORM_DATA';
export const SET_USER = 'SET_USER';

// Action Creators
export const setFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData,
    };
};
export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};


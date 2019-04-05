const todoForm = (state = {title:"toto",completed:true}, action) => {
    console.log(action);

    switch (action.type) {
        case 'UPDATE_FORM':
            // const s = Object.assign({...state},action.form_values);
            // return s;

            // const s = Object.assign(state,action.form_values);
            // return {...s}
            
            const s = Object.assign({},state,action.form_values);
            return s;
        default:
            return state
    }
}

export default todoForm;
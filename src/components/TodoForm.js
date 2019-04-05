import React from 'react';


export function TodoForm({values,handleChange,handleSubmit}){
    
    return (
        <form onSubmit={handleSubmit} name="todoForm">
            <div className="form-group">
                <label htmlFor="todoTitle">Todo title</label>
                <input type="text" name="title" value={values.title} onChange={handleChange} className="form-control" id="todoTitle" placeholder="Todo title"/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" name="completed" onChange={handleChange} checked={values.completed} className="form-check-input" id="todoCompleted"/>
                <label className="form-check-label" htmlFor="todoCompleted">Completed?</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>        
    )
}
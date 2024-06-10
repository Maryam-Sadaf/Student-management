const initialData ={
    list:[]
}
const TodoReducer=(state=initialData,action)=>{
    switch (action.type){
    case "ADD_TODO":

    const {id,data}=action.payload;
    return{
        ...state,
        data:[ 
            ...state.list,
            {
              id:id,
              data:data  
        }]
    }
    default:return state;
}

}
export default TodoReducer
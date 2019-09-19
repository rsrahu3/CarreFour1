const homeReducer = (state={data:[]},action)=>{
switch(action.type){
  case 'populate_data':
    return {...state,data:action.payload.data};
  case 'show_loader':
    return {...state,showLoader:action.payload.data};
  default:
    return {...state};
}
}
export default homeReducer;
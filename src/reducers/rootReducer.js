const initState = {
    posts: [
        {id: '1', title: 'yello cato', body:'meowemwoemwoemwoemwoeeeoow'},
        {id: '2', title: 'blak cato', body:'miaooooooooooooooooooooooo'},
        {id: '3', title: 'wite cato', body:'lollllllllllllllllllllllll'}
    ]
}


const rootReducer = (state = initState, action) =>{
    return state;
}

export default rootReducer
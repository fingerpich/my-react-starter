import firebase from 'firebase';

export function asyncIncrease() {
    return dispatch,getState => {
        dispatch({type: 'INCREASE'});
        return firebase.database().ref('/value').set(value,snap=>{
            const count = snap.val();
            dispatch({type: 'SET_VALUE',count})
        }).catch((error) => {
            console.log(error);
            dispatch({type: 'DECREASE'})
        });
        // return firebase.database().ref('/').once('value', snap => {
        //     const count = snap.val();
        //     dispatch({type: 'SET_VALUE',count})
        // })
    }
}

export function getRemoteValue() {
    return dispatch => {
        dispatch({type:'FETCH_VALUE_REQUEST'});
        return firebase.database().ref('/').once('value', snap => {
            const count = snap.val();
            dispatch({count,type:'SET_VALUE'})
        })
            .catch((error) => {
                console.log(error);
                dispatch({type:'FETCH_VALUE_REJECTED'});
            });
    }
}
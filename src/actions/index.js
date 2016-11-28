import axios from 'axios';

const ROOT_URL = 'http://localhost:3000'

export const FETCH_RESUME = "FETCH_SCRIPT";
export const LOAD_RESUME = "LOAD_RESUME";

export function fetchResumeOptimistic(props){
  return {
    type: LOAD_RESUME,
    payload: props
  }
}

export function fetchResume(){
  return function(dispatch){
  axios({
    method: 'get',
    url: `${ROOT_URL}/api/v1/resumes`,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    crossDomain: true
  }).then(response => {
    console.log(response)
    let props = response.data[0]
    dispatch(fetchResumeOptimistic(props))
  }).catch(err => {
    console.log(err)
  });
  return null;
  }
}

const INITIAL_STATE = {
  user_name: '',
  user_phone: '',
  user_email: '',
  job_objective: '',
  user_skills: '',
  employment_history_1: '',
  employment_history_2: '',
  education: ''
};


export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'LOAD_RESUME':
      return {
        user_name: '',
        user_phone: '',
        user_email: '',
        job_objective: '',
        user_skills: '',
        employment_history_1: '',
        employment_history_2: '',
        education: ''
      }
      default:
      console.log("no resume loaded")
      return state; 
  }
}

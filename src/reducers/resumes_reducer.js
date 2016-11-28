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
      console.log("LOAD_RESUME firing", action.payload)
      let user_profile = action.payload
      return {
        user_name: user_profile.user_name,
        user_phone: user_profile.user_phone,
        user_email: user_profile.user_email,
        job_objective: user_profile.job_objective,
        user_skills: user_profile.user_skills.split(/(Project Management: )/),
        employment_history_1: user_profile.employment_history_1.split(","),
        employment_history_2: user_profile.employment_history_2.split(","),
        education: user_profile.education.split(",")
      }
      default:
      console.log("no resume loaded")
      return state;
  }
}

import { combineReducers } from 'redux';
import ResumesReducer from './resumes_reducer';


const rootReducer = combineReducers({
  resume: ResumesReducer
})
export default rootReducer;

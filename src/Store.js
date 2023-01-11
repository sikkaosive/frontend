import {configureStore} from "@reduxjs/toolkit"
import { likeReducer } from "./reducers/Post"
import { allUsersReducer, postOfFollowingReducer, userReducer } from "./reducers/User"


const store= configureStore({
reducer:{
    user:userReducer,
    postOfFollowing:postOfFollowingReducer,
    allUsers: allUsersReducer,
    like:likeReducer
}
})
export default store
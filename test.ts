import * as functions from 'firebase-functions'

export const onMessageCreate = functions.database
.ref('/user/{user_id}').onCreate((snapshot, context)=>{
    const user_id = context.params.user_id
    const user_name = context.params.user_name
    console.log(`new user ${user_id} has name ${user_name}`)
    const data = {
        user_id : user_id,
        user_name : user_name,
        description : 'a new user'
    }
    var updates ={}
    updates['/users/' + user_id] = data
    snapshot.ref.update(updates)

    
})
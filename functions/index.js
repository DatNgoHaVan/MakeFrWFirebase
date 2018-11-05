const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
/*exports.onDataAdded = functions.database.ref('users/').onCreate(event => {
    const data = event.data.val();
    var uid = firebase.database().ref().child('user').push().key;
    console.log(uid);
    var newData = {
        user_id: uid,
        user_name: 'abcdef'
        
    };
    //return event.data.ref.child('copiedData').set(newData);
    var updates ={};
    updates['/users/' + uid] = newData;
    return firebase.database().ref().update(updates);

});*/
/*exports.onDataAdded = functions.database.ref('/user/{id}').onCreate(event => {
    const data = event.data.val();
    const newData = {
        msg: event.params.id + '-' + data.msg.toUpperCase()
    };
    return event.data.ref.child('copiedData').set(newData);
});*/


exports.makeTrigger = functions.database.ref('/user/{user_id}').onCreate((snapshot, context)=>{
    const user_id = context.params.user_id;
    const user_name = context.params.user_name;
    const original = snapshot.val();
    console.log('Uppercasing', context.params.user_id, original);
    const uppercase = original.toUpperCase();
    /*console.log(`new user ${user_id} has name ${user_name}`)
    const data = {
        user_id : user_id,
        user_name : user_name,
        description : 'a new user'
    };
    var updates ={};
    updates['/message/' + user_id] = data;*/
    //return firebase.database().ref().update(updates);
    return snapshot.ref.parent.child('uppercase').set(uppercase);

    
});

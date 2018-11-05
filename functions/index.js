const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.dataAddTestT = functions.database.ref('/message/{id}').onCreate((snapshot, context) =>{
    const data = snapshot.val();
    const newData = {
        msg: data.msg.toUpperCase()
    };
    return snapshot.ref.parent.child('copied').set(newData);

});
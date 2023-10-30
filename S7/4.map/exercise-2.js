const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
const names = users.map(function(user) {
    const userName = user.name;
    if(userName.charAt(0) === 'A') {
        user.name = 'Anacleto'
    }
    return user.name;
});
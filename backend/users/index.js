class ChatUsers {
    constructor(){
        this.users = {}
    }
    addUser(id, username){
        if(!id){
            throw("Can't create user without socket id")
        }
        if(!username){
            throw("Can't create user without username")
        }
        console.log(`New User ${username} created`)
        this.users[id]=username

        console.log(this.users)
    }

    getUserById(id){
        return this.users[id] ? this.users[id] : false
    }
}
const users = new ChatUsers()
module.exports = users
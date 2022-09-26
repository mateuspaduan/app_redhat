class ChatUsers {
    constructor(){
        this.users = []
    }
    addUser(id, username){
        if(!id){
            throw("Can't create user without socket id")
        }
        if(!username){
            throw("Can't create user without username")
        }
        const alreadyExists = this.users.findIndex((userObject)=>userObject.username === username)
        console.log(alreadyExists)
        if(alreadyExists == -1){
            console.log(`New User ${username} created`)
            this.users.push({username:username, id:id})
            console.log(this.users)
        }else{
            throw("Username already in chat")
        }
     
    }

    removeUser(username){
        console.log(`removing user ${username} `)
        this.users = this.users.filter(user=>user.username != username)
        console.log(this.users)
    }

    getUserById(id){
        const UserIndex = this.users.findIndex((user)=>user.id==id)
        return this.users[UserIndex]
    }
}
const users = new ChatUsers()
module.exports = users
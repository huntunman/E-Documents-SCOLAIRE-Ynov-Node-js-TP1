class user{
    constructor(id, name, password){
        this.id = id;
        this.name = name;
        this.password =password;
    }
}

const express =require('express');
const router = express.Router();

const users = [new user(1,'test', 'test1')];

router.get('/', (req, res)=>{
    res.send(users.name);
})

router.get('/:userID', (req, res)=>{
    u = users.find(user => user.id == parseInt(req.params.userId))
    if(u === undefined){
        res.send(`User not find.`)
    }else{
        res.send(`One user with name : ${u.name}`);
    }
});

router.post('/id:/name/password', (req,res)=>{
    i = parsInt(req.params.id)
    while(user.find(user.id == i) != undefined){
        i++
    }
    u = new user(i, req.params.id, req.params.password)
    users.push(u);
    res = new user (`${req.params.id}`, `${req.params.name}`, `${req.params.password}` );
    res.send(`Nouvel Utilisateur : ${user.name}`)
});

router.put('/:id/name/:name', (req, res)=>{
    u = users.find(user => user.id == parseInt(req.params.id));
    i =users.indexOf(u);
    users.splice(i, 1, new user(u.id, u.name, req.params.password));
    res.send(`Nouveau nom : ${req.params.name}`)
});

router.put('/:id/name/:password', (req, res)=>{
    u = users.find(user => user.id == parseInt(req.params.id));
    i =users.indexOf(u);
    users.splice(i, 1, new user(u.id, u.name, req.params.password))
    res.send(`Nouveau password : ${req.params.password}`)
});

router.delete('/:id/', (req, res)=>{
   u = users.find(user => user.id == parseInt(req.params.id));
   i =users.indexOf(u);
    if( i == undefined){
        res.send('User not found')
    }else{
        users.splice(i, 1);
        req.send(users)
    }
});

module.exports = router;





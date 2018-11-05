class list{
    constructor(id, name, user, items){
        this.id = id;
        this.name = name;
        this.user = user;
        this.items = items;
    }
}const express =require('express');
const router = express.Router();

const lists = [new list(1,'name', 'user', 'items')];

router.get('/', (req, res)=>{
    res.send(lists.label);
})

router.get('/:listID', (req, res)=>{
    u = lists.find(list => list.id == parseInt(req.params.listId))
    if(u === undefined){
        res.send(`list not find.`)
    }else{
        res.send(`One list with name : ${u.label}`);
    }
});

router.post('/:id/name/user/items', (req,res)=>{
    i = parsInt(req.params.id)
    while(item.find(item.id == i) != undefined){
        i++
    }
    u = new list (i, req.params.name, req.params.user, req.params.items)
    users.push(u);
    res = new list (`${req.params.id}`, `${req.params.name}`, `${req.params.user}`,`${req.params.items}` );
    res.send(`Nouvel Image : ${list.name}`)
});

router.put('/:id/:name/user/items', (req, res)=>{
    u = lists.find(list => list.id == parseInt(req.params.id));
    i =items.indexOf(u);
    lists.splice(i, 1, new list(u.id, req.params.name, u.image, u.description));
    res.send(`Nouveau nom : ${req.params.name}`)
});

router.put('/:id/name/:user/description', (req, res)=>{
    u = lists.find(list => list.id == parseInt(req.params.id));
    i = lists.indexOf(u);
    lists.splice(i, 1, new list(u.id, u.name, req.params.user, u.items));
    res.send(`Nouvel User : ${req.params.user}`)
});

router.put('/:id/name/user/:items', (req, res)=>{
    u = lists.find(list => list.id == parseInt(req.params.id));
    i = lists.indexOf(u);
    lists.splice(i, 1, new list(u.id, u.name, u.user, req.params.items))
    res.send(`Nouveaux items : ${req.params.items}`)
});

router.delete('/:id/', (req, res)=>{
   u = lists.find(list => list.id == parseInt(req.params.id));
   i = items.indexOf(u);
    if( i == undefined){
        res.send('User not found')
    }else{
        lists.splice(i, 1);
        req.send(lists)
    }
});

module.exports = router;
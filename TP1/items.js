class items{
    constructor(id, label, image, description){
        this.id = id;
        this.label = label;
        this.image = image;
        this.description = description;
    }
}

const express =require('express');
const router = express.Router();

const items = [new item(1,'label', 'image', 'Description')];

router.get('/', (req, res)=>{
    res.send(items.label);
})

router.get('/:imageID', (req, res)=>{
    u = items.find(item => item.id == parseInt(req.params.imageId))
    if(u === undefined){
        res.send(`Image not find.`)
    }else{
        res.send(`One image with name : ${u.label}`);
    }
});

router.post('/:id/label/image/description', (req,res)=>{
    i = parsInt(req.params.id)
    while(item.find(item.id == i) != undefined){
        i++
    }
    u = new item(i, req.params.label, req.params.image, req.params.description)
    users.push(u);
    res = new item (`${req.params.id}`, `${req.params.label}`, `${req.params.image}`,`${req.params.description}` );
    res.send(`Nouvel label : ${item.label}`)
});

router.put('/:id/:label/image/description', (req, res)=>{
    u = items.find(item => item.id == parseInt(req.params.id));
    i =items.indexOf(u);
    users.splice(i, 1, new item(u.id, req.params.label, u.image, u.description));
    res.send(`Nouveau label : ${req.params.label}`)
});

router.put('/:id/label/:image/description', (req, res)=>{
    u = items.find(user => item.id == parseInt(req.params.id));
    i =items.indexOf(u);
    users.splice(i, 1, new item(u.id, u.label, req.params.image, u.description));
    res.send(`Nouveau label : ${req.params.image}`)
});

router.put('/:id/label/image/:description', (req, res)=>{
    u = items.find(user => user.id == parseInt(req.params.id));
    i = items.indexOf(u);
    item.splice(i, 1, new item(u.id, u.label, u.image, req.params.description))
    res.send(`Nouveau password : ${req.params.description}`)
});

router.delete('/:id/', (req, res)=>{
   u = items.find(item => item.id == parseInt(req.params.id));
   i = items.indexOf(u);
    if( i == undefined){
        res.send('User not found')
    }else{
        users.splice(i, 1);
        req.send(items)
    }
});

module.exports = router;

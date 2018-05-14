import { Router } from 'express';
import Table from '../table';
let router = Router();

let blogs = new Table('blogs');

router.get('/', (req, res) => {

    blogs.getAll()
    .then(result => {
        console.log('getting all blogs');
        
        res.json(result);
    });

});

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    blogs.getOne(id)
    .then(result => {
        res.json(result);
    });

});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    blogs.delete(id)
    .then(result => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err)
    })

});


router.post('/', (req, res) => {
    console.log('posting some blogs');
    console.log(req.body);
    blogs.insert(req.body)
    .then((result) => {
        res.sendStatus(200); 
    }).catch((err) => {
        console.log(err)
    })
});


router.put('/:id', (req, res) => {
    let id = req.params.id;
    blogs.update(id, req.body)
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err)
    })
})


export default router;
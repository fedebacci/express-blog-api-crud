// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO





let { posts } = require('../data/db');





const index = (req, res) => {

    let { title, content, tags } = req.query
    tags = tags.split(', ');

    console.log(`title`, title);
    console.log(`typeof(title)`, typeof(title));
    console.log(`content`, content);
    console.log(`typeof(content)`, typeof(content));
    console.log(`tags`, tags);
    console.log(`typeof(tags)`, typeof(tags));


    res.json({
        success: true,
        description: "Lista dei post",
        posts
    });
};



const show = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    
    if (!post) {
        res
            .status(404)
            .json({
                description: "Visualizzazione dettagli del post " + id + " fallita: Post non trovato"
            });

        return;
    };

    res.json({
        success: true,
        description: `Visualizzazione dettagli del post ${id}`,
        posts
    });
};



const create = (req, res) => {
    res.json({
        success: true,
        description: `Creazione di un nuovo post`,
        posts
    });
};




const update = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res
            .status(404)
            .json({
                description: "Modifica totale del post " + id + " fallita: Post non trovato"
            });
            
        return;
    };

    res.json({
        success: true,
        description: `Modifica totale del post ${id}`,
        posts
    });
};




const modify = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res
            .status(404)
            .json({
                description: "Modifica parziale del post " + id + " fallita: Post non trovato"
            });
            
        return;
    };

    res.json({
        success: true,
        description: `Modifica parziale del post ${id}`,
        posts
    });
};




const destroy = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res
            .status(404)
            .json({
                description: "Cancellazione del post " + id + " fallita: Post non trovato"
            });
            
        return;
    };



    posts = posts.filter(post => post.id !== id);
    console.log("posts DOPO LA RIMOZIONE:", posts);

    res
        // * STATUS "OK (SENZA CONTENUTO)" perchè non ho contenuto da mostrare indietro
        .status(204)
        .send();
};




module.exports = {
    index, show, create, update, modify, destroy
};
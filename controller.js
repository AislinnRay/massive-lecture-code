module.exports = {
     addMovies: (req, res) => {
            //bring in what you need for the function
            const {movieName} = req.body;

            //get the database
            const db = req.app.get('db');

            //run your sql query
            db.add_movie(movieName)
            .then(movies => res.status(200).send(movies))
            .catch(err => res.status(500).send(err));
    },
    getMovies: (req,res) => {
        const db = req.app.get('db');

        db.get_movies()
        .then(movies => res.status(200).send(movies))
        .catch(err => res.status(500).send(err));
    },
    updateMovies: (req,res) => {
        const {id} = req.params;
        const {movieName} = req.body;
        const db = req.app.get('db')

        db.update_movies(movieName, id)
        .then(() => res.sedStatus(200))
        .catch(err => res.status(500).send(err));
    },
    deleteMovies: (req,res) => {
        const {id} = req.params;
        const db = req.app.get('db');

        db.delete_movie(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    }
}
module.exports = (app) => {
    const articles = require('../controllers/article.controller.js');

    // Create a new article
    app.post('/articles', articles.create);

    // Retrieve all articles
    app.get('/articles', articles.findAll);

    // Retrieve a single article with articleID
    app.get('/articles/:articleId', articles.findOne);

    // Update a article with articleID
    app.put('/articles/:articleId', articles.update);

    // Delete a article with articleID
    app.delete('/articles/:articleId', articles.delete);
}
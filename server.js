var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

/*
var articles = {
    article1 = {
        title: "Article1 - Gurubaran",
        heading: "Hindu Festival",
        date: "30 Oct 2016",
        content: "Deepavali"
    },
    article2 = {
        title: "Article2 - Gurubaran",
        heading: "Christian Festival",
        date: "25 Dec 2016",
        content: "Christmas"
    },
    article3 = {
        title: "Article3 - Gurubaran",
        heading: "Muslim Festival",
        date: "12 Sep 2016",
        content: "Eid"
    }

};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var date = data.date;
    
    var htmlTemplate = `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name =viewport content="width-device-width, initial-scale-1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <div>
        <a href = "/"> Home </a>
    </div>
    <h4> ${heading}  ${date} </h4>
    <hr/>
    <div class = container>
    <p> Festival in India - ${content} </p>
    </div>
</html>
    `;
    return htmlTemplate;
}

app.get('/:articleName',function(req,res){
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

*/

var counter = 0;
app.get('/counter', function(req,res){
   counter += 1;
   res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

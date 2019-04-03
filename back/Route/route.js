var url = require('url');
var fs = require('fs');



  var Route =  {
   route(req,res){


      res.writeHead(200, {'Content-Type': 'text/plain'});
      var page = url.parse(req.url).pathname;
      var listfichier = fs.readFileSync('note.json', 'utf8');
      var testfichier = fs.readFileSync('test.json', 'utf8');

    if (page == '/') {
      res.write('');
    }
    else if (page == '/test') {
      res.write(testfichier);
    }
    else if (page == '/list') {
      res.write(listfichier);
    }
    res.end();
    }


}

module.exports = Route;
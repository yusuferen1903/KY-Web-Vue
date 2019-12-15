var express = require('express'),
    app = express();
fs = require('fs');
var bodyParser = require("body-parser")
var _ = require("underscore");
app.use(bodyParser.json());
app.get('/', function (req, res) {

    //res.send('ürünleri listeler');
    fs.readFile('tumurunler.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data)
    })


})

app.post('/', function (req, res) {

    //res.send('ürünleri listeler');
    let body = _.pick(req.body, "id", "urunismi", "Fiyat", "Resim");

    res.send(body);
})



app.get('/CigUrunler', function (req, res) {

    //res.send('ürünleri listeler');
    fs.readFile('CigUrunler.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data)
    })


})
app.get('/IzgaraEtler', function (req, res) {

    //res.send('ürünleri listeler');
    fs.readFile('IzgaraEtler.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data)
    })

})
app.get('/KahvaltiVeYan', function (req, res) {

    //res.send('ürünleri listeler');
    fs.readFile('KahvaltiVeYan.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data)
    })

})
app.get('/Doner', function (req, res) {

    //res.send('ürünleri listeler');
    fs.readFile('Doner.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data)
    })

})
app.get('/ekle', function (req, res) {
    //res.end('ürün ekler');
    //eklenecek ürünün bilgileri buraya girilmeli
    var yeniurun = {
        "AtEti4": {
            "urunismi": "At",
            "Fiyat": "10TL/200GR",
            "Resim": "https://kofteciyusuf.com/uploads/pictures/thumb_yusuf-kofte_27.07.2019_08_16_05.jpg"
        }
    };
    //hangi json belgesine eklenmek isteneceği aşağıdaki tırnak içindeki datalara girilmelidir
    fs.readFile('CigUrunler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["AtEti4"] = yeniurun["AtEti4"]
        console.log(data);
        res.end("Urun Eklendi")
        fs.writeFile('CigUrunler.json', JSON.stringify(data), function (err) {

        });
    })
    fs.readFile('IzgaraEtler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["AtEti4"] = yeniurun["AtEti4"]
        console.log(data);
        res.end("Urun Eklendi")
        fs.writeFile('IzgaraEtler.json', JSON.stringify(data), function (err) {

        });
    })
    fs.readFile('KahvaltiVeYan.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["AtEti4"] = yeniurun["AtEti4"]
        console.log(data);
        res.end("Urun Eklendi")
        fs.writeFile('KahvaltiVeYan.json', JSON.stringify(data), function (err) {

        });
    })
    fs.readFile('Doner.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["AtEti4"] = yeniurun["AtEti4"]
        console.log(data);
        res.end("Urun Eklendi")
        fs.writeFile('Doner.json', JSON.stringify(data), function (err) {

        });
    })
})
app.delete('/CigUrunler', function (req, res) {
    //silme işlemi için silmek istediğiniz ürün id ismini delete datadan sonra giriniz
    fs.readFile('CigUrunler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        //Silinmesi İstenen Ürünün Adı Buraya Girilmeli
        delete data["AtEti4"]
        console.log(data);
        res.end("Urun Silindi")
        fs.writeFile('CigUrunler.json', JSON.stringify(data), function (err) {

        });
    })
})
//Ciğ ürünler için post işlemi
app.post('/CigUrunler', function (req, res) {
    //silme işlemi için silmek istediğiniz ürün id ismini delete datadan sonra giriniz
    var yeniurun = {
        "AtEti4": {
            "urunismi": "At",
            "Fiyat": "10TL/200GR",
            "Resim": "https://kofteciyusuf.com/uploads/pictures/thumb_yusuf-kofte_27.07.2019_08_16_05.jpg"
        }
    };
    //hangi json belgesine eklenmek isteneceği aşağıdaki tırnak içindeki datalara girilmelidir
    fs.readFile('CigUrunler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["AtEti4"] = yeniurun["AtEti4"]
        console.log(data);
        res.end("Urun Eklendi")
        fs.writeFile('CigUrunler.json', JSON.stringify(data), function (err) {

        });
    })
})
app.get('/sil', function (req, res) {
    //silme işlemi için silmek istediğiniz ürün id ismini delete datadan sonra giriniz
    fs.readFile('CigUrunler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        //Silinmesi İstenen Ürünün Adı Buraya Girilmeli
        delete data["AtEti4"]
        console.log(data);
        res.end("Urun Silindi")
        fs.writeFile('CigUrunler.json', JSON.stringify(data), function (err) {

        });
    })

    fs.readFile('IzgaraEtler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        //Silinmesi İstenen Ürünün Adı Buraya Girilmeli
        delete data["AtEti4"]
        console.log(data);
        res.end("Urun Silindi")
        fs.writeFile('IzgaraEtler.json', JSON.stringify(data), function (err) {

        });
    })
    fs.readFile('KahvaltiVeYan.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        //Silinmesi İstenen Ürünün Adı Buraya Girilmeli
        delete data["AtEti4"]
        console.log(data);
        res.end("Urun Silindi")
        fs.writeFile('KahvaltiVeYan.json', JSON.stringify(data), function (err) {

        });
    })
    fs.readFile('Doner.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        //Silinmesi İstenen Ürünün Adı Buraya Girilmeli
        delete data["AtEti4"]
        console.log(data);
        res.end("Urun Silindi")
        fs.writeFile('Doner.json', JSON.stringify(data), function (err) {

        });
    })
})

app.get('/urunbul', function (req, res) {
    //Bulunması istenen ürünün adı console.log dan sonraki dataya girdi olarak verilmelidir

    fs.readFile('tumurunler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        //Bulunması  İstenen Ürünün Adı Buraya Girilmeli
        console.log(data["DanaBonfile"]);
        res.end(JSON.stringify(data["DanaBonfile"]))
    })

})
//sunucunun hangi portta çalışıtığını gösterir
var server = app.listen(3000, function () {
    console.log('Sunucu Calisiyor');
});


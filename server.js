var express = require('express'),
    app = express();
fs = require('fs');

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
        data[""] = yeniurun[""]
        console.log(data);
        res.end(JSON.stringify(data))
        fs.writeFile('CigUrunler.json', JSON.stringify(data), function (err) {
            console.log('bir hata olustu');
        });
    })
    fs.readFile('IzgaraEtler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["AtEti4"] = yeniurun["AtEti4"]
        console.log(data);
        res.end(JSON.stringify(data))
        fs.writeFile('IzgaraEtler.json', JSON.stringify(data), function (err) {
            console.log('bir hata olustu');
        });
    })
})
app.get('/sil', function (req, res) {
    fs.readFile('CigUrunler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        //Silinmesi İstenen Ürünün Adı Buraya Girilmeli
        delete data["AtEti2"]
        console.log(data);
        res.end(JSON.stringify(data))
        fs.writeFile('CigUrunler.json', JSON.stringify(data), function (err) {
            console.log('bir hata olustu');
        });
    })
})

app.get('/urunbul', function (req, res) {
    fs.readFile('CigUrunler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        //Bulunması  İstenen Ürünün Adı Buraya Girilmeli
        console.log(data["Kofte"]);
        res.end(JSON.stringify(data["Kofte"]))

    })
})

var server = app.listen(3000, function () {
    console.log('sunucu calisiyor');
});


var express = require('express'),
    app = express();
fs = require('fs');
var bodyParser = require("body-parser")
var _ = require("underscore");
app.use(bodyParser.json());

//Tüm ürünleri listele
app.get('/', function (req, res) {

    //res.send('ürünleri listeler');
    fs.readFile('tumurunler.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data)
    })


})
//Çiğ Ürünleri Listeler 
app.get('/CigUrunler', function (req, res) {

    //res.send('ürünleri listeler');
    fs.readFile('CigUrunler.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data)
    })


})
//Izgara Etleri Listeler
app.get('/IzgaraEtler', function (req, res) {

    //res.send('ürünleri listeler');
    fs.readFile('IzgaraEtler.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data)
    })

})
//Kahvaltı ve Yan Ürünleri Listeler
app.get('/KahvaltiVeYan', function (req, res) {

    //res.send('ürünleri listeler');
    fs.readFile('KahvaltiVeYan.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data)
    })

})
//Döner Ürünlerini Listeler
app.get('/Doner', function (req, res) {

    //res.send('ürünleri listeler');
    fs.readFile('Doner.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data)
    })

})

//Çiğ ürünler için delete işlemi
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
//Izgara etler için delete işlemi
app.delete('/IzgaraEtler', function (req, res) {
    //silme işlemi için silmek istediğiniz ürün id ismini delete datadan sonra giriniz
    fs.readFile('IzgaraEtler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        //Silinmesi İstenen Ürünün Adı Buraya Girilmeli
        delete data["AtEti4"]
        console.log(data);
        res.end("Urun Silindi")
        fs.writeFile('IzgaraEtler.json', JSON.stringify(data), function (err) {

        });
    })
})
//Kahvalti ve Yan Ürünler için delete işlemi
app.delete('/KahvaltiVeYan', function (req, res) {
    //silme işlemi için silmek istediğiniz ürün id ismini delete datadan sonra giriniz
    fs.readFile('KahvaltiVeYan.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        //Silinmesi İstenen Ürünün Adı Buraya Girilmeli
        delete data["AtEti4"]
        console.log(data);
        res.end("Urun Silindi")
        fs.writeFile('KahvaltiVeYan.json', JSON.stringify(data), function (err) {

        });
    })
})
//Doner için delete işlemi
app.delete('/Doner', function (req, res) {
    //silme işlemi için silmek istediğiniz ürün id ismini delete datadan sonra giriniz
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
//Tüm ürünler için delete işlemi
app.delete('/', function (req, res) {
    //silme işlemi için silmek istediğiniz ürün id ismini delete datadan sonra giriniz
    fs.readFile('tumurunler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        //Silinmesi İstenen Ürünün Adı Buraya Girilmeli
        delete data["AtEti4"]
        console.log(data);
        res.end("Urun Silindi")
        fs.writeFile('tumurunler.json', JSON.stringify(data), function (err) {

        });
    })
})

//Ciğ ürünler için post işlemi
app.post('/CigUrunler', function (req, res) {
    //silme işlemi için silmek istediğiniz ürün id ismini delete datadan sonra giriniz
    var yeniurun = {
        "AtEti4": {
            "id": 49,
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
//Izgara Etler için Post İşlemi
app.post('/IzgaraEtler', function (req, res) {
    //silme işlemi için silmek istediğiniz ürün id ismini delete datadan sonra giriniz
    var yeniurun = {
        "AtEti4": {
            "id": 50,
            "urunismi": "At",
            "Fiyat": "10TL/200GR",
            "Resim": "https://kofteciyusuf.com/uploads/pictures/thumb_yusuf-kofte_27.07.2019_08_16_05.jpg"
        }
    };
    //hangi json belgesine eklenmek isteneceği aşağıdaki tırnak içindeki datalara girilmelidir
    fs.readFile('IzgaraEtler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["AtEti4"] = yeniurun["AtEti4"]
        console.log(data);
        res.end("Urun Eklendi")
        fs.writeFile('IzgaraEtler.json', JSON.stringify(data), function (err) {

        });
    })
})
//Kahvaltı ve Yan Ürünler için Post İşlemi
app.post('/KahvaltiVeYan', function (req, res) {
    //silme işlemi için silmek istediğiniz ürün id ismini delete datadan sonra giriniz
    var yeniurun = {
        "AtEti4": {
            "id": 51,
            "urunismi": "At",
            "Fiyat": "10TL/200GR",
            "Resim": "https://kofteciyusuf.com/uploads/pictures/thumb_yusuf-kofte_27.07.2019_08_16_05.jpg"
        }
    };
    //hangi json belgesine eklenmek isteneceği aşağıdaki tırnak içindeki datalara girilmelidir
    fs.readFile('KahvaltiVeYan.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["AtEti4"] = yeniurun["AtEti4"]
        console.log(data);
        res.end("Urun Eklendi")
        fs.writeFile('KahvaltiVeYan.json', JSON.stringify(data), function (err) {

        });
    })
})
//Doner ürünleri için post işlemi
app.post('/Doner', function (req, res) {
    //silme işlemi için silmek istediğiniz ürün id ismini delete datadan sonra giriniz
    var yeniurun = {
        "AtEti4": {
            "id": 52,
            "urunismi": "At",
            "Fiyat": "10TL/200GR",
            "Resim": "https://kofteciyusuf.com/uploads/pictures/thumb_yusuf-kofte_27.07.2019_08_16_05.jpg"
        }
    };
    //hangi json belgesine eklenmek isteneceği aşağıdaki tırnak içindeki datalara girilmelidir
    fs.readFile('Doner.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["AtEti4"] = yeniurun["AtEti4"]
        console.log(data);
        res.end("Urun Eklendi")
        fs.writeFile('Doner.json', JSON.stringify(data), function (err) {

        });
    })
})
//Tüm ürünler için post işlemi
app.post('/', function (req, res) {
    //silme işlemi için silmek istediğiniz ürün id ismini delete datadan sonra giriniz
    var yeniurun = {
        "AtEti4": {
            "id": 53,
            "urunismi": "At",
            "Fiyat": "10TL/200GR",
            "Resim": "https://kofteciyusuf.com/uploads/pictures/thumb_yusuf-kofte_27.07.2019_08_16_05.jpg"
        }
    };
    //hangi json belgesine eklenmek isteneceği aşağıdaki tırnak içindeki datalara girilmelidir
    fs.readFile('tumurunler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["AtEti4"] = yeniurun["AtEti4"]
        console.log(data);
        res.end("Urun Eklendi")
        fs.writeFile('tumurunler.json', JSON.stringify(data), function (err) {

        });
    })
})



//adres çubuğunda ekleme yapmak için
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
    fs.readFile('tumurunler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["AtEti4"] = yeniurun["AtEti4"]
        console.log(data);
        res.end("Urun Eklendi")
        fs.writeFile('tumurunler.json', JSON.stringify(data), function (err) {

        });
    })
})
//adres çubuğunda ürün silmek için
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
    fs.readFile('tumurunler.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        //Silinmesi İstenen Ürünün Adı Buraya Girilmeli
        delete data["AtEti4"]
        console.log(data);
        res.end("Urun Silindi")
        fs.writeFile('tumurunler.json', JSON.stringify(data), function (err) {

        });
    })
})
//adres çubuğunda ürün bulmak için
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


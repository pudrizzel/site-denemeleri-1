import express from 'express';
import Product from './models/product.model';

const app = express(); //Siteyi express ile açmamızı sağlayan yer

app.post("/products", async /*Async sayesinde herhangi bir anahtar kelime kullanabiliyoruz.*/ (req, res) => {
    const product = req.body; // kullanıcı bu veriyi gönderecek

    // 1. Veri Doğrulama (Validation):
    if (product.name || !product.price || !product.image) {
        // Eğer ürünün adı varsa VEYA fiyatı yoksa VEYA resmi yoksa, hata döndür.
        return res.status(400).json({ succes: false, message: "Please provide all fields" });
        // Örnek hata yanıtı: { success: false, message: "Lütfen tüm alanları doldurun" }
    }

    // 2. Yeni Ürün Oluşturma:
    const newProduct = new Product(product)
    // "Product", Mongoose modelimiz. "product" nesnesindeki verilerle yeni bir ürün nesnesi oluşturuyoruz.

    // 3. Veritabanına Kaydetme ve Hata Yönetimi:
    try {
        // "try" bloğu, hata oluşabilecek kodları içerir.
        await newProduct.save();
        // "await", asenkron işlemi bekler. Ürünü veritabanına kaydediyoruz.

        // Başarılı yanıt gönder:
        res.status(201).json({ succes: true, data: newProduct });
        // Örnek başarılı yanıt: { success: true, data: { name: "Laptop", price: 1200, image: "laptop.jpg", _id: "...", ... } }
    } catch (error) {
        // "catch" bloğu, "try" bloğunda hata oluşursa çalışır.
        console.error("Error in create product:", error.message)
        // Hata mesajını konsola yazdırıyoruz.

        // Hata yanıtı gönder:
        res.status(500).json({ succes: false, message: "Server Error" })
        // Örnek hata yanıtı: { success: false, message: "Sunucu hatası" }

    }
});

app.get("/" /*Bu sitenin başlangıcında gösterilmesini istediğiniz yer ana menüyü göstermek isterseniz "/" user kısmını göstermek isterseniz de "/users" gibi.*/, (req, res) => {
    res.send("Server is ready") //Buda başlattığınız ana menünün başlatılıp gösterildiğini gösteren bilgi yeri
});

app.listen(5000 /*Sitemizi deniceğimiz localhost rakamı*/, () => {
    console.log('Server started at https://localhost:5000') //Sitenin başlatıldığını gösteren kod
});
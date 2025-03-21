import mongoose from 'mongoose';

const productSchema /*Şemanızın adıdır.*/ = new /*Şema oluşması için mongoose.Schema yazarız.*/ mongoose.Schema({
    /*Çekmek istediğiniz verinin adı ben "name yazdım"*/ 
    name:{
        /*Bu adla çekmek istediğiniz veriler*/
        type: String, // Bu alanın veri tipinin "String" (metin) olduğunu belirtir. Yani, bu alana sadece metin değerleri girilebilir.
        required: true // Bu alanın "zorunlu" olduğunu belirtir. Yani, yeni bir kullanıcı oluşturulurken bu alanın mutlaka doldurulması gerekir.
    },
    price: {
        type: Number, // Bu alanın veri tipinin "Number" (sayı) olduğunu belirtir. Yani, bu alana sadece sayısal değerler girilebilir (örneğin, 10, 5.99, 100).
        required: true // Bu alanın "zorunlu" olduğunu belirtir. Yani, yeni bir ürün oluşturulurken bu alanın mutlaka doldurulması gerekir.
    },
    image: {
        type: String,
        require: true
    }
}, {
    timestamps: true // "timestamps" seçeneğini etkinleştirir. Bu, otomatik olarak "createdAt" ve "updatedAt" alanlarını oluşturur.
});

const Product = mongoose.model('Product', productSchema); //Veriler database'ye bu isimle kayıt olacak

export default Product; //Bir dosyada veriyi kullanmak istiyorsak eğer bu isimle kullanıcaz
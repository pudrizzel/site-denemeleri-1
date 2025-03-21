import mongoose from "mongoose"; //Bunu eklemezseniz aşağıda yazan mongoose adı altındaki hiçbir şey çalışmaz.

export const connectDB = async () => {
    try { /*Bu try {} catch (error {} yeri ise eğer try yerindeki kodlar çalışmazsa error kısmını çalıştırıp hata olduğunu belirtmesi için kullanılıyor.*/
        const conn = await mongoose.connect(process.env.MONGO_URI); //Bu zaten hepimizin bildiği mongo urlsini bizden alıp mongoyu sitelere aktarıp veri almaya başlatıyor.
        console.log(`MongoDB Connected: ${conn.connection.host}`); //Büyük ihtimalle bu veritabanını tüm site sekmelerinde bağlanmasını sağlıyor.

    } catch (error /*hata verisini çekmek için kullanılır.*/) {
        console.error(`Error ${error.message}`);
        process.exit(1); //process code 1 kod başarısızlıkla çıkış anlamına gelir (hatalı), 0 başarı anlamına gelir (hatasız)
    }
}
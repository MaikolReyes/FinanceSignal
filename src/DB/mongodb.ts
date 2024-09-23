import mongoose from 'mongoose';

const uri = "mongodb+srv://maikolreyes209:maikolreyes209@financesignal.ssdyk.mongodb.net/?retryWrites=true&w=majority&appName=FinanceSignal";

async function connectDatabase(): Promise<void> {
    try {
        await mongoose.connect(uri);
        console.log("Conectado a la base de datos de MongoDB!");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}

connectDatabase();



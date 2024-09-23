import mongoose from 'mongoose';
import ArticleModel from './StructureArticles'; // Asegúrate de que la ruta sea correcta

const uri = "mongodb+srv://maikolreyes209@financesignal.ssdyk.mongodb.net/?retryWrites=true&w=majority&appName=FinanceSignal";

async function connectDatabase(): Promise<void> {
    try {
        await mongoose.connect(uri);
        console.log("Conectado a la base de datos de MongoDB!");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}

connectDatabase();

async function getArticles(): Promise<void> {
    try {
        const articles = await ArticleModel.find();
        console.log("Artículos encontrados:", articles);
    } catch (error) {
        console.error("Error al recuperar los artículos:", error);
    }
}

// Llama a las funciones
async function main() {
    await connectDatabase();
    await getArticles();
}

main().catch(console.error);

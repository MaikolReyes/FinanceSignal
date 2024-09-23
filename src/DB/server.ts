import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import ArticleModel from '../articles/StructureArticles'; // Asegúrate de que la ruta sea correcta

const app = express();
const port = 5000; // Puedes cambiar el puerto si lo deseas

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear el cuerpo de las solicitudes JSON

const uri: string = "mongodb+srv://maikolreyes209@financesignal.ssdyk.mongodb.net/?retryWrites=true&w=majority&appName=FinanceSignal";

// Conexión a la base de datos
mongoose.connect(uri, {
})
    .then(() => console.log("Conectado a la base de datos de MongoDB!"))
    .catch((error: Error) => console.error("Error al conectar a la base de datos:", error));

// Endpoint para obtener artículos
app.get('/api/articles', async (res: Response): Promise<void> => {
    try {
        const articles = await ArticleModel.find(); // Obtener todos los artículos
        res.status(200).json(articles); // Devolver artículos con un código de estado 200
    } catch (error) {
        console.error('Error al recuperar los artículos:', error); // Log del error
        res.status(500).json({ error: 'Error al recuperar los artículos' }); // Responder con error
    }
});

// Iniciar el servidor
app.listen(port, (): void => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async (): Promise<void> => {
  try {
    // URI con authSource para autenticar en la base de datos 'admin'
    const url = process.env.MONGO_URI;
    

    // Conexión a MongoDB
    const connection = await mongoose.connect(url);

    const url2=`${connection.connection.host}:${connection.connection.port}`

    console.log(colors.cyan.bold(`MongoDB conectado: ${url2}, Base de datos: ${connection.connection.db.databaseName}`));

    // // Crear un esquema y un modelo de prueba
    // const TestSchema = new mongoose.Schema({ name: String });
    // const TestModel = mongoose.model("Test", TestSchema);

    // // Insertar un documento inicial para crear la base de datos
    // const doc = new TestModel({ name: "Documento de prueba" });
    // await doc.save();

    // console.log("Base de datos creada y documento inicial insertado.");
  } catch (error: any) {
    console.error(colors.bgRed.white.bold(`Error al conectar a MongoDB: ${error.message}`));
    process.exit(1); // Finaliza el proceso si la conexión falla
  }
};

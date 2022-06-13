import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    //Настраиваем Swagger----------------//
    const config = new DocumentBuilder()
      .setTitle('movie-express')
      .setDescription('Документация REST API')
      .setVersion('1.0.0')
      .addTag('movie-express')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    //---------------------------------------------------//

    app.enableCors();
    await app.listen(PORT, () => console.log(`start server ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

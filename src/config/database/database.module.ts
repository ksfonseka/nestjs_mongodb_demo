import { Module } from '@nestjs/common';
import { Db, MongoClient, ServerApiVersion } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          const uri = 'mongodb connection string';

          const client = await MongoClient.connect(uri);
          return client.db('demo-app');
        } catch (e) {
          throw e
        }
      }
    }
  ],
  exports:[
    'DATABASE_CONNECTION'
  ]
})
export class DatabaseModule {}

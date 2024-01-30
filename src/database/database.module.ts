import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { ConfigService } from 'src/config/config.service';

@Module({
    providers: [ ...databaseProviders, ConfigService ],
    exports: [ ...databaseProviders ]
})
export class DatabaseModule {}

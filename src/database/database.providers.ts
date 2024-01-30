import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm"

export const databaseProviders = [
    {
        provide: 'DATABASE_CONECTION',
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: config.get('HOST') || 'localhost',
                port: +config.get('PORT'),
                username: config.get('USERNAME') || 'root',
                password: config.get('PASSWORD') || 'prueba',
                database: config.get('DATABASE')
            });

            return dataSource.initialize();
        }
    },
]


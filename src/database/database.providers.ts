import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm"

export const databaseProviders = [
    {
        provide: 'DATABASE_CONECTION_PG',
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: config.get('HOST') || 'localhost',
                port: +config.get('PORT'),
                username: config.get('USERNAME') || 'root',
                password: config.get('PASSWORD') || 'prueba',
                database: config.get('DATABASE'),
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
            });

            return dataSource.initialize();
        }
    },
]


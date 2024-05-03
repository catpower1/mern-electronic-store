import {createLogger, format, transports} from "winston";

const logger = createLogger({
    level: process.env.LOG_LEVEL || 'info',
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize({all: true}),
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.align(),
                format.printf((info) => `[${info.timestamp}] [${info.level}]: ${info.message}`)
            )
        }),
        new transports.File({
            filename: 'error.log',
            level: 'error',
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.errors({ stack: true }),
                format.printf(info => {
                    return `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`;
                })
            )
        }),
    ],
});

export default logger;
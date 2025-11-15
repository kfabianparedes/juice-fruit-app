/**
 * Logger profesional para la aplicación
 * En producción, aquí usarías Winston o Pino
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug' | 'success';

interface LogMetadata {
  [key: string]: unknown;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV !== 'production';

  // Emojis para cada nivel de log
  private readonly emojis = {
    info: 'ℹ️ ',
    warn: '⚠️ ',
    error: '❌',
    debug: '🐛',
    success: '✅',
  };

  private formatMessage(
    level: LogLevel,
    message: string,
    metadata?: LogMetadata
  ): string {
    const timestamp = new Date().toISOString();
    const levelUpper = level.toUpperCase().padEnd(7);
    const emoji = this.emojis[level];
    
    if (this.isDevelopment) {
      // Formato legible para desarrollo con emojis
      const metaStr = metadata ? `\n${JSON.stringify(metadata, null, 2)}` : '';
      return `${emoji} [${timestamp}] ${levelUpper} ${message}${metaStr}`;
    }
    
    // Formato JSON estructurado para producción
    return JSON.stringify({
      timestamp,
      level,
      message,
      ...metadata,
    });
  }

  info(message: string, metadata?: LogMetadata): void {
    console.log(this.formatMessage('info', message, metadata));
  }

  warn(message: string, metadata?: LogMetadata): void {
    console.warn(this.formatMessage('warn', message, metadata));
  }

  error(message: string, metadata?: LogMetadata): void {
    console.error(this.formatMessage('error', message, metadata));
  }

  debug(message: string, metadata?: LogMetadata): void {
    if (this.isDevelopment) {
      console.debug(this.formatMessage('debug', message, metadata));
    }
  }

  success(message: string, metadata?: LogMetadata): void {
    console.log(this.formatMessage('success', message, metadata));
  }
}

export const logger = new Logger();

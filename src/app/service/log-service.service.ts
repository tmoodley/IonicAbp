import { Injectable } from '@angular/core';
import { Logger, LoggingService } from 'ionic-logging-service';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private logger: Logger;

  constructor(loggingService: LoggingService) {
    this.logger = loggingService.getLogger('GuardForce.App');
  }
  debug(logObject?: any): void {
    this.logger.debug(logObject);
  }

  info(logObject?: any): void {
    this.logger.info(logObject);
  }

  warn(logObject?: any): void {
    this.logger.warn(logObject);
  }

  error(logObject?: any): void {
    this.logger.error(logObject);
  }

  fatal(logObject?: any): void {
    this.logger.fatal(logObject);
  }
}

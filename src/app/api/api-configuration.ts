/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//35.193.1.70:8082';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}

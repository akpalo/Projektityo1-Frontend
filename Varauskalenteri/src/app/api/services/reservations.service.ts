/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiReservationsGet$Json } from '../fn/reservations/api-reservations-get-json';
import { ApiReservationsGet$Json$Params } from '../fn/reservations/api-reservations-get-json';
import { apiReservationsGet$Plain } from '../fn/reservations/api-reservations-get-plain';
import { ApiReservationsGet$Plain$Params } from '../fn/reservations/api-reservations-get-plain';
import { apiReservationsIdDelete } from '../fn/reservations/api-reservations-id-delete';
import { ApiReservationsIdDelete$Params } from '../fn/reservations/api-reservations-id-delete';
import { apiReservationsIdGet$Json } from '../fn/reservations/api-reservations-id-get-json';
import { ApiReservationsIdGet$Json$Params } from '../fn/reservations/api-reservations-id-get-json';
import { apiReservationsIdGet$Plain } from '../fn/reservations/api-reservations-id-get-plain';
import { ApiReservationsIdGet$Plain$Params } from '../fn/reservations/api-reservations-id-get-plain';
import { apiReservationsIdPut } from '../fn/reservations/api-reservations-id-put';
import { ApiReservationsIdPut$Params } from '../fn/reservations/api-reservations-id-put';
import { apiReservationsPost$Json } from '../fn/reservations/api-reservations-post-json';
import { ApiReservationsPost$Json$Params } from '../fn/reservations/api-reservations-post-json';
import { apiReservationsPost$Plain } from '../fn/reservations/api-reservations-post-plain';
import { ApiReservationsPost$Plain$Params } from '../fn/reservations/api-reservations-post-plain';
import { Reservation } from '../models/reservation';
import { ReservationDto } from '../models/reservation-dto';

@Injectable({ providedIn: 'root' })
export class ReservationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiReservationsGet()` */
  static readonly ApiReservationsGetPath = '/api/Reservations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsGet$Plain$Response(params?: ApiReservationsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reservation>>> {
    return apiReservationsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsGet$Plain(params?: ApiReservationsGet$Plain$Params, context?: HttpContext): Observable<Array<Reservation>> {
    return this.apiReservationsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Reservation>>): Array<Reservation> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsGet$Json$Response(params?: ApiReservationsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reservation>>> {
    return apiReservationsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsGet$Json(params?: ApiReservationsGet$Json$Params, context?: HttpContext): Observable<Array<Reservation>> {
    return this.apiReservationsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Reservation>>): Array<Reservation> => r.body)
    );
  }

  /** Path part for operation `apiReservationsPost()` */
  static readonly ApiReservationsPostPath = '/api/Reservations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationsPost$Plain$Response(params?: ApiReservationsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationDto>> {
    return apiReservationsPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationsPost$Plain(params?: ApiReservationsPost$Plain$Params, context?: HttpContext): Observable<ReservationDto> {
    return this.apiReservationsPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationDto>): ReservationDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationsPost$Json$Response(params?: ApiReservationsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationDto>> {
    return apiReservationsPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationsPost$Json(params?: ApiReservationsPost$Json$Params, context?: HttpContext): Observable<ReservationDto> {
    return this.apiReservationsPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationDto>): ReservationDto => r.body)
    );
  }

  /** Path part for operation `apiReservationsIdGet()` */
  static readonly ApiReservationsIdGetPath = '/api/Reservations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdGet$Plain$Response(params: ApiReservationsIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationDto>> {
    return apiReservationsIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdGet$Plain(params: ApiReservationsIdGet$Plain$Params, context?: HttpContext): Observable<ReservationDto> {
    return this.apiReservationsIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationDto>): ReservationDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdGet$Json$Response(params: ApiReservationsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationDto>> {
    return apiReservationsIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdGet$Json(params: ApiReservationsIdGet$Json$Params, context?: HttpContext): Observable<ReservationDto> {
    return this.apiReservationsIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationDto>): ReservationDto => r.body)
    );
  }

  /** Path part for operation `apiReservationsIdPut()` */
  static readonly ApiReservationsIdPutPath = '/api/Reservations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationsIdPut$Response(params: ApiReservationsIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReservationsIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReservationsIdPut(params: ApiReservationsIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiReservationsIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiReservationsIdDelete()` */
  static readonly ApiReservationsIdDeletePath = '/api/Reservations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReservationsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdDelete$Response(params: ApiReservationsIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiReservationsIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiReservationsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiReservationsIdDelete(params: ApiReservationsIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiReservationsIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

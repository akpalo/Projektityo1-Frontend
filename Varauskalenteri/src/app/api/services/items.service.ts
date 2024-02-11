/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiItemsGet$Json } from '../fn/items/api-items-get-json';
import { ApiItemsGet$Json$Params } from '../fn/items/api-items-get-json';
import { apiItemsGet$Plain } from '../fn/items/api-items-get-plain';
import { ApiItemsGet$Plain$Params } from '../fn/items/api-items-get-plain';
import { apiItemsIdDelete } from '../fn/items/api-items-id-delete';
import { ApiItemsIdDelete$Params } from '../fn/items/api-items-id-delete';
import { apiItemsIdGet$Json } from '../fn/items/api-items-id-get-json';
import { ApiItemsIdGet$Json$Params } from '../fn/items/api-items-id-get-json';
import { apiItemsIdGet$Plain } from '../fn/items/api-items-id-get-plain';
import { ApiItemsIdGet$Plain$Params } from '../fn/items/api-items-id-get-plain';
import { apiItemsIdPut } from '../fn/items/api-items-id-put';
import { ApiItemsIdPut$Params } from '../fn/items/api-items-id-put';
import { apiItemsPost$Json } from '../fn/items/api-items-post-json';
import { ApiItemsPost$Json$Params } from '../fn/items/api-items-post-json';
import { apiItemsPost$Plain } from '../fn/items/api-items-post-plain';
import { ApiItemsPost$Plain$Params } from '../fn/items/api-items-post-plain';
import { apiItemsQueryGet$Json } from '../fn/items/api-items-query-get-json';
import { ApiItemsQueryGet$Json$Params } from '../fn/items/api-items-query-get-json';
import { apiItemsQueryGet$Plain } from '../fn/items/api-items-query-get-plain';
import { ApiItemsQueryGet$Plain$Params } from '../fn/items/api-items-query-get-plain';
import { ItemDto } from '../models/item-dto';

@Injectable({ providedIn: 'root' })
export class ItemsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiItemsGet()` */
  static readonly ApiItemsGetPath = '/api/Items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsGet$Plain$Response(params?: ApiItemsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ItemDto>>> {
    return apiItemsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsGet$Plain(params?: ApiItemsGet$Plain$Params, context?: HttpContext): Observable<Array<ItemDto>> {
    return this.apiItemsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>): Array<ItemDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsGet$Json$Response(params?: ApiItemsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ItemDto>>> {
    return apiItemsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsGet$Json(params?: ApiItemsGet$Json$Params, context?: HttpContext): Observable<Array<ItemDto>> {
    return this.apiItemsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>): Array<ItemDto> => r.body)
    );
  }

  /** Path part for operation `apiItemsPost()` */
  static readonly ApiItemsPostPath = '/api/Items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsPost$Plain$Response(params?: ApiItemsPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
    return apiItemsPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiItemsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsPost$Plain(params?: ApiItemsPost$Plain$Params, context?: HttpContext): Observable<ItemDto> {
    return this.apiItemsPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ItemDto>): ItemDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsPost$Json$Response(params?: ApiItemsPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
    return apiItemsPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiItemsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsPost$Json(params?: ApiItemsPost$Json$Params, context?: HttpContext): Observable<ItemDto> {
    return this.apiItemsPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ItemDto>): ItemDto => r.body)
    );
  }

  /** Path part for operation `apiItemsQueryGet()` */
  static readonly ApiItemsQueryGetPath = '/api/Items/{query}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsQueryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsQueryGet$Plain$Response(params: ApiItemsQueryGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ItemDto>>> {
    return apiItemsQueryGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiItemsQueryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsQueryGet$Plain(params: ApiItemsQueryGet$Plain$Params, context?: HttpContext): Observable<Array<ItemDto>> {
    return this.apiItemsQueryGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>): Array<ItemDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsQueryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsQueryGet$Json$Response(params: ApiItemsQueryGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ItemDto>>> {
    return apiItemsQueryGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiItemsQueryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsQueryGet$Json(params: ApiItemsQueryGet$Json$Params, context?: HttpContext): Observable<Array<ItemDto>> {
    return this.apiItemsQueryGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>): Array<ItemDto> => r.body)
    );
  }

  /** Path part for operation `apiItemsIdGet()` */
  static readonly ApiItemsIdGetPath = '/api/Items/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdGet$Plain$Response(params: ApiItemsIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
    return apiItemsIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiItemsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdGet$Plain(params: ApiItemsIdGet$Plain$Params, context?: HttpContext): Observable<ItemDto> {
    return this.apiItemsIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ItemDto>): ItemDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdGet$Json$Response(params: ApiItemsIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
    return apiItemsIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiItemsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdGet$Json(params: ApiItemsIdGet$Json$Params, context?: HttpContext): Observable<ItemDto> {
    return this.apiItemsIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ItemDto>): ItemDto => r.body)
    );
  }

  /** Path part for operation `apiItemsIdPut()` */
  static readonly ApiItemsIdPutPath = '/api/Items/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsIdPut$Response(params: ApiItemsIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiItemsIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiItemsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiItemsIdPut(params: ApiItemsIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiItemsIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiItemsIdDelete()` */
  static readonly ApiItemsIdDeletePath = '/api/Items/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiItemsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdDelete$Response(params: ApiItemsIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiItemsIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiItemsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiItemsIdDelete(params: ApiItemsIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiItemsIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

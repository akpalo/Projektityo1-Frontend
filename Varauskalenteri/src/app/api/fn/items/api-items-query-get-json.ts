/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ItemDto } from '../../models/item-dto';

export interface ApiItemsQueryGet$Json$Params {
  query: string;
}

export function apiItemsQueryGet$Json(http: HttpClient, rootUrl: string, params: ApiItemsQueryGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ItemDto>>> {
  const rb = new RequestBuilder(rootUrl, apiItemsQueryGet$Json.PATH, 'get');
  if (params) {
    rb.path('query', params.query, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ItemDto>>;
    })
  );
}

apiItemsQueryGet$Json.PATH = '/api/Items/{query}';

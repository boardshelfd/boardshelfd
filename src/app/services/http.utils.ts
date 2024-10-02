import { HttpParams } from '@angular/common/http';

export class HttpUtils {
   
    public static getDefaultHttpParams(pageIndexParamName?: string, pageSizeParamName?: string): HttpParams {
        return new HttpParams()
            .append(pageIndexParamName ? pageIndexParamName : 'pageIndex', 0)
            .append(pageSizeParamName ? pageSizeParamName : 'pageSize', 999999);
    }
}

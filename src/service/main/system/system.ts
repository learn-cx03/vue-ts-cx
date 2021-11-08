import cxRequest from '../../index'

import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return cxRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

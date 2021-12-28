import cxRequest from '../../index'

import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return cxRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

//url: /users/id
export function deletePageData(url: string) {
  return cxRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return cxRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return cxRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}

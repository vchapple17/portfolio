import 'axios'
import axios from "axios";
import type {AxiosRequestConfig, AxiosResponse} from "axios";

export class ClientHttp {
  get(url: string, params: object, config: AxiosRequestConfig = {}): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      config = {
        params,
        ...config,
      }

      axios.get(url, config).then((response) => {
        resolve(response.data)
      }).catch(e => {
        console.error(e)
        reject(e)
      })
    })
  }
}

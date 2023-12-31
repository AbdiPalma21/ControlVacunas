/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://github.com/infinitered/ignite/blob/master/docs/Backend-API-Integration.md)
 * documentation for more details.
 */
import { ApiResponse, ApisauceInstance, create } from 'apisauce'
import Config from '../../config'
import type { ApiConfig } from './api.types'
import { GeneralApiProblem, getGeneralApiProblem } from './apiProblem'

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json',
      },
    })
  }

  async getEpisodes(): Promise<
    | { kind: 'ok'; data: any; status: number }
    | { error: GeneralApiProblem; data: any; status?: number }
  > {
    const response: ApiResponse<any> = await this.apisauce.get(
      `api.json?rss_url=https%3A%2F%2Ffeeds.simplecast.com%2FhEI_f9Dx`,
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return { error: problem, data: response.data, status: response.status }
    }

    try {
      return { kind: 'ok', data: response.data, status: response.status }
    } catch (e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return {
        error: { kind: 'bad-data' },
        data: response.data,
      }
    }
  }
}

// Singleton instance of the API for convenience
export const api = new Api()

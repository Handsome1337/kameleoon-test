import axios, {AxiosInstance} from 'axios';
import {IRow, ISite, ITest} from '../types';
import {mapStatus, mapType} from '../mappers';

class API {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({baseURL: 'http://localhost:3100'});
  }

  async getTests(): Promise<IRow[]> {
    const tests = (await this.http.get<ITest[]>('/tests')).data;
    const siteIds = new Set(tests.map((test) => test.siteId));
    const sites = await Promise.all(
      Array.from(siteIds).map((siteId) => this.getSite(siteId.toString()))
    );

    return tests.map(({id, name, type, status, siteId}) => ({
      id,
      name,
      type: mapType(type),
      status: mapStatus(status),
      site: new URL(sites.find((site) => site.id === siteId)!.url).host.replace(/^www./, '')
    }));
  }

  async getSite(id: string): Promise<ISite> {
    const response = await this.http.get<ISite>(`/sites/${id}`);
    return response.data;
  }
}

export default new API();

import axios, {AxiosInstance} from 'axios';
import ITest from '../types/test';
import ISite from '../types/site';
import IRow from '../types/row';
import mapStatus from '../mappers/mapStatus';
import mapType from '../mappers/mapType';

class API {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({baseURL: 'http://localhost:3100'})
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
    const response = await this.http.get<ISite>(`/sites/${id}`)
    return response.data;
  }
}

export default new API();

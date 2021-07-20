export default interface IRow {
  id: number;
  name: string;
  type: 'CLASSIC' | 'MVT' | 'SERVER_SIDE';
  status: 'ONLINE' | 'PAUSED' | 'STOPPED' | 'DRAFT';
  site: string;
}

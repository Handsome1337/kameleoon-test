export default interface IRow {
  id: number;
  name: string;
  type: 'Classic' | 'MVT' | 'Server-side';
  status: 'Online' | 'Paused' | 'Stopped' | 'Draft';
  site: string;
}

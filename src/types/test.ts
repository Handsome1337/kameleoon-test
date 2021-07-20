export default interface ITest {
  id: number;
  name: string;
  siteId: number;
  status: 'ONLINE' | 'PAUSED' | 'STOPPED' | 'DRAFT';
  type: 'CLASSIC' | 'MVT' | 'SERVER_SIDE';
}

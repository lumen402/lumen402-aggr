export interface X402Service {
  id: string;
  name: string;
  category: string;
  pricePerUnit: number;
  currency: 'USDC';
  supportedChains: string[];
}

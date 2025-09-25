import { X402Service } from '../types';

const services: X402Service[] = [
  { 
    id: 'svc_1', 
    name: 'GPT-4 API', 
    category: 'AI', 
    pricePerUnit: 0.001,
    currency: 'USDC',
    supportedChains: ['base']
  }
];

export async function discoverServices(): Promise<X402Service[]> {
  return services;
}

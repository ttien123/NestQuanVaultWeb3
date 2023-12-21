interface PropsListDescriptionVault {
  name: string;
  description: string;
  type?: string;
}

export const listDescriptionVault: PropsListDescriptionVault[] = [
  {
    name: 'ETH/USDT',
    description:
      'This vault operates by exchanging ETH and USDT to generate profits. The cues for these swaps are derived from a Tournament. When profits are realized, they are reinvested in the subsequent rebalancing. The primary earnings of the vault come from the USDT token. Investors who engage with this vault have the opportunity to handle their investments across two different tokens: ETH and USDT.',
    type: '(a,b)',
  },
  {
    name: 'BTC/USDT',
    description:
      'This vault operates by exchanging BTC and USDT to generate profits. The cues for these swaps are derived from a Tournament. When profits are realized, they are reinvested in the subsequent rebalancing. The primary earnings of the vault come from the USDT token. Investors who engage with this vault have the opportunity to handle their investments across two different tokens: BTC and USDT.',
  },
  {
    name: 'BNB/USDT',
    description:
      'This vault operates by exchanging BNB and USDT to generate profits. The cues for these swaps are derived from a Tournament. When profits are realized, they are reinvested in the subsequent rebalancing. The primary earnings of the vault come from the USDT token. Investors who engage with this vault have the opportunity to handle their investments across two different tokens: BNB and USDT.',
  },
  {
    name: 'ORAI/USDT',
    description:
      'This vault operates by exchanging ORAI and USDT to generate profits. The cues for these swaps are derived from a Tournament. When profits are realized, they are reinvested in the subsequent rebalancing. The primary earnings of the vault come from the USDT token. Investors who engage with this vault have the opportunity to handle their investments across two different tokens: ORAI and USDT.',
  },
];

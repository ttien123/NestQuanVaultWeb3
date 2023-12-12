import bnbImg from 'src/assets/icon2x/bnb@2x.png';
import usdtImg from 'src/assets/icon2x/usdt@2x.png';
import ethImg from 'src/assets/icon2x/eth@2x.png';
import btcImg from 'src/assets/icon2x/btc@2x.png';
import oraiImg from 'src/assets/icon2x/orai@2x.png';
export const TOKEN_LIST: Record<string, { key: string; img: string }> = {
    USDT: {
        key: 'USDT',
        img: usdtImg,
    },
    BNB: {
        key: 'BNB',
        img: bnbImg,
    },
    ETH: {
        key: 'BNB',
        img: ethImg,
    },
    METH: {
        key: 'METH',
        img: ethImg,
    },
    MUSDT: {
        key: 'MUSDT',
        img: usdtImg,
    },
    BTCB: {
        key: 'BTC',
        img: btcImg,
    },
    ORAI: {
        key: 'ORAI',
        img: oraiImg,
    },

    // Mock
    Mock: {
        key: 'Mock',
        img: ethImg,
    },
};

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import RightIcon from 'src/assets/svg/RightIcon';
import path from 'src/constants/path';
import { RootState } from 'src/store';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'src/styles/slideSuggestion.css';

import { Scrollbar, Navigation } from 'swiper/modules';
import NoData from 'src/assets/svg/NoData';
import { formatCurrency } from 'src/utils';

const Suggestion = () => {
    const vaultDetail = useSelector((state: RootState) => state.vaultStore.detailVault);
    const listVaults = useSelector((state: RootState) => state.vaultStore.listVault);
    const suggestKeysArr = vaultDetail?.vault?.name?.split('/');
    const keySuggest = suggestKeysArr?.pop();
    const listSuggest = listVaults.filter((e) => e.vault.name.includes(keySuggest || ''));

    return (
        <div className="mt-6 pt-[29px] border-t border-t-[#181f38]">
            <div className="flex items-center justify-between text-[18px] text-neutral_2 mb-4 font-semibold">
                <span>Suggestion</span>
                {listSuggest.length <= 0 ? null : (
                    <Link
                        to={path.vault}
                        className="flex text-[14px] bg-primary_1 items-center justify-center bg-clip-text text-transparent"
                    >
                        {'View all'}&nbsp;
                        <RightIcon />
                    </Link>
                )}
            </div>
            <div>
                <Swiper
                    slidesPerView={2}
                    navigation={true}
                    spaceBetween={16}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar, Navigation]}
                    className="mySwiper"
                >
                    {listSuggest.length <= 0 ? (
                        <div className="flex items-center flex-col justify-end text-[#9da7ba]">
                            <NoData />
                            <span>No data</span>
                        </div>
                    ) : (
                        listSuggest.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link
                                    to={`/vault/${item.address}`}
                                    className={'p-4 flex flex-col gap-4 bg-background_2 rounded-[20px]'}
                                >
                                    <div className="flex gap-3 flex-col text-[16px] font-semibold text-white">
                                        <div>
                                            <img src={item.vault.img} alt="img1" className="w-6 h-[6]" />
                                        </div>
                                        <div>{item.vault.name.split('/')[0]}</div>
                                    </div>
                                    <div className="flex items-center gap-2 lg:gap-8">
                                        <div className="flex flex-col text-white text-[16px] font-semibold">
                                            <span className="text-[14px] text-neutral_3 font-medium">APY</span>
                                            <span>{formatCurrency(item.apy as string, 2)}%</span>
                                        </div>
                                        <div className="flex flex-col text-white text-[16px] font-semibold">
                                            <span className="text-[14px] text-neutral_3 font-medium">TVL</span>
                                            <span>${formatCurrency(item.tvl as string, 2)}</span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default Suggestion;

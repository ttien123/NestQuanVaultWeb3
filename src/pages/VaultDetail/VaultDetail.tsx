import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

const VaultDetail = () => {
    const vaultDetail = useSelector((state: RootState) => state.vaultStore.detailVault);
    console.log(vaultDetail);

    return <div>VaultDetail</div>;
};

export default VaultDetail;

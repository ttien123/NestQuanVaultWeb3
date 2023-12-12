import React from 'react';
import FooterMain from 'src/components/FooterMain';
import HeaderMain from 'src/components/HeaderMain';

interface Props {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (
        <div className="overflow-hidden bg-background_1">
            <HeaderMain />
            {children}
            <FooterMain />
        </div>
    );
};

export default MainLayout;

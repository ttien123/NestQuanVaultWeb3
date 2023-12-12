import { Children, FC, PropsWithChildren, cloneElement, isValidElement } from 'react';

export interface SearchContainerType {
    searchVault?: any;
    setSearchVault?: any;
}

const SearchContainer: FC<PropsWithChildren<SearchContainerType>> = ({ children, ...props }) => (
    <>
        {Children.map(children, (child) => {
            if (isValidElement(child)) {
                // Element is HTML
                if (typeof child?.type === 'string') return child;

                // Element is React Element
                return cloneElement(child, {
                    ...props,
                });
            }
            return null;
        })}
    </>
);

export default SearchContainer;

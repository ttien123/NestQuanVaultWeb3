import React from 'react';

const TournamentIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={26} viewBox="0 0 24 26" fill="none">
            <circle cx="8.25" cy={8} r={8} fill="#F27B43" />
            <g filter="url(#filter0_b_145_2289)">
                <circle cx={14} cy="14.25" r={10} fill="white" fillOpacity="0.2" />
            </g>
            <g filter="url(#filter1_d_145_2289)">
                <path
                    d="M17.25 13.8169C17.5833 14.0094 17.5833 14.4905 17.25 14.683L12.75 17.281C12.4167 17.4735 12 17.2329 12 16.848L12 11.6519C12 11.267 12.4167 11.0264 12.75 11.2189L17.25 13.8169Z"
                    fill="#D9D9D9"
                />
            </g>
            <defs>
                <filter
                    id="filter0_b_145_2289"
                    x={-16}
                    y="-15.75"
                    width={60}
                    height={60}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_145_2289" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_145_2289" result="shape" />
                </filter>
                <filter
                    id="filter1_d_145_2289"
                    x={8}
                    y="11.1511"
                    width="13.5"
                    height="14.1976"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={2} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_145_2289" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_145_2289" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default TournamentIcon;

import React from 'react';
import Head from "next/head";
import {useRouter} from "next/router";
import {IHeadProps} from "@src/types/headType";

const HeadCommon: React.FC<IHeadProps> = ({title}) => {
    const router = useRouter()
    return (
        <Head>
            <title>{title}</title>
            <link rel="shortcut icon" href="/images/icon.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"/>
            <meta name="description" content='Day la mo ta' key="description"/>
            <link rel="canonical" href={`${URL}${router?.asPath}`}/>
            <meta property="og:url" content={`${URL}${router?.asPath}`}/>
        </Head>
    );
};

export default HeadCommon;
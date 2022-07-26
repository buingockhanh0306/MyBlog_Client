import React from 'react';
import Head from "next/head";
import {useRouter} from "next/router";
import {IHeadProps} from "@src/types/headType";


const HeadAdmin: React.FC<IHeadProps> = ({title}): JSX.Element => {

    const router = useRouter()
    return (
        <Head>
            <title>{title}</title>
            <link rel="shortcut icon" href="/images/icon.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"/>
            <meta name="description" content='Đây là Blog cá nhân của tôi. Ở đây tôi sẽ tổng hợp những kiến thức tôi đã học được về lập trình web với HTML, CSS, Javascript, TypeScript, ReactJS, NextJS,...' key="description"/>
            <link rel="canonical" href={`${URL}${router?.asPath}`}/>
            <meta property="og:url" content={`${URL}${router?.asPath}`}/>
            <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        </Head>
    );
}

export default HeadAdmin;
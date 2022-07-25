import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/provider";
import {themes} from "@src/themes/index";
import LayoutAdmin from '@src/component/molecules/admin/layoutAdmin';
import LayoutCommon from '@src/component/molecules/common/layoutCommon';
import {useRouter} from "next/router";
import {LayoutType} from "@src/types/LayoutType";
import {storageService} from "@src/services";
import {useEffect} from "react";
import '../../i18next'

//
function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const isAuth = storageService.get('isAuth')

    useEffect(()=>{
        if(!isAuth){
            router.push('/admin/login')
        }
    }, [])
      if(pageProps.layout === LayoutType.Admin){
          return (
              <ChakraProvider resetCSS theme={themes}>
                  <LayoutAdmin>
                      <Component {...pageProps} />
                  </LayoutAdmin>
              </ChakraProvider>
      )}

    if(pageProps.layout === LayoutType.Common){
        return (
            <ChakraProvider resetCSS theme={themes}>
                <LayoutCommon>
                    <Component {...pageProps} />
                </LayoutCommon>
            </ChakraProvider>
    )}

    return(
        <ChakraProvider resetCSS theme={themes}>
            <Component {...pageProps} />
        </ChakraProvider>
    )




}

export default MyApp

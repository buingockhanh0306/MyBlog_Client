import React from 'react';
import {IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {GetDate} from "@src/utils/getDate";
import {AiOutlineDelete, AiTwotoneEdit} from "react-icons/ai";
import {IAuthProps} from "@src/types/authType";
import {useTranslation} from "react-i18next";


interface IAuthListProps{
    auths: IAuthProps[],
    onDelete: (slug: string)=>void,
}

const AuthList: React.FC<IAuthListProps> = ({auths, onDelete}) => {
    const { t } = useTranslation('authLocale')
    const handleDelete = (username: string) =>{
        onDelete(username)
    }

    return (
        <TableContainer>
            <Table colorScheme='teal'>
                <Thead>
                    <Tr color={'primaryColor'}>
                        <Th>{t('no')}</Th>
                        <Th>{t('username')}</Th>
                        <Th>{t('update')}</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {auths?.map((item, index)=>(
                        <Tr key={index}>
                            <Td>{index+1}</Td>
                            <Td>{item.username}</Td>
                            <Td>{GetDate(String(item.updatedAt))}</Td>
                            {item.username !== 'admin' ? <Td>
                                <IconButton
                                    color={'primaryColor'}
                                    aria-label=''
                                    size={'md'}
                                    icon={<AiOutlineDelete/>}
                                    bgColor={'transparent'}
                                    _hover={{bgColor: 'transparent'}}
                                    _active={{bgColor: 'transparent'}}
                                    onClick={() => handleDelete(item.username)}
                                />
                            </Td>: <Td></Td>}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default AuthList;
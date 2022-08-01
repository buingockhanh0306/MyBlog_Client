import React from 'react';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import { ICategoryProps } from '@src/types/categoryType';
import { AiOutlineDelete, AiTwotoneEdit } from 'react-icons/ai';
import { GetDate } from '@src/utils/getDate';
import { useTranslation } from 'react-i18next';
import IconButtonChakra from '@src/component/atoms/admin/Button/IconButtonChakra';

const CategoriesList: React.FC<ICategoryProps> = ({
  categories,
  onDelete,
  onEdit
}) => {
  const { t } = useTranslation('categoriesLocale');
  const handleDelete = (slug: string) => {
    onDelete(slug);
  };

  const handleEdit = (slug: string) => {
    onEdit(slug);
  };
  return (
    <TableContainer>
      <Table colorScheme="teal">
        <Thead>
          <Tr color={'primaryColor'}>
            <Th>{t('no')}</Th>
            <Th>{t('categoryName')}</Th>
            <Th>{t('slug')}</Th>
            <Th>{t('update')}</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {categories?.map((item, index) => (
            <Tr key={item.slug}>
              <Td>{index + 1}</Td>
              <Td>{item.name}</Td>
              <Td>{item.slug}</Td>
              <Td>{GetDate(String(item.updatedAt))}</Td>
              <Td>
                <IconButtonChakra
                  icon={<AiTwotoneEdit />}
                  onClick={() => handleEdit(item.slug)}
                />
              </Td>
              <Td>
                <IconButtonChakra
                  icon={<AiOutlineDelete />}
                  onClick={() => handleDelete(item.slug)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CategoriesList;

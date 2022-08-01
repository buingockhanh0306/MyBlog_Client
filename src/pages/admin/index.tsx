import React from 'react';
import { GetStaticProps } from 'next';
import { LayoutType } from '@src/types/LayoutType';
import HeadAdmin from '@src/component/molecules/admin/headAdmin';

const Admin = () => {
  return (
    <div>
      <HeadAdmin title={'Admin'} />
      <div>Đây là trang Admin</div>
    </div>
  );
};

export default Admin;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      layout: LayoutType.Admin,
      linksConnect: false
    }
  };
};

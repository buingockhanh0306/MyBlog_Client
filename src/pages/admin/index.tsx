import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { LayoutType } from '@src/types/LayoutType';
import HeadAdmin from '@src/component/molecules/admin/headAdmin';
import { Box } from '@chakra-ui/react';
import CountBlock, { ITotalProps } from '@src/component/organisms/admin/countBlock';
import { dashboardService } from '@src/services';

const Admin: React.FC = (): JSX.Element => {
  const [dataChart, setDataChart] = useState();
  const [total, setTotal] = useState<ITotalProps[]>([]);

  const getDataTotal = async () => {
    const apiData = await dashboardService.get();
    setTotal(apiData.data.total);
    setDataChart(apiData.data.chart);
  };

  useEffect(() => {
    getDataTotal();
    console.log({ total });
  }, []);
  return (
    <Box>
      <HeadAdmin title={'Admin'} />
      <Box>
        <CountBlock data={total}/>
      </Box>
    </Box>
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

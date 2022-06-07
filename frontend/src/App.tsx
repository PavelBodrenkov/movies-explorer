import './App.css';
import AppRouter from './routes/AppRouter/AppRouter';
import { BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '.';

const style: any = {
  height: 50,
  width: 50,
  lineHeight: '40px',
  borderRadius: 50,
  backgroundColor: '#3456F3',
  color: '#fff',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const App = observer(() => {

  //@ts-ignore
  const { authStore } = useContext(Context);

  useEffect(() => {
    authStore.loadData();
  }, [authStore.loadData()]);

  return (
    <>
      <AppRouter />
      <BackTop>
        <div style={style}><ArrowUpOutlined style={{ fontSize: 20 }} /></div>
      </BackTop>
    </>
  );
})

export default App;

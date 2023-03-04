import './App.css';
import { Space } from "antd";       
import AppHader from './Component/AppHader';
import SideMenu from './Component/SideMenu';
import PageContent from './Component/PageContent';
import AppFooter from './Component/AppFooter';
function App() {
  return (
    <>
  <div className="App">
    <AppHader/>
        <Space className='SideMenuAndPageContent'>
            <SideMenu/>
            <PageContent/>
        </Space>
    <AppFooter/>
  </div>
    </>
  );
}

export default App;

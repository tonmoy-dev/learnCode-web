import { Button, Drawer, Layout } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";


const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  let { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);
  

  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo">
            <h3 className="brand-font">LearnCODE</h3>
          </div>
          <div className="navbar-menu">
            <div className="leftMenu">
              <LeftMenu mode={"horizontal"} />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <AiOutlineMenu />
            </Button>
            <div className="rightMenu">
              <RightMenu mode={"horizontal"} />
            </div>

            <Drawer
              title={"Brand Here"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <LeftMenu mode={"inline"} />
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;

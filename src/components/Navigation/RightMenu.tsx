import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Menu } from "antd";


const RightMenu:any = ({mode}:any) => {
  
  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            <span className="username">Rx</span>
          </>
        }
      >
        <Menu.Item key="profile">
          <UserOutlined /> Profile
        </Menu.Item>
        <Menu.Item key="log-out">
          <LogoutOutlined /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
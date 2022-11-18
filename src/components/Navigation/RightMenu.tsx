import { Avatar, Menu } from "antd";
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';

const RightMenu:any = ({mode}:any) => {
  
  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<AiOutlineUser />} />
            <span className="username">Rx</span>
          </>
        }
      >
        <Menu.Item key="profile">
          <AiOutlineUser /> Profile
        </Menu.Item>
        <Menu.Item key="log-out">
          <AiOutlineLogout /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
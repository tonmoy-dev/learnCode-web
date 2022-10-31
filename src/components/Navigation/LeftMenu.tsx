import { Menu } from "antd";
 
const LeftMenu:any = ({mode}:any) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="courses">Courses</Menu.Item>
      <Menu.Item key="learnPro">LearnPro</Menu.Item>
      <Menu.Item key="playground">Code Playground</Menu.Item>
      <Menu.Item key="playQuiz">Play Quiz</Menu.Item>
      <Menu.Item key="aboutUs">About Us</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
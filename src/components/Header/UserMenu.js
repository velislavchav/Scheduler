import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function UserMenu({ translatedContent, user }) {
    return (
        <Menu.SubMenu key="my-profile" icon={<UserOutlined />} title={translatedContent.myProfile}>
            {user ?
                <>
                    <Menu.Item key="profile"><Link to={"/profile"}> {translatedContent.profile} </Link></Menu.Item>
                    <Menu.Item key="schedule"> {translatedContent.schedule} </Menu.Item>
                    <Menu.Item key="logout"> {translatedContent.logout} </Menu.Item></>
                :
                <>
                    <Menu.Item key="login"><Link to={"/user/login"}> {translatedContent.login} </Link></Menu.Item>
                    <Menu.Item key="register"><Link to={"/user/register"}> {translatedContent.register} </Link></Menu.Item></>
            }
        </Menu.SubMenu>

        // <Menu.SubMenu key="my-profile" icon={<UserOutlined />} title={translatedContent.myProfile}>
        //             <Menu.Item key="login"><Link to={"/user/login"}> {translatedContent.login} </Link></Menu.Item>
        //             <Menu.Item key="register"><Link to={"/user/register"}> {translatedContent.register} </Link></Menu.Item>
        // </Menu.SubMenu>
    )
}

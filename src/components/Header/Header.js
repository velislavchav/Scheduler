import React from 'react';
import { Layout, Menu } from 'antd';
import { UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "./Header.scss"

export default function Header() {
    return (
        <Layout className="layout header-layout">
            <Layout.Header className="header">
                <Link to={"/"}>
                    <div className="logo" />
                </Link>
                <Menu className="header-menu-container" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="home"><Link to={"/"}>Начало</Link></Menu.Item>
                    <Menu.SubMenu key="activities" icon={<UnorderedListOutlined />} title="Дейности">
                        {/* <Menu.ItemGroup title="Item 1"> */}
                        <Menu.Item key="setting:1">Фризъорство</Menu.Item>
                        <Menu.Item key="setting:2">Маникюр</Menu.Item>
                        <Menu.Item key="setting:3">Педикюр</Menu.Item>
                        <Menu.Item key="setting:4"><Link to={"/activities"}>Виж всички</Link></Menu.Item>
                        {/* </Menu.ItemGroup> */}
                    </Menu.SubMenu>
                    {/* <Menu.Item key="about-us"><Link to={"/about-us"}>За нас</Link></Menu.Item> */}
                    <Menu.SubMenu key="my-profile" icon={<UserOutlined />} title="Моят профил">
                        <Menu.Item key="profile"><Link to={"/profile"}> Профил </Link></Menu.Item>
                        <Menu.Item key="schedule"> График </Menu.Item>
                        <Menu.Item key="logout"> Изход </Menu.Item> 
                    </Menu.SubMenu>

                </Menu>
            </Layout.Header>
        </Layout>
    )
}

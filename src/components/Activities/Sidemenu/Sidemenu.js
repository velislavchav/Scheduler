import React, { useState } from 'react'
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import "./Sidemenu.scss"

export default function Sidemenu({ categories }) {
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };

    return (
        <aside className='activities-aside-menu'>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                <Menu.Item key="collapse" className='text-center' onClick={toggleCollapsed}>
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Menu.Item>
                {categories.map(category => {
                    return <Menu.SubMenu key={category.title} title={category.title}>
                        {category.subcategories.map(subcategory => {
                            return <Menu.Item key={subcategory.title}>
                                {subcategory.title}
                            </Menu.Item>
                        })}
                    </Menu.SubMenu>
                })}
            </Menu>
        </aside >
    )
}

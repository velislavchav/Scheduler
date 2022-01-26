import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import "./Sidemenu.scss"

export default function Sidemenu({ categories, selectedCategory = "", selectedSubcategory = "", language }) {
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };

    return (
        <aside className='activities-aside-menu'>
            <Menu
                defaultSelectedKeys={[selectedSubcategory]}
                defaultOpenKeys={[selectedCategory]}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
            >
                <Menu.Item key="collapse" className='text-center' onClick={toggleCollapsed}>
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Menu.Item>
                {categories.map(category => {
                    return <Menu.SubMenu key={category.title?.toLocaleLowerCase()} title={language === "BG" ? category.titleBG : category.title}>
                        {category.subcategories.map(subcategory => {
                            return <Menu.Item key={subcategory.title?.toLocaleLowerCase()}>
                                <Link to={"/services" + subcategory.url}>{language === "BG" ? subcategory.titleBG : subcategory.title}</Link>
                            </Menu.Item>
                        })}
                    </Menu.SubMenu>
                })}
            </Menu>
        </aside >
    )
}

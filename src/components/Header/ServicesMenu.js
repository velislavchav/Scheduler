import React from 'react'
import { Menu } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function ServicesMenu({ categories }) {
    return (
        <Menu.SubMenu key="services" icon={<UnorderedListOutlined />} title="Услуги">
            {categories.length > 0 ? categories.map(category => {
                return <Menu.ItemGroup key={category.title} title={category.title}>
                    {category.subcategories.map(subcategory => {
                        return <Menu.Item key={subcategory.title}>
                            <Link to={subcategory.url}>{subcategory.title}</Link>
                        </Menu.Item>
                    })}
                </Menu.ItemGroup>
            }) : null}
        </Menu.SubMenu>
    )
}

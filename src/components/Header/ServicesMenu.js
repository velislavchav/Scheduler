import React from 'react'
import { Menu } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function ServicesMenu({ categories, servicesTranslated, language }) {
    return (
        <Menu.SubMenu key="services" icon={<UnorderedListOutlined />} title={servicesTranslated}>
            {categories.length > 0 ? categories.map(category => {
                return <Menu.ItemGroup key={category._id} title={language === "BG" ? category.titleBG : category.title }>
                    {category.subcategories.map(subcategory => {
                        return <Menu.Item key={subcategory._id}>
                            <Link to={"/services" + subcategory.url}>{language === "BG" ? subcategory.titleBG : subcategory.title}</Link>
                        </Menu.Item>
                    })}
                </Menu.ItemGroup>
            }) : null}
        </Menu.SubMenu>
    )
}

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from "react-redux";
import { loadCategories } from "../../redux/actions/categoriesAction";
import { selectLanguage } from "../../redux/actions/languageAction";

// Antd
import { Layout, Menu } from 'antd';
import { UserOutlined, GlobalOutlined } from '@ant-design/icons';
import "./Header.scss"

// Components
import ServicesMenu from './ServicesMenu';

// Helpers
import { checkIsLanguageValid } from "../../utils/helpers"

function Header({ categories, language, loadCategories, selectLanguage }) {
    useEffect(() => {
        loadCategories();
    }, [])

    function handleChangeLanguage(ev) {
        const userLanguageSelection = ev.key || null;
        if (checkIsLanguageValid(userLanguageSelection) && userLanguageSelection !== language) {
            selectLanguage(userLanguageSelection);
        }
    }

    return (
        <Layout className="layout header-layout">
            <Layout.Header className="header">
                <Link to={"/"}>
                    <div className="logo" />
                </Link>
                <Menu className="header-menu-container" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="home"><Link to={"/"}>Начало</Link></Menu.Item>
                    <ServicesMenu categories={categories} />
                    <Menu.SubMenu key="my-profile" icon={<UserOutlined />} title="Моят профил">
                        <Menu.Item key="profile"><Link to={"/profile"}> Профил </Link></Menu.Item>
                        <Menu.Item key="schedule"> График </Menu.Item>
                        <Menu.Item key="logout"> Изход </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="languages" icon={<GlobalOutlined />} >
                        <Menu.Item key="ENG" onClick={handleChangeLanguage} value="ENG"> ENG </Menu.Item>
                        <Menu.Item key="BG" onClick={handleChangeLanguage} value="BG"> BG </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Layout.Header>
        </Layout >
    )
}

function mapStateToProps(state) {
    return {
        language: state.language,
        categories: state.categories,
    }
}

const mapDispatchToProps = {
    loadCategories,
    selectLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
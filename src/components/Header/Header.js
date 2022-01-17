import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from "react-redux";
import { loadCategories } from "../../redux/actions/categoriesAction";

// Antd
import { Layout, Menu } from 'antd';
import { UserOutlined, GlobalOutlined } from '@ant-design/icons';
import "./Header.scss"

// Components
import ServicesMenu from './ServicesMenu';

// Helpers
import headerContent from "./HeaderContent";

function Header({ categories, loadCategories, setNewLanguage, language}) {
    useEffect(() => {
        loadCategories();
    }, [])

    return (
        <Layout className="layout header-layout">
            <Layout.Header className="header">
                <Link to={"/"}>
                    <div className="logo" />
                </Link>
                <Menu className="header-menu-container" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="home"><Link to={"/"}>{ headerContent[language].home }</Link></Menu.Item>
                    <ServicesMenu categories={categories} servicesTranslated={headerContent[language].services} language={language}/>
                    <Menu.SubMenu key="my-profile" icon={<UserOutlined />} title={ headerContent[language].myProfile}>
                        <Menu.Item key="profile"><Link to={"/profile"}> { headerContent[language].profile } </Link></Menu.Item>
                        <Menu.Item key="schedule"> { headerContent[language].schedule } </Menu.Item>
                        <Menu.Item key="logout"> { headerContent[language].logout } </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="languages" icon={<GlobalOutlined />} >
                        <Menu.Item key="ENG" onClick={setNewLanguage} value="ENG"> {headerContent[language].languageENG} </Menu.Item>
                        <Menu.Item key="BG" onClick={setNewLanguage} value="BG"> {headerContent[language].languageBG} </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Layout.Header>
        </Layout >
    )
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
    }
}

const mapDispatchToProps = {
    loadCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
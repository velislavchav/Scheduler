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
import UserMenu from './UserMenu';

function Header({ categories, loadCategories, user, setNewLanguage, language}) {
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
                    {/* {user ? <Menu.Item key="add"><Link to={"/services/add"}>{ "DOBAVI" }</Link></Menu.Item> : <></>} */}
                    <ServicesMenu categories={categories} servicesTranslated={headerContent[language].services} language={language}/>
                    <UserMenu translatedContent={headerContent[language]} user={user} />
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
        user: state.user
    }
}

const mapDispatchToProps = {
    loadCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
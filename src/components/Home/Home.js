import content from "./HomeContent";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import "./Home.scss"

export default function Home({ language }) {
    return (
        <>
            <section id="home-page">
                <article className="home-page-image-left-text">
                    <h2> {content[language].title1} <br /> {content[language].title2} </h2>
                    <Button color="primary" className="sign-in-home-button"><Link to="/login">{content[language].loginBtn}</Link></Button>
                </article>
            </section>
            <section id="home-page-advantages">
                <h3> {content[language].advantages.bigTitle} </h3>
                {content[language]?.advantages?.items?.map(item => {
                    return <article className="advantage-container">
                        {/* <PlaceIcon fontSize="large"></PlaceIcon> */}
                        <h4> {item.title} </h4>
                        <p> {item.description} </p>
                    </article>
                })}
            </section>
        </>
    )
}

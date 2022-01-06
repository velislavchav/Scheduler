import React from 'react';
import { Carousel } from 'antd';

export default function Home() {
    return (
        <Carousel autoplay>
            <div>
                <img src='https://images.unsplash.com/photo-1495364141860-b0d03eccd065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGltZSUyMHNjaGVkdWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' width={"100%"} />
            </div>
            <div>
                <img src='https://image.shutterstock.com/image-vector/banner-time-management-concept-vector-260nw-752232736.jpg' width={"100%"} />
            </div>
        </Carousel>
    )
}

import React from 'react';
import { Card } from 'antd';
import './ActivityCard.scss';

export default function ActivityCard() {
    return (
        <Card
            hoverable
            className='activity-card'
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )
}

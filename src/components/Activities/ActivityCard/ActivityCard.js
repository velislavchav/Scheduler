import React from 'react';
import { Card } from 'antd';
import './ActivityCard.scss';

export default function ActivityCard({ language, activity }) {
    return (
        <Card
            hoverable
            className='activity-card'
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Card.Meta title={language === "BG" ? activity.titleBG : activity.title} description={language === "BG" ? activity.descriptionBG : activity.description} />
        </Card>
    )
}

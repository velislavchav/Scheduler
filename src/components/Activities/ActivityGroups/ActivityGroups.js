import React, { useState, useEffect } from 'react'
import ActivityCard from '../ActivityCard/ActivityCard'
import { Divider } from 'antd';
import { getActivitiesByCategory } from "../../../api/activitiesApi";
import './ActivityGroups.scss'

export default function ActivityGroups({ selectedCategory = "", selectedSubcategory = "", language, selectedCategoryTranslated }) {
    const [activities, setActivities] = useState([]);
    const dividerTextTranslated = language === "BG" ? 
    `${selectedCategoryTranslated?.category?.titleBG} - ${selectedCategoryTranslated?.subcategory?.titleBG}` :
    `${selectedCategoryTranslated?.category?.title} - ${selectedCategoryTranslated?.subcategory?.title}`;

    useEffect(() => {
        getActivitiesByCategory(selectedCategory, selectedSubcategory)
            .then(result => {
                setActivities(result)
                console.log(result)
            })
    }, [selectedCategory, selectedSubcategory]);

    return (
        <article className='activity-group-container'>
            <Divider orientation="left" plain>
                {dividerTextTranslated}
            </Divider>
            {activities.length > 0 ? activities.map(activity => {
                return <ActivityCard key={activity._id} activity={activity} language={language} />
            }) : <span> {language === "BG" ? "Няма намерени резултати." : "No results found."} </span>}
        </article>
    )
}

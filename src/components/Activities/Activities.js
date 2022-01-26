import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import { loadCategories } from '../../redux/actions/categoriesAction'
import { getSelectedCategoryTranslated } from "../../utils/helpers"
import ActivityGroups from './ActivityGroups/ActivityGroups'
import Sidemenu from './Sidemenu/Sidemenu'
import "./Activities.scss"

function Activities({ language, categories, loadCategories }) {
    const { category, subcategory } = useParams();
    const [selectedCategoryTranslated, setSelectedCategoryTranslated] = useState({});
    useEffect(() => {
        loadCategories();
    }, [])

    useEffect(() => {
        setSelectedCategoryTranslated(getSelectedCategoryTranslated(category, subcategory, categories));
    }, [category, subcategory, categories])

    return (
        <div className='activities-container'>
            {categories.length > 0 ? <>
            <Sidemenu categories={categories} selectedCategory={category} selectedSubcategory={subcategory} language={language} />
            <section className='activities-groups-container'>
                <ActivityGroups selectedCategory={category} selectedSubcategory={subcategory} language={language} selectedCategoryTranslated={selectedCategoryTranslated} />
            </section></> : ""}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
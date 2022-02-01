import { useEffect } from 'react'
import { connect } from "react-redux";
import moment from 'moment';
import { loadCategories } from '../../../redux/actions/categoriesAction';
import { makeCategoryTitleToUrlSafeTitle } from "../../../utils/helpers";
import { content, validationMessages } from "./AddActivityContent";
import WorkTime from "./WorkTime";
import 'antd/dist/antd.css';
import { Typography, Form, Input, Cascader, DatePicker, Button} from 'antd';

const makeCategoriesToCascaderOptions = (categories = [], language = "BG") => {
    let result = [];
    if (categories.length > 0) {
        let temporaryResult = {
            value: '',
            label: '',
            children: [],
        }
        categories.forEach(category => {
            temporaryResult.value = makeCategoryTitleToUrlSafeTitle(category?.title) || null;
            temporaryResult.label = language === "BG" ? category?.titleBG : category?.title;
            category?.subcategories?.forEach(subcategory => {
                const children = { value: subcategory?.title, label: language === "BG" ? subcategory.titleBG : subcategory.title };
                temporaryResult.children.push(children);
            })
            result.push({ ...temporaryResult })
            // clear tempory result
            temporaryResult = {
                value: '',
                label: '',
                children: [],
            }
        })
    }
    return result;
}

function disabledDate(current) {
    // Can not select days after today
    return current && current > moment().endOf('day');
}

function AddActivity({ categories, language }) {
    const messagesForRequiredFields = validationMessages.required[language];
    useEffect(() => {
        loadCategories();
    }, [])

    const onFinish = values => {
        console.log('Received values of form:', values);
    };

    return (
        <div className='form-container'>
            {/* <Typography.Title className='text-center'>{content[language].addNewActivityTitle}</Typography.Title> */}
            <Form onFinish={onFinish} labelCol={{span: 6}} wrapperCol={{span: 16}} layout="horizontal" size="large">
                <Form.Item label={content[language].emailLabel} name='email'>
                    <Input disabled />
                </Form.Item>
                <Form.Item label={content[language].categoryLabel} name='category' rules={[{ required: true, message: messagesForRequiredFields.category }]}>
                    <Cascader options={makeCategoriesToCascaderOptions(categories, language)} />
                </Form.Item>
                <Form.Item label={content[language].businessTitleLabel} name='title' rules={[{ required: true, message: messagesForRequiredFields.title }]}>
                    <Input placeholder="Viktor's barber shop" />
                </Form.Item>
                <Form.Item label={content[language].businessTitleBGLabel} name='titleBG' rules={[{ required: true, message: messagesForRequiredFields.titleBG }]}>
                    <Input placeholder="Бръснарницата на Виктор" />
                </Form.Item>
                <Form.Item label={content[language].businessDescriptionLabel} name='description' rules={[{ required: true, message: messagesForRequiredFields.description }]}>
                    <Input.TextArea placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </Form.Item>
                <Form.Item label={content[language].businessDescriptionBGLabel} name='descriptionBG' rules={[{ required: true, message: messagesForRequiredFields.descriptionBG }]}>
                    <Input.TextArea placeholder='Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия.' />
                </Form.Item>
                <Form.Item label={content[language].addressLabel} name='address' rules={[{ required: true, message: messagesForRequiredFields.address }]}>
                    <Input placeholder='обл. Смолян, гр. Смолян, бул. България 236' />
                </Form.Item>
                <Form.Item label={content[language].startedDateLabel} name='dateCreated' rules={[{ required: true, message: messagesForRequiredFields.dateCreated }]}>
                    <DatePicker format="DD/MM/YYYY" disabledDate={disabledDate} placeholder="DD/MM/YYYY" />
                </Form.Item>
                <Form.Item label={content[language].websiteLabel} name='website'>
                    <Input placeholder='www.website.com' />
                </Form.Item>
                <Form.Item name="mobilePhone" label={content[language].mobilePhoneLabel} rules={[{ required: true, message: messagesForRequiredFields.mobilePhone }]} >
                    <Input placeholder='8548523324' />
                </Form.Item>
                <Form.Item label={content[language].phoneLabel} name='phone'>
                    <Input placeholder='8548523324' />
                </Form.Item>
                <Form.Item label={content[language].workTimeLabel}>
                    <WorkTime language={language} />
                </Form.Item>
                <Button htmlType='submit' type='primary' block>{content[language].addNewActivityTitle}</Button>
            </Form>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        categories: state.categories,
    }
}

const mapDispatchToProps = {
    loadCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddActivity);

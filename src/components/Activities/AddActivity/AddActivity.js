import { useEffect } from 'react'
import { connect } from "react-redux";
import moment from 'moment';
import { loadCategories } from '../../../redux/actions/categoriesAction';
import { makeCategoryTitleToUrlSafeTitle } from "../../../utils/helpers";
import content from "./AddActivityContent";
import WorkTime from "./WorkTime";
import 'antd/dist/antd.css';
import {
    Typography,
    Form,
    Input,
    Cascader,
    Select,
    DatePicker,
    Button
} from 'antd';

const mobilePhonePrefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 100 }}>
            <Select.Option value="359">+359</Select.Option>
            <Select.Option value="87">+87</Select.Option>
        </Select>
    </Form.Item>
);

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
    useEffect(() => {
        loadCategories();
    }, [])

    const onFinish = values => {
        console.log('Received values of form:', values);
    };

    return (
        <div className='form-container'>
            <Typography.Title className='text-center'>{content[language].addNewActivityTitle}</Typography.Title>
            <Form
                onFinish={onFinish}
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 16
                }}
                layout="horizontal"
                size="large"
            >
                <Form.Item label={content[language].emailLabel}>
                    <Input disabled />
                </Form.Item>
                <Form.Item label={content[language].categoryLabel} required>
                    <Cascader options={makeCategoriesToCascaderOptions(categories, language)} />
                </Form.Item>
                <Form.Item label={content[language].businessTitleLabel} required>
                    <Input placeholder="Viktor's barber shop" />
                </Form.Item>
                <Form.Item label={content[language].businessTitleBGLabel} required>
                    <Input placeholder="Бръснарницата на Виктор" />
                </Form.Item>
                <Form.Item label={content[language].businessDescriptionLabel} required>
                    <Input.TextArea placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </Form.Item>
                <Form.Item label={content[language].businessDescriptionBGLabel} required>
                    <Input.TextArea placeholder='Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия.' />
                </Form.Item>
                <Form.Item label={content[language].addressLabel} required>
                    <Input placeholder='обл. Смолян, гр. Смолян, бул. България 236' />
                </Form.Item>
                <Form.Item label={content[language].startedDateLabel}>
                    <DatePicker format="DD/MM/YYYY" disabledDate={disabledDate} placeholder="DD/MM/YYYY" />
                </Form.Item>
                <Form.Item label={content[language].websiteLabel}>
                    <Input placeholder='www.website.com' />
                </Form.Item>
                {/* <Form.Item label={content[language].mobilePhoneLabel} required>
                    <Input />
                </Form.Item> */}
                <Form.Item
                    name="phone"
                    label={content[language].mobilePhoneLabel}
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input addonBefore={mobilePhonePrefixSelector} style={{ width: '100%' }} placeholder='876487291' />
                </Form.Item>
                <Form.Item label={content[language].phoneLabel}>
                    <Input placeholder='8548523324' />
                </Form.Item>
                <Form.Item label={content[language].workTimeLabel}>
                    <WorkTime language={language} content={content} />
                </Form.Item>
                <Button type='submit'>Button</Button>
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

import { Form, Button, Space, Select, TimePicker  } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const days =  { //days should be same amount and in same order
    BG: ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота', 'Неделя', 'Обедна почивка'],
    ENG: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Lunch break' ]
};

function WorkTime({ language, content }) {
  return (
    // <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="days">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <Space key={field.key} align="baseline">
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.area !== curValues.area || prevValues.days[language] !== curValues.days[language]
                  }
                >
                  {() => (
                    <Form.Item
                      {...field}
                      label={content[language].dayLabel}
                      name={[field.name, content[language].dayLabel]}
                      rules={[{ required: true, message: 'Missing day' }]}
                    >
                      <Select style={{ width: 140 }} placeholder={content[language].selectDayLabel}>
                        {days[language].map((item, index) => (
                          <Select.Option key={days["ENG"][index]} value={days["ENG"][index]}>
                            {item}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  )}
                </Form.Item>
                <Form.Item
                  {...field}
                  label={content[language].timeRangeLabel}
                  name={[field.name, content[language].timeRangeLabel]}
                  rules={[{ required: true, message: 'Missing time range' }]}
                >
                    <TimePicker.RangePicker placeholder={[content[language].startTimeRangeLabel, content[language].endTimeRangeLabel]} />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                {content[language].addWorkTimeLabel}
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    //   <Form.Item>
    //     <Button type="primary" htmlType="submit">
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>
  );
};

export default WorkTime;
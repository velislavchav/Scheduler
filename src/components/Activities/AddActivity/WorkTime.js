import { content, validationMessages, days } from "./AddActivityContent";
import { Form, Button, Space, Select, TimePicker } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

function WorkTime({ language }) {
  const messagesForRequiredFields = validationMessages.required[language];
  return (
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
                    name={[field.name, "day"]}
                    rules={[{ required: true, message: messagesForRequiredFields.worktimeDay }]}
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
                name={[field.name, "timerange"]}
                rules={[{ required: true, message: messagesForRequiredFields.worktimeTimeRange }]}
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
  );
};

export default WorkTime;
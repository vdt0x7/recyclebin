import { Button, Space } from "antd";
import {CaretUpOutlined,CaretDownOutlined} from '@ant-design/icons';
const antBtn = {
  width: '120px',
}
export const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Action",
    align: "center",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button type="default" icon={<CaretUpOutlined/>} style={antBtn}>Add</Button>
        <Button type="default"  icon={<CaretDownOutlined/>} style={antBtn}>Delete</Button>
        <Button type="primary" style={antBtn}>Edit</Button>
      </Space>
    ),
  },
];
export const dataset = [
  {
    key: "1",
    id: "zl",
    name: "Zalo",
  },
  {
    key: "2",
    id: "tv",
    name: "Teamview",
  },
  {
    key: "3",
    id: "ds",
    name: "MSBOT",
  },
  {
    key: "4",
    id: "fe",
    name: "Fire Eye",
  },
];

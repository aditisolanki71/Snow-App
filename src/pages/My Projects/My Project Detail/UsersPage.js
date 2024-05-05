import React, { useState } from 'react';
import { Table } from 'antd';
import user1 from '../../../assets/images/user/user1.svg';
import user2 from '../../../assets/images/user/user2.svg';
import user3 from '../../../assets/images/user/user3.svg';
import search from '../../../assets/images/user/Search.svg';
import './UsersPage.css';
import { usersColumns, usersData } from '../../../utils/helper';

const UsersPage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#d3d3d3',
          marginBottom: '10px',
        }}
      >
        <div>
          <img src={user1} alt="card img" />
          <img src={user2} alt="card img" />
          <img src={user3} alt="card img" />
        </div>
        <div>
          <img src={search} alt="card img" />
        </div>
      </div>
      <div className="responsive-table">
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={usersColumns}
          dataSource={usersData}
          rowClassName={(record, index) => {
            if (selectedRowKeys.includes(record.key)) {
              return 'selected-row';
            }
            return '';
          }}
        />
      </div>
    </div>
  );
};
export default UsersPage;

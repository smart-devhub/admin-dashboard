// Example usage in another component or page
import React from 'react';
import Table from '../../component/common/Table';


const Allusers = () => {
  const headers = ['Name', 'Age', 'Location'];
  const activedata = [
    { Name: 'John Doe', Age: 25, Location: 'New York' },
    { Name: 'Steve Smith', Age: 30, Location: 'San Francisco' },
    { Name: 'David Warner', Age: 25, Location: 'New York' },
   
    // Add more rows as needed
  ];

  const data = [
    { Name: 'John Doe', Age: 25, Location: 'New York' },
    { Name: 'Steve Smith', Age: 30, Location: 'San Francisco' },
    { Name: 'David Warner', Age: 25, Location: 'New York' },
    { Name: 'Pat Cummins', Age: 30, Location: 'San Francisco' },
    { Name: 'Usman Khwaja', Age: 25, Location: 'New York' },
   
    // Add more rows as needed
  ];

  return (
    <div>
      
      <Table headers={headers} data={data} title={"Users"} />
      <Table headers={headers} data={activedata} title={"Active Users"} />
    </div>
  );
};

export default Allusers;

import React from 'react'; //import React library
import { SenatorRow } from './SenatorRow';
import { TableHeader } from './TableHeader';

const EXAMPLE_SENATORS = [
  { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export function SenatorTable(props) {
  const { senatorsList } = props;
  const senatorsElements = senatorsList.map((senatorsList) => {
    return <SenatorRow key={senatorsList.id} senatorData={senatorsList} />
  });
  return (
    <table className='table table-bordered'>
      <TableHeader columnNames={['Name', 'State', 'Phone', 'Twitter']} />
      <tbody>{senatorsElements}</tbody>
    </table>
  )
}
import React from 'react';

import Status from '../../business/status';
import Category from '../../business/category';

const mapBadgeColors = {
  '1' : 'green',
  '2' : 'blue',
  '3' : 'orange',
  '4' : 'chance-red',
  '5' : 'shadow-red'
};

export default (props) => {
  return (<tr>
          <td><span className={`badge ${mapBadgeColors[props.report.status]}`}>{Status[props.report.status]}</span></td>
          <td>{props.report.title}</td>
          <td>{Category[props.report.categoryId]}</td>
          <td>{props.report.userId}</td>
          <td>{props.report.createdAt}</td>
        </tr>);
}
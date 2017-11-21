export default (props) => {
  console.log(props);
  return (<tr>
          <td>{props.report.title}</td>
          <td>{props.report.description}</td>
        </tr>);
}
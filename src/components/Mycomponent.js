import DataTable from 'react-data-table-component';

const data = [{ id: 1, title: 'DataTable in ReactJS', year: '2021' }];
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];

class MyComponent extends Component {
  render() {
    return (
      <DataTable title="YourBlogCoach" columns={columns} data={data} pagination selectableRows></DataTable>
    )
  }
};
export default MyComponent;
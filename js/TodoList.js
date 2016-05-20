'use strict';
import { ToDoListItem} from './ToDoListItem';
import { ListView,Component } from 'react-native';


class TodoList extends Component {

    componentWillMount() {
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
    }

    render() {
        var dataSource = this.dataSource.cloneWithRows(this.props.items);
        return (
            <ListView
                dataSource={dataSource}
                renderRow={(rowData, sectionID, rowID) =>
          <ToDoListItem item={rowData}
          onPress={() => this.props.onPressItem(rowData, rowID)}
          />
        }/>
        );
    }

}


module.exports = TodoList;

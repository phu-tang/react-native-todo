import {
  Component,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  View
} from 'react-native';
import {TodoList} from './TodoList'

class Todos extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      currentText :'',
      todo_tasks: [],
      isDisable: true,
      dataSource:ds.cloneWithRows([]),
    };
  };

  _submitForm = () =>{
    this.setState({

      currentText: '',
      isDisable: true,
    });

  };

  _onTextChange = (text) =>{
    this.setState({currentText: text});
    if(text == ''){
      this.setState({isDisable: true});
    } else {
      this.setState({isDisable: false});
    }
  };

   _isValidToSubmit = () =>{
     return false;
  };

  _renderRow = (rowData) =>{
    return(
      <View>
      <Text> {rowData} </Text>
      </View>
    );
  };

  openItem = (rowData, rowID) =>{

  }



  render(){
    return(
      <View>
      <TextInput value={this.state.currentText} onChangeText={this._onTextChange}>
      </TextInput>
        <TouchableOpacity disabled={this.state.isDisable} onPress={this._submitForm}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <View style={{flex:1}}>
            <TodoList
                    items={this.state.todo_tasks}
                    onPressItem={this.openItem}
                    />
            </View>
      </View>
      );
  }
};
module.exports = Todos;

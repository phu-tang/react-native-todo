'use strict';
import { Text, View, TouchableHighlight,Component } from 'react-native';
class ToDoListItem extends Component {
    render() {
        var item = this.props.item;
        return (
            <View>
                <TouchableHighlight
                    onPress={this.props.onPress} >
                    <View >
                        <Text>
                          {item}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = ToDoListItem;

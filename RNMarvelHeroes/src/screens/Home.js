import React from 'react'
import { TouchableOpacity, View, FlatList, Text, Image, ActivityIndicator } from 'react-native'
import md5 from 'js-md5'

// const PUBLIC_KEY = ''
// const PRIVATE_KEY = ''

const PUBLIC_KEY = '9b2283ea8e215f4e1980999f71ff08ea'
const PRIVATE_KEY = '4c06cfd481f52df07c414025cbc7fbb7b29a65b1'

export default class Home extends React.PureComponent {
    static navigationOptions = {
        title: 'Heroes'
    }

    state = {
        data: [],
        loading: false
    }
    
    async componentDidMount() {
        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
        this.setState({loading:true})
        await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=20&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        // this.setState({data:response.data, loading:false})
        .then((response)=> response.json())
        .then((response)=> {
                this.setState({data: response.data.results, loading:false})
            }
        )
    }

    _renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={()=>this._onItemPress(item)} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
                <Image style={{height: 50, width: 50, borderRadius: 25}} source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
                <Text style={{marginLeft: 10}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    
    _onItemPress = (item) => {
        this.props.navigation.navigate('Description', {hero: item})
    }

    render() {
        if (this.state.loading) {
           return <ActivityIndicator 
           animating={this.state.loading}
           size="large"
           />
        }
        
        return (
            <FlatList 
                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=> 
                    <View
                        style={{height:1, backgroundColor: '#f7f7f7'}}
                    />}
            />
        )
    }
}

import React, {Component} from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity,Modal} from 'react-native';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Input from './components/Input';
import {StackNavigator,TabNavigator}from 'react-navigation';


class SayHello extends Component
{
    onPress = () => {
        this.props.navigation.navigate('Bye');
    }
    render()
    {
        const {textStyle,imageStyle,viewStyle,buttonStyle,buttonTextStyle} = styles;
        return(
            <View style={viewStyle}>
                 <Text style={textStyle}>
                    Hello World!
                </Text>
                <Text style={textStyle}>
                    Enjoy this very hard-to-do application!
                </Text>
                <Image style={imageStyle} source ={require('./img/reactnative.png')}/>
                <Text style={textStyle}>
                   This is React Native!
                </Text>
                <TouchableOpacity
                                style={buttonStyle}
                                 onPress={this.onPress}
                            >
                            <Text style={buttonTextStyle}>Say hello back!</Text>
                </TouchableOpacity>
            </View>   
        );
    }
}
class Bye extends Component
{
    render()
    {
        //you will find an error because motivationStyle is not declared
        const {motivationStyle,textStyle}=styles;
        return(
            <Card>
                <CardSection>
                    <Text style={textStyle}>Bye! Got em!</Text>
                </CardSection>
                <CardSection>
                    <Image
                    source={require('./img/bye.gif')}
                    style={motivationStyle}
                    />
                </CardSection>
            </Card>
        );
    }
}
class WriteHome extends Component
{
    onPress = () => {
        this.props.navigation.navigate('Show');
    }

    render(){
        const {buttonStyle,textStyle,buttonTextStyle} = styles;

        return(
                <View>
                   <View> 
                    <Text style={textStyle}>
                    By the end of this, he will be a spud.   
                    </Text>
                    <Text style={textStyle}>
                    Please, do not click the button.    
                    </Text>
                    </View>
                    <TouchableOpacity
                                style={buttonStyle}
                                 onPress={this.onPress}
                            >
                            <Text style={buttonTextStyle}>Look for motivation</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}
class ShowTextInput extends Component
{
    constructor(props){
        super(props);
        this.state = {inspiration:''}
    }
    render()
    {
        let inspiration = this.state.inspiration;
        const {textStyle} = styles;
        return(
          <View>
             <Card>
                    <CardSection>
                        <Input
                        placeholder="You are a scud"
                        value={this.state.inspiration}
                        onChangeText={(inspiration)=>this.setState({inspiration:inspiration})}
                        />
                    </CardSection>    
                    <CardSection>
                    <Text style={textStyle}> {this.state.inspiration} </Text>
                  </CardSection>  
                </Card>
          </View>      
        );
    }
}
class End extends Component 
{
    constructor(props){
        super(props);
        this.state = {
            modalVisible:false,
        }
    }
    setModalVisible(visible){
        this.setState({modalVisible:visible});
    }
    showModal(){
        this.setModalVisible(true);
    }
    render()
    {
        const {motivationStyle,textStyle,buttonStyle,buttonTextStyle} = styles;
        const picture = {
            uri: 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif'
          };
        return(
            <View>
                <Text style={textStyle}>My reaction to React Native and to this presentation</Text>
                <TouchableOpacity
                                style={buttonStyle}
                                 onPress={()=>{this.setModalVisible(true)}}
                            >
                            <Text style={buttonTextStyle}>Show</Text>
                    </TouchableOpacity>
                <Modal
                    visible={this.state.modalVisible}
                    transparent = {false}
                    animationType = {'slide'}
                    onRequestClose={()=>{}}
                >
                <View>
                    <Card>
                            <CardSection>
                                <Image
                                source={picture}
                                style={motivationStyle}
                                />
                            </CardSection>
                            <CardSection>
                                <Image
                                source={require('./img/giphy.gif')}
                                style={motivationStyle}
                                />
                            </CardSection>
                        <TouchableOpacity
                                    style={buttonStyle}
                                    onPress= {() => {this.setModalVisible(!this.state.modalVisible)}}
                                >
                                <Text style={buttonTextStyle}>Hide</Text>
                        </TouchableOpacity>
                        </Card>
                </View>
                </Modal>
            </View>
        );
    }
}
class ShowTextScreen extends Component 
{
    render() 
    {
        return(
            <View>
                <ShowTextInput {...this.props}/>
            </View>
        );
    }
}
class WriteHomeScreen extends Component 
{
    render()
    {
        return(
            <View>
                <WriteHome {...this.props}/>
            </View>
        );
    }
}
class ShowScreen extends Component 
{
    render() {
        return(
            <View>
                <SayHello{...this.props}/>
            </View>
        );
    }
}
class EndScreen extends Component 
{
    render()
    {
        return(
            <View>
                <End />
            </View>
        );
    }
}
class ByeScreen extends Component 
{
    render()
    {
        return(
            <View>
                <Bye />
            </View>
        );
    }
}
const SeminarDemo = TabNavigator ({
    Hello : { screen : ShowScreen },
    Write : { screen : WriteHomeScreen,
    },
    End: { screen : EndScreen },
});
const App = StackNavigator({
    Home: {screen: SeminarDemo,
        navigationOptions: {
            title: 'Seminar Demo',
            
         },
    },
    Show: {
        screen: ShowTextScreen,
        navigationOptions: {
            title: 'Express your feelings',
            
         },
    },
    Bye:{
        screen: ByeScreen,
        navigationOptions: {
            title: 'Sorry not sorry',
            
         },
    },
});

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'white'
    },
    imageStyle: {
        width:300,
        height:300,
        justifyContent:'center',
        backgroundColor:'white',
        alignItems:'center',
    },
    motivationStyle:{
        width:250,
        height:250,
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: 10
      },
      buttonTextStyle:{
          color:'white',
          fontSize:18,
          fontWeight:'bold',
      },
      textStyle: {
          fontSize:18,
          backgroundColor: 'white',
          color: 'black',
          fontWeight:'bold',
          paddingLeft:15,
      }
});
export default App;
import React,{ useEffect,useState} from 'react';
import { render } from 'react-dom';
import { View, Text, Button, ScrollView, ActivityIndicator,StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getVideos } from '../../../store/actions';

const VideosScreen = ({navigation}) => {
    const [loadingMore,setLoadingMore] = useState(false);
    const articles = useSelector(state => state.articles)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideos())
    },[dispatch])



    const renderVideos = () => (
        articles.videos.map((item)=>(
            <Tile
                key={item.id}
                imageSrc={{ uri: item.image }}
                title={item.title}
                icon={{ name:'play-circle',type:'font-awesome',color:'#fff',size:50}}
                contentContainerStyle={styles.contentContainerStyle}
                containerStyle={styles.containerStyle}
                titleStyle={{fontSize:15}}
                onPress={()=> navigation.navigate('VideoScreen',{
                    id: item.id,
                    postData: item
                })}
            />
        ))
    )


    return(
        <ScrollView>
            <View style={{padding:20}}>
                { articles && articles.videos ?
                    renderVideos()
                    :null
                }
            </View>
            {/* <Button
                title="see article"
                onPress={()=> navigation.navigate('Video_screen')}
            /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentContainerStyle:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#e1e8ee',
        shadowColor:'rgba(0,0,0,.2)'
    },
    containerStyle:{
        width:'100%',
        height:250,
        marginBottom:15
    }
})



export default VideosScreen;
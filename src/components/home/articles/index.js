import React, { useEffect } from 'react';
import { 
    View, Text, 
    Button, ScrollView,
    TouchableOpacity,StyleSheet 
} from 'react-native';
import { Card } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../../store/actions';
 
const HomeScreen = ({navigation}) => {
    const articles = useSelector(state => state.articles);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getArticles())
    },[dispatch])


    const renderCard = () => (
        articles.posts.map((item)=>(
            <TouchableOpacity
                key={item.id}
                onLongPress={()=> navigation.navigate('Article_screen',{
                    id: item.id,
                    postData: item
                })}
            >
                <Card>
                    <Card.Title style={styles.cardTitle}>
                        <Text>{item.title}</Text>
                    </Card.Title>
                    <Card.Divider/>
                    <Text style={styles.cardText}>
                        {item.excerpt}
                    </Text>
                </Card>
            </TouchableOpacity>
        ))
    )


    return(
        <ScrollView>
            { articles && articles.posts ?
                renderCard()
                :null
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardTitle:{
        fontSize:20,
        textAlign:'left'
    },
    cardText:{
        marginBottom:10,
        marginTop:10
    }
})

export default HomeScreen;
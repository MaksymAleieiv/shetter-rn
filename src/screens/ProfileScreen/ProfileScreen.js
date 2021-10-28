import React from 'react'
import Feed from '../../components/Feed/Feed'
import Profile from '../../components/Profile/Profile'
import { ScrollView, TouchableOpacity, View, Text, InteractionManager } from 'react-native';
import mainInstance from '../../hooks_and_functions/mainInstance';
import HeaderSkeleton from '../../components/Skeletons/HeaderSkeleton/HeaderSkeleton';
import { ProfileScreenStyles } from './ProfileScreenStyles';

const ProfileScreen = ({route, navigation}) => {
    const [userData, setUsersData] = React.useState({skeleton: true})
    const [feeds, setFeeds] = React.useState([])
    const [currentScreen, setCurrentScreen] = React.useState(0)
    const [feedTabs, setFeedTabs] = React.useState([])
    const ScrollViewRef = React.useRef()

    React.useEffect(() => {
        const getUser = async () => {
            try{
                const {data} = await mainInstance.get('/auth/users/' + route.params.username);
                setUsersData(data)
                setFeeds([
                    {
                        name: 'Shets',
                        count: data.user_posts_count
                    },
                    {
                        name: 'Replies',
                        count: data.user_comments_count
                    },
                    {
                        name: 'Liked',
                        count: data.user_post_likes_count// + data.user_comment_likes_count
                    }
                ])
            }catch{
                navigation.goBack()
            }
        }
        InteractionManager.runAfterInteractions(() => {
            getUser();
            setFeedTabs(['Profile__users-posts', 'Profile__users-comments', 'Profile__users-liked-posts'])
        })
    }, [])

    const HeaderManager = () => {
        if(feeds.length === 0)
            return (<HeaderSkeleton />)
        else return (
            <View style={ProfileScreenStyles.header}>
                {feeds.map((feed, index) => (
                    <TouchableOpacity
                        key={feed.name}
                        style={ProfileScreenStyles.header__item}
                        onPress={() => {setCurrentScreen(index); ScrollViewRef.current.scrollTo({y: 250})}}
                    >
                        <View style={[{flexDirection: 'row'}, currentScreen === index ? {borderBottomColor: '#7D7499', borderBottomWidth: 3, height: '100%', marginTop: 8, height: 27} : {}]}>
                            <Text style={ProfileScreenStyles.bold}>{feed.name}</Text>
                            <Text style={[ProfileScreenStyles.cf, ProfileScreenStyles.ml6]}>{feed.count}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

    return (
        <ScrollView ref={ScrollViewRef} stickyHeaderIndices={[1]} style={{flex: 1}}>
            <Profile userData={userData}/>
            <View style={ProfileScreenStyles.headerContainer}>
                <HeaderManager/>
            </View>
            {feedTabs.map((feed, index) => (
                <View style={currentScreen === index ? {flex: 1} : {display: 'none', flex: 1}} key={feed}>
                    <Feed navigation={navigation} route={route} feed={feed} />
                </View>
            ))}
        </ScrollView>
    )
}

export default ProfileScreen
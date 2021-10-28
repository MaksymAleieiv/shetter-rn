import mainInstance from '../../../hooks_and_functions/mainInstance';

const commentFeeds = ['Comments', 'Profile__users-comments', 'Profile__users-liked-comments', 'Bookmarks__users-liked-comments']

export default function updatePosts(changedPostIds, changedCommentIds, posts, feed, setPosts) {
    let changedIds;
    if(commentFeeds.indexOf(feed) !== -1) changedIds = changedCommentIds;
    else changedIds = changedPostIds
    if(changedIds.length > 0){
        let tempPosts = [...posts];
        let indexesOfPostsThatShouldBeUpdated = [];
        changedIds.forEach(id => {
            let index = tempPosts.indexOf(tempPosts.find(post => post.id === id))
            if(index !== -1)indexesOfPostsThatShouldBeUpdated.push(index)
        })
        let finishedQuery = 0
        indexesOfPostsThatShouldBeUpdated.forEach(async (indexOfPost) => {
            let url = (commentFeeds.indexOf(feed) !== -1) ? '/api/v1/comments/' : '/api/v1/posts/'
            const res = await mainInstance.get(url + tempPosts[indexOfPost].id)
            tempPosts[indexOfPost] = res.data;
            finishedQuery++;
            if(finishedQuery === indexesOfPostsThatShouldBeUpdated.length) {
                setPosts(tempPosts)
            }
        })
    }else return
}

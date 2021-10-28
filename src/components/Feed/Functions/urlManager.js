export default function urlManager(feed, route, jumpLength, parentId, postId, startPos) {
    let url
    switch(feed){
        case 'Main' : url = '/api/v1/posts/?'; break;
        case 'Comments' : 
            url = '/api/v1/comments/?parent_id=' + parentId;
            if(parentId) {
                url += '&post_id=' + postId
            }
            break;
        case 'Profile__users-posts' : url = '/api/v1/posts/?username=' + route.params.username; break;
        case 'Profile__users-liked-posts' : url = '/api/v1/posts/?liked_by=' + route.params.username; break;
        case 'Profile__users-comments' : url = '/api/v1/comments/?username=' + route.params.username; break;
        //case 'Profile__users-liked-comments' : url = '/api/v1/comments/?liked_by=' + route.params.username; break;
        case 'Subscriptions' : url = '/api/v1/my_subscriptions/?'; break;
        case 'Hot' : url = '/api/v1/posts/hot/?'; break;
        case 'Bookmarks__users-liked-posts' : url = '/api/v1/posts/my_bookmarks/?'; break;
        //case 'Bookmarks__users-liked-comments' : url = '/api/v1/comments/my_bookmarks/?'; break;
        default : break;
    }

    url += '&startpos=' + startPos + '&endpos=' + (startPos + jumpLength);

    return url
}

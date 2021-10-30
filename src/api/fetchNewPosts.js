import mainInstance from './mainInstance'

export default function fetchNewPosts(id, setPosts) {
    if(Number.isInteger(id)){
        mainInstance.post('/api/v1/posts/listener/', {
            'last_id' : id + ''
        })
        .then((res) => {
            const np = res.data.new_posts;
            if(np > 0){
                mainInstance.get('/api/v1/posts/?startpos=0&endpos=' + np)
                .then(res => {
                    let {data} = res
                    setPosts(p => [...data, ...p])
                })
            }
        })
        .catch(err => {})
    }
}
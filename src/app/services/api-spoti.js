import axios from 'axios';


export const searchTrack = (text) =>{
    return(
        axios.get(`https://api.spotify.com/v1/search?q=${text}&type=track&market=MX`,{
            headers:{
                Authorization:'Bearer BQAYja8ib-3oaRpAOeXqNtNDwX_5pWv0NEVBhNPmLsNUd6lyTTR668xgC_XV23M58FAZrkDtnlGPZeYp4sIjtm6KY_JGzEKpO7spr8BFeABhZK3Yj3Egqzebv3ceW2-SKjQv8NkTKIDr4-lU4oQkpBrGdTh4anvgljvwwjg'
                
            }
        })
    )
}
import {Card} from 'antd';
const { Meta } = Card;

function TrackDetail({album,name,preview_url,duration_ms,popularity,artists}){
    return(

        <Card
            hoverable
            style={{width:240}}
            cover={<img alt="Album Artist" src={album? (album.images.length ? album.images[0].url : '')  : ""} />}
            
       >
            <Meta  title={name}/>
            <Meta 
                description={`Duration: ${duration_ms} - Popularity: ${popularity}`}  
                
            />
            <Meta 
                description={`Album: ${album? album.name : "N/A"} - Artist: ${artists? artists[0].name : "Unknown"}`}  
                
            />
            <audio src={preview_url} controls >

            </audio>
        </Card>
    )
}

export default TrackDetail
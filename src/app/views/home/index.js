import { useState } from 'react';
import {Layout} from 'antd';
import { SearchInput, TrackDetail, TrackList } from '../../components';
import { searchTrack } from '../../services/api-spoti';

const {Content} = Layout

function Home() {
    const [results,setResults] = useState([])
    const [song,setSong] = useState({}) //para detalles de la cancion
    //para hace asincrono, usamos async && await
    // async function nombre(){}

    const onSearch = async (value) =>{
        try {
            //await searchTrack(value)
            //es regresar tda la info del backend
            //es destructurarlo y obtener la llave que importamos
            //const response = await searchTrack(value)
            const {data} = await searchTrack(value)
            setResults(data.tracks.items)
            console.log('kesesto?',data)
        }catch(error){
            console.log('kesesto?',error)

        }
        
        
    }
    
    const onPlaySong = (song) => setSong(song)
    return (
    <Layout
    style={{ padding: '0 24px 24px' }}
    >
        <Content
        className="site-layout-background"
        style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        
        }} 
        >
            <SearchInput
                onSearch={onSearch}
            />
                <div>
                    <TrackList 
                    results={results}
                    onPlaySong={onPlaySong}
                    />
                    {
                        //["name",'artists', etc]
                        //validamos con el object.keys
                        Object.keys(song).length ?
                    <TrackDetail {...song} /> 
                        : ""
                }
                    </div>
            
            
        </Content>
    </Layout>)
    
}

export default Home;
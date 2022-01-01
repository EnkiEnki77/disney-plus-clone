import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import homeIMG from '../assets/images/home-background.png'
import ImgCarousel from '../components/imgCarousel'
import Viewers from '../components/Viewers'
import Recommends from '../components/Recommends'
import NewDisney from '../components/NewDisney'
import Originals from '../components/Originals'
import Trending from '../components/Trending'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {collection, getDocs} from 'firebase/firestore'
import db from '../Firebase'
import { setMovies } from '../features/movie/movieSlice'

console.log(setMovies({original: 'cunt'}))

const Home = () => {
    const dispatch = useDispatch;
    const userName = useSelector(state => state.user.value)
    const movie = useSelector(state => state.movie.value)
    let trending = []
    let originals = []
    let newDisney = []
    let recommends= [{key: 'Stop'}]

    // const [recommends, setRecommends] = useState([])
    const colRef = collection(db, 'movies')

    console.log(colRef)

    
    // .then((snapshot) => console.log(snapshot.docs))

    // useEffect(() => {
        
    // }, [])

    useEffect(() => {
        getDocs(colRef)
        .then((snapshot) => {snapshot.docs.map((doc) => {
           
            switch(doc.data().type){
                
                case "recommend":
                    recommends = [...recommends, {id: doc.id, ...doc.data()} ]
                    // dispatch(setMovies({
                    //     recommend: recommends
                    // }))
    
                 console.log(recommends)
                 break;

                 case"new":
                 newDisney = [...newDisney, {id: doc.id, ...doc.data()} ]
                 break;

                 case"trending":
                 trending = [...trending, {id: doc.id, ...doc.data()} ]
                 break;

                 case"original":
                 originals = [...originals, {id: doc.id, ...doc.data()} ]
                 break;

                 default: console.log(`${doc.data().type} error`)

            }

            // function setUser(user){
                // console.log(user)
            //     dispatch(setMovies({
            //         recommend: recommends,
            //         newDisney: newDisney,
            //         trending: trending,
            //         original: originals
            //     }))
            // // }
            
        })

       
    
    })
        // console.log(movie)
        
    }, [userName.name])

    
   
    

    function setUser(user){
        console.log(user)
        // dispatch(setUserLoginDetails({
        //     name: user.displayName,
        //     email: user.email,
        //     photo: user.photoURL
        // }))
        dispatch(setMovies({
            recommend: 'peeboy'
        }))
    }

    setUser()

    console.log(movie)
    
   
    return (
            <Container>
                <Header/> 
                <ImgCarousel/>
                <Viewers/>
                <Recommends/>
                <NewDisney/>
                <Originals/>
                <Trending/>
                <BgImage src={homeIMG}/>    
            </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: calc(3.5vw + 5px);

    
`;

const BgImage = styled.img`
 
        width: 100%;
        height: 100%;
        /* content: ''; */
        position: fixed;
        overflow-y: hidden;
        inset: 0px;
        opacity: 1;
        z-index: -1;
`;

export default Home

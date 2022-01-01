import {React, useEffect} from 'react'
import styled from 'styled-components'
import disneyLogo from '../assets/images/logo.svg'
import navLogo1 from '../assets/images/home-icon.svg'
import navLogo2 from '../assets/images/search-icon.svg'
import navLogo3 from '../assets/images/watchlist-icon.svg'
import navLogo4 from '../assets/images/original-icon.svg'
import navLogo5 from '../assets/images/movie-icon.svg'
import navLogo6 from '../assets/images/series-icon.svg'
import {signInWithPopup, signOut} from 'firebase/auth'
import { provider, auth} from '../Firebase'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { setUserLoginDetails, setUserSignOut} from '../features/users/userSlice'
import { setMovies } from '../features/movie/movieSlice'


const Header = () => {
    const  dispatch = useDispatch()
    const user = useSelector(state => state.user.value)
    const navigate = useNavigate()

    function handleAuth(){
        if(!user.name) {
            console.log('signed out')

            signInWithPopup(auth, provider)
            .then((result) => setUser(result.user))
            .catch((error) =>  alert(error.message))
        }
        else if(user.name){
             auth.signOut()
            .then(() => {dispatch(setUserSignOut())})
            .catch((error) =>  alert(error.message))
            navigate('/')
        }
    }

    function setUser(user){
        console.log(user)
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }))
        dispatch(setMovies({
            trending: user.displayName,
            newDisney: user.email,
            recommend: user.photoURL
        }))
    }
    
    
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user)
                navigate('/home')
            }
        })
       
    }, [user.name])

    console.log(user)


    return (
        <Nav>
            <Logo>
                <img src={disneyLogo} alt="disney log"/>
            </Logo>

            {
                !user.name ? (<Login onClick={handleAuth}>Login</Login>) : (<>
            
            <NavMenu>
                <a href='/home'><img src={navLogo1} alt=''/>
                <span>HOME</span></a>
                <a href='/home'><img src={navLogo2} alt=''/>
                <span>SEARCH</span></a>
                <a href='/home'><img src={navLogo3} alt=''/>
                <span>WATCHLIS</span></a>
                <a href='/home'><img src={navLogo4} alt=''/>
                <span>ORIGINALS</span></a>
                <a href='/home'><img src={navLogo5} alt=''/>
                <span>MOVIES</span></a>
                <a href='/home'><img src={navLogo6} alt=''/>
                <span>SERIES</span></a>
            </NavMenu>
            <SignOut>
                <UserImage src = {user.photo}/>
                <DropDown onClick={handleAuth}>Signout</DropDown>
            </SignOut>

            </>)}
        </Nav>
    )
}

const Nav  = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #090b13;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-width: 70px;
  font-size: 0;
  display: inline-block;

  img{
      display: block;
      width: 100%;
  }

`;

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a{
      display: flex;
      padding: 0 12px;
      align-items: center;

      img{
          height: 20px;
          min-width: 20px;
          z-index: auto;
          width: 20px;
      }

      span{
          color: rgba(249,249,249);
          font-size: 13px;
          letter-spacing: 1.42px;
          line-height: 1.08;
          padding: 2px 0;
          position: relative;
          white-space: nowrap;
          margin-left: 5px;

          &:before{
              background-color: rgba(249,249,249) ;
              border-radius: 0 0 4px 4px;
              bottom: -6px ;
              content: '';
              height: 2px;
              left: 0px;
              opacity:0;
              position: absolute;
              right: 0px;
              transform-origin: left center;
              transform: scaleX(0);
              transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
              visibility: hidden;
              width: auto;
          }
      }

      &:hover{
          span:before{
              transform: scaleX(1);
              visibility: visible;
              opacity: 1 !important;
              cursor: pointer;
          }
      }
  }

  @media (max-width: 768px){
      display: none;
  }
`;

const Login  = styled.a`
  background-color: rgba(0 0 0 0 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease-out;

  &:hover{
      background-color: #f9f9f9;
      color: black;
      cursor: pointer;
  }
`;

const UserImage = styled.img`
  max-height: 80%;
  border: 1px solid black;
  border-radius: 50%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19,19,19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0 0 18px 0;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;

export default Header

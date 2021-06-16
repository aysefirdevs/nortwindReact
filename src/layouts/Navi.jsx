import React, {useState} from 'react'
import CartSummary from './CartSummary'
import {Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'

export default function Navi() {

    const {cartItems} = useSelector(state => state.cart)   //sepet 0sa gösterme kodunu yazdık aşağıda

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history= useHistory()

    function handleSignOut(params){  //çıkış yapı handle ediyorum
        setIsAuthenticated(false)
        history.push("/") //çıkış yaptığında sepet detayında olmak yerine anasayfaya yönlendiriyor.
    }

    function handleSignIn(params){  //giriş yapı handle ediyorum
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed = "top">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>
                            {cartItems.length>0&&<CartSummary/>}  
                            {isAuthenticated?<SignedIn signedOut={handleSignOut} bisey="1" 
                            />:<SignedOut signedIn={handleSignIn}/>}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Login } from '../Pages/Login'
import { Cadastro } from '../Pages/Cadastro'

export function PublicRoutes(){
    const {Navigator, Screen} = createNativeStackNavigator()
    return(
        <Navigator>
            <Screen name='Login' component={Login} options={{headerShown:false}}/>
            <Screen name='Cadadastro' component={Cadastro} options={{headerShown:false}}/>
        </Navigator>
    )
}
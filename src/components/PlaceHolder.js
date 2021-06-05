import React from 'react'
import { ListItem } from 'react-native-elements'
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade
  } from 'rn-placeholder'
import { wp } from '../utils/responsive'

function PlaceHolder({type, style}) {
    switch(type){
        case 'contacts':
            return(
                <>
                <ListItem >
                    <Placeholder
                    Animation={Fade}
                    Left={PlaceholderMedia}
                    >
                    <PlaceholderLine width={80} />
                    <PlaceholderLine width={30} />
                    </Placeholder>  
                </ListItem>
                <ListItem >
                    <Placeholder
                    Animation={Fade}
                    Left={PlaceholderMedia}
                    >
                    <PlaceholderLine width={80} />
                    <PlaceholderLine width={30} />
                    </Placeholder>  
                </ListItem>
                </>
            )
        case 'contact':
            return(
                <>
                <ListItem >
                    <Placeholder
                    Animation={Fade}
                    >
                    <PlaceholderLine width={30} />
                    <PlaceholderLine width={80} />
                    </Placeholder>  
                </ListItem>
                <ListItem >
                    <Placeholder
                    Animation={Fade}
                    >
                    <PlaceholderLine width={30} />
                    <PlaceholderLine width={80} />
                    </Placeholder>  
                </ListItem>
                <ListItem >
                    <Placeholder
                    Animation={Fade}
                    >
                    <PlaceholderLine width={30} />
                    <PlaceholderLine width={80} />
                    </Placeholder>  
                </ListItem>
                </>
            )
        case 'profile':
            return(
                <PlaceholderMedia style={[{width:wp(30), height:wp(30), alignSelf:'center', marginTop:'-15%', borderRadius:20}, style]}/>
            )
        default: 
            return null
    }
}

export {PlaceHolder}

import React from 'react'
import { Icon } from 'react-icons-kit'
import { iosSearchStrong } from 'react-icons-kit/ionicons/iosSearchStrong'
import {playCircle} from 'react-icons-kit/fa/playCircle'
import {imdb} from 'react-icons-kit/fa/imdb'
import {userCircle} from 'react-icons-kit/fa/userCircle'
import {alignLeft} from 'react-icons-kit/fa/alignLeft'
import {spotify} from 'react-icons-kit/fa/spotify'

export const IconSearch = ({size, className}) => <Icon size={size} className={className} icon={iosSearchStrong} />
export const IconPlay = ({size, className}) => <Icon className={className} size={size} icon={playCircle} />
export const IconImdb = ({size, className}) => <Icon className={className} size={size} icon={imdb} />
export const User = ({size, className}) => <Icon className={className} size={size} icon={userCircle} />
export const Menu = ({size, className}) => <Icon className={className} size={size} icon={alignLeft} />
export const Logo = ({size, className}) => <Icon className={className} size={size} icon={spotify} />

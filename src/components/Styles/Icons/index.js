import React from 'react'
import { Icon } from 'react-icons-kit'
import { iosSearchStrong } from 'react-icons-kit/ionicons/iosSearchStrong'
import {playCircle} from 'react-icons-kit/fa/playCircle'
import {imdb} from 'react-icons-kit/fa/imdb'

export const IconSearch = ({size, className}) => <Icon size={size} icon={iosSearchStrong} />
export const IconPlay = ({size, className}) => <Icon className={className} size={size} icon={playCircle} />
export const IconImdb = ({size, className}) => <Icon className={className} size={size} icon={imdb} />

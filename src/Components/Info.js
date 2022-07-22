import React from 'react'
import {useGlobalContext} from '../context/context'

const Info = () => {
	const data = useGlobalContext();  /*test*/
	return (
		<>
			<h1>Info Component goes here : {data}</h1>
		</>
	)
}

export default Info

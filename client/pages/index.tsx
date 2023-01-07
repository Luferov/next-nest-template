import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
	const [count, setCount] = useState(0)

	const increase = () => setCount(count + 1)

	return (
		<>
			<div className="font-bold">{count}</div>
			<Button onClick={increase}>+</Button>
		</>
	)
}

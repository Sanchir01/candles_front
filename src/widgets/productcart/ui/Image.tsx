import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { serialize } from 'node:v8'

export const ProductCartImage = ({
	image,
	id
}: {
	image: string
	id: string
}) => {
	return (
		<Link href={`/catalog/${id}`}>
			<Image width={200} height={200} alt='candle' src={image} />
		</Link>
	)
}

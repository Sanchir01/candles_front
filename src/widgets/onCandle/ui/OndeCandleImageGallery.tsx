import Image from 'next/image'

const OndeCandleImageGallery = ({
	images,
	id
}: {
	images: string[]
	id: string
}) => {
	return (
		<>
			<div className='flex gap-2 w-[600px] max-[768px]:hidden'>
				<div className='flex flex-col gap-5'>
					<div className='w-full'>
						<Image
							src={images[0]}
							alt={id}
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: '100%', height: 'auto' }}
						/>
					</div>
					<div className='grid grid-cols-3 gap-5'>
						<div className='w-full'>
							<Image
								src={images[1]}
								alt={id}
								width={0}
								height={0}
								sizes='100vw'
								style={{ width: '100%', height: 'auto' }}
							/>
						</div>
						<div className='w-full'>
							<Image
								src={images[1]}
								alt={id}
								width={0}
								height={0}
								sizes='100vw'
								style={{ width: '100%', height: 'auto' }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default OndeCandleImageGallery

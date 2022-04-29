import { Suspense } from 'react'

const Loader = Component => props =>
	(
		<Suspense fallback={'Loading...'}>
			<Component {...props} />
		</Suspense>
	)

export default Loader

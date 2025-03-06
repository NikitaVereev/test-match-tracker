import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Matches } from './pages/matches/Matches.tsx'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Matches />
		</QueryClientProvider>
	)
}

export default App

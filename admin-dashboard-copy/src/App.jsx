import { useMemo } from 'react'

function App() {
  const theme = useMemo(() => createTheme())
  return (
    <div>
      <h1>admin-dashboard-copy</h1>
    </div>
  )
}

export default App

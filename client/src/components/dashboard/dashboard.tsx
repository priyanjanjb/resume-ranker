
import { useLocation } from 'react-router-dom';

function Dashboard() {
    const location = useLocation();
    const pdfText = location.state?.pdfText || 'No CV data received';

    return (
       <div style={{ padding: '2rem' }}>
            <h1>This is the Dashboard</h1>
            <h2>Extracted CV Text:</h2>
            <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f5f5f5', padding: '1rem' }}>
                {pdfText}
            </pre>
        </div>
    )
}

export default Dashboard

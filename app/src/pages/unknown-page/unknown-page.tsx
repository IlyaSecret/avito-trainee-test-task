import { Card, CardHeader, Divider } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography/Typography';
import { Link } from 'react-router-dom';
export default function UnknownPage() {
    return (
        <Card className='card' sx={{margin: "auto"}}>
            <CardHeader title="Page not found"></CardHeader>
            <Divider variant="middle" />
            <CardContent>
                <Typography>
                    <Link to="/">Back to site</Link>
                </Typography>
            </CardContent>
        </Card>
    )
}
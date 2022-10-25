import { Card, Divider, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import StarIcon from '@mui/icons-material/Star';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { NewsItemType } from '../../types/news-item';
import '../news-item/news-item.css'
import { Link } from "react-router-dom";
import { convertDate } from '../../utils/convert-date';
type NewsItemProps = {
    item : NewsItemType
}


export default function NewsItem({ item }: NewsItemProps) {
    return (
        <>
            <Link to={`/${item.id}`} style={{ textDecoration: 'none' }}>
                <Card color="#03a9f4" className="card">
                    <CardHeader title={item.title} ></CardHeader>
                    <Divider variant="middle" />
                    <CardContent>
                        <p><AccountBoxIcon />Author: {item.by}</p>
                        <p><StarIcon />Rating: {item.score}</p>
                        <p><CalendarTodayIcon />Date: { convertDate(item.time)}</p>
                        
                    </CardContent>
                </Card>
            </Link>
        </>
    )
}
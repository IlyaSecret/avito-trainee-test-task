import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../hooks/store';
import { fetchNews, resetState } from '../../store/news-slice/news-slice';

export default function Header() {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(resetState(null));
        dispatch(fetchNews());
    }
    return (
        <div className="container">
            <AppBar position="static" sx={{mb : 1}}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    
                    <Typography>
                        <Link to="/" style={{ textDecoration: 'none',  color: "white"}}>Hacker News</Link>
                    </Typography>
                    <Button variant="contained" color="info" onClick={handleClick}>Update</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
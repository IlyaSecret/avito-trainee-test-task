import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export default function Header() {
    return (
        <div className="container">
            <AppBar>
                <Toolbar>
                    <Typography sx={{flexGrow: 1}}>
                        Hacker News
                    </Typography>
                    <Button variant="contained" color="info">Update</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
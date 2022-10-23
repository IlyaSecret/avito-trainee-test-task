import { Stack } from '@mui/material';
import React from 'react';
import { FadeLoader } from 'react-spinners';
import NewsItem from '../../components/news-item/news-item';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchNews } from '../../store/news-slice/news-slice';
import { NewsItemType } from '../../types/news-item';

export default function NewsListPage() {
    const dispatch = useAppDispatch();
    const news = useAppSelector(state => state.news.newsList)
    const isLoaded = useAppSelector(state => state.news.loaded);
    React.useEffect(() => {
        dispatch(fetchNews())
    }, [])
    React.useEffect(() => {
        let interval = setInterval(() => dispatch(fetchNews()), 60000);
        return () => clearInterval(interval);
    }, [dispatch])
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            spacing={2}
            color="Background">
            {isLoaded ?
                news?.map((item: NewsItemType) => <NewsItem item={item} key={ item.id } />)
                :
                <FadeLoader></FadeLoader>
        }
        </Stack >
            
    )
}
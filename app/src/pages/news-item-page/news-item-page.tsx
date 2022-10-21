import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { NewsItemType } from '../../types/news-item';
import UnknownPage from "../../components/unknown-page/unknown-page";
import "./news-item-page.css";
import NewsItemCard from "../../components/news-item-card/news-item-card";



export default function NewsItemPage() {
    const { id } = useParams();
    const news = useAppSelector(state => state.news.newsList);
    const currentNewsItem: NewsItemType = news.find((item: NewsItemType) => item.id === Number(id));
    
    return (
        <div className="container">
            {
                currentNewsItem ?
                    <NewsItemCard />
                    : <UnknownPage></UnknownPage>
            }   
        </div>
        
    )
    
}
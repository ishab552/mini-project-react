import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

    const HOT_URL = "https://plus.unsplash.com/premium_photo-1711662177249-138d96f8c4d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwaG90JTIwY2xpbWF0ZXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1472114864173-39596323454f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwY29sZCUyMGNsaW1hdGV8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";

    return (
        <div className='InfoBox'>

            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={
                    info.humidity > 80 
                    ? RAIN_URL 
                    : (info.temp > 15 
                        ? HOT_URL 
                        : COLD_URL)
                    }
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                    info.humidity > 80 
                    ? <ThunderstormIcon/> 
                    : (info.temp > 15 
                        ? <WbSunnyIcon/> 
                        : <AcUnitIcon/>)
                }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p> Temperature = {info.temp}&deg;C </p>
                    <p> Humidity = {info.humidity} </p>
                    <p> Min Temp = {info.tempMin}&deg; </p>
                    <p> Max Temp = {info.tempMax}&deg; </p>
                    <p> The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg; </p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}
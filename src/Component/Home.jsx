import React, { useEffect , useState } from 'react'
import './Home.scss';
import axios from "axios";
import { Link } from "react-router-dom";
import{BiPlay } from 'react-icons/bi';
import{AiOutlinePlus} from 'react-icons/ai'
const apikey="a04e849f160fa133b621490726f6c939";
const url = "https://api.themoviedb.org/3";
const popular = "popular";
const now_playing= "now_playing";
const top_rated ="top_rated";
const imgUrl = "https://image.tmdb.org/t/p/original"

const Card = ({img})=>(
  <img className='card' src={img} alt="cover" />
)

const Row= ({title , arr = [

]
})=>(
  <div className='row'>
    <h2>
      {title}
    </h2>
    <div>
    {
      arr.map((item ,index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))
    }
    </div>
  </div>
)

const Home = () => {

  const [popular1 , setpopular1] = useState([]);
  const [now_playing1 , setnow_playing1] = useState([]);
  const [top_rated1 , settop_rated1] = useState([]);
  const [genre1 , setgenre1] = useState([]);

  useEffect(() => {


    const  fetchupcoming = async() =>{
    const {data :{results}} = await axios.get(`${url}/movie/${popular}?api_key=${apikey}&page=2`);
    setpopular1(results);
    };


    const  fetchnow_playing  = async() =>{
    const {data :{results}} = await axios.get(`${url}/movie/${now_playing}?api_key=${apikey}`);

    setnow_playing1(results);
    };

    const  fetchtop_rated  = async() =>{
    const {data :{results}} = await axios.get(`${url}/movie/${top_rated}?api_key=${apikey}`);
    settop_rated1(results);
    };
    const  getAllGenre  = async() =>{
    const { data:{genres}} = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
    setgenre1(genres);
    };

      getAllGenre();


    fetchupcoming();
    fetchnow_playing();
    fetchtop_rated();
  },[])




  return (
    <div>
      <section className='home'>
        <div className="banner" style={{backgroundImage : popular1[0]? `url(${`${imgUrl}/${popular1[3].poster_path}`})` : "rgb(16, 16, 16)"
        }}>
            {
              popular1[6] &&
              (
                <h1>{popular1[2].original_title} </h1>
              )
            }
            {
            popular1[0] &&
            (
              <p>{popular1[2].overview}</p>
            )   
}
            <div>
            <button><BiPlay></BiPlay>play </button>
            <button>My list <AiOutlinePlus></AiOutlinePlus> </button>
            </div>

        </div>
        <Row title={"popular on netflix"} arr={popular1} /> 
        <Row title={"nowplaying on netflix"} arr={now_playing1} /> 
        <Row title={"toprated on netflix"} arr={top_rated1} /> 

        <div className="genrebox">
          {
            genre1.map((item) =>(
              <Link key={item.id} to = {`/genres/${item.id}`}>{item.name}</Link>
            ))
          }
        </div>
        </section>
    </div>
  )
}

export default Home
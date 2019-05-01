import React , {Component} from 'react';
import axios from 'axios';
import PropTypes, { number } from 'prop-types';
import styles from './Feed.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Loading from '../../components/Loading/Loading';
import { NavLink,  Switch, Route } from 'react-router-dom';


class Feed extends Component {

///////////////////////////////////////////////////////////////
//   Add constructor initialise the state                    //
///////////////////////////////////////////////////////////////

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: [],
            error: null,     
        };
    }

///////////////////////////////////////////////////////////////
//   Check if the image were lodaed and capture the error    //
///////////////////////////////////////////////////////////////

    componentDidMount() {
            var id_start=this.props.idStart;
            var nb_rec=11;
            var urlapi= 'https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0';
            axios.get(urlapi).then((response) => {
            let posts = [];
            posts.push(response.data.results);
            const loadingTimer = setTimeout(() => {
                clearTimeout(loadingTimer);
                this.setState({
                    loading: false,
                    posts: posts,
                });
                }, 2500);
            }).catch(() => {
            const loadingTimer = setTimeout(() => {
                clearTimeout(loadingTimer);
                this.setState({
                    loading: false,
                    error: true,
                });
            }, 1500);
        });
    }

    render() {
        const { loading, posts, error } = this.state;      
        return (           
            <div className={styles.feed}>                    
                {!loading && error && (
                    <p>sorry! Cannot retreive the data.</p>
                )}
                {loading ? (
                    <Loading />
                ) : (
                    <React.Fragment>
                        {posts[0].map((post, key) => {
                            var res = post.url.split("/");
                            let a = '/Pokdetails/' +res[6];
                            let idPk=Number(res[6]) 
                            var imglink='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + idPk +'.png'                           
                            return (
                                <div className={styles.post} key={key}>
                                 {/* <NavLink to="/test/">Pokemon Details</NavLink> */}
                                    <Card className={styles.Card}> 
                                        <CardContent className={styles.CardContent}>
                                             <NavLink to={a}><img src={imglink} /></NavLink>                                             
                                            <h3> {post.name.toUpperCase()} </h3>   
                                        </CardContent>                                                    
                                    </Card>
                                </div>
                            );
                        })}
                    </React.Fragment>
                )}
            </div>
        );
    }
}



export default Feed;




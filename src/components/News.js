import React,{Component} from 'react';
import './News.css'
import api from '../services/api';

class News extends Component {

  state = {
    articles : []
  }

  componentDidMount(){
    this.valorNews()
  }



  async valorNews(){
    let response ;
    response = await api.get('/v2/top-headlines?country=br&category=business&apiKey=f95d201ae703435589987634a0182c92')
    this.setState({articles: response.data.articles })
  }
  
  render(){

    console.log('this.state.articles',this.state.articles)
    return (
      <div className="App">
        {
          this.state.articles.map((artigo,i) => (
              <div key={i} className="lista-news">  
                <article>
                    <img src={artigo.urlToImage} />
                  <p>
                    {artigo.description}
                    <a href={artigo.url}>Mais Informações</a>            
                  </p>
                </article>
              </div>
        ))
      }
      </div>
    );
  }
}


export default News;

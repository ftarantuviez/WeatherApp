import React from 'react'
import './index.css'

class CardCountry extends React.Component{
    
    constructor(props){
        super(props)
        this.limitNumber = 10;
        this.state = {
            dataFetched: [],
            loading: true,
            error: false,
            loadMoreLoading: false,
            provincesOrStates: false
        }
    }

    
    fetchData = async (loadButton) => {
        if(loadButton){
            this.setState({...this.state, loadMoreLoading: true})
        } else{
            this.setState({...this.state, loading: true})
        }
        const where = encodeURIComponent(JSON.stringify({
          "continent": {
            "__type": "Pointer",
            "className": "Continent",
            "objectId": this.props.continentCode
          }
        }));
        const response = await fetch(
          `https://parseapi.back4app.com/classes/Country?limit=${this.limitNumber}&include=continent&excludeKeys=phone&where=${where}`,
          {
            headers: {
              'X-Parse-Application-Id': 'mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja', // This is the fake app's application id
              'X-Parse-Master-Key': 'TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH', // This is the fake app's readonly master key
            }
          }
        );
        const data = await response.json(); 
        this.setState({dataFetched: data.results, loading: false, loadMoreLoading: false})
      }

    componentDidMount(){
        this.fetchData()
    }

    componentDidUpdate(prevProps){
        if(prevProps.continentCode !== this.props.continentCode){
            this.limitNumber = 10;
            this.fetchData()
        }    
    }
    

    handleClickLoadMore = () =>{
        this.limitNumber += 10;
        this.fetchData(true)
    }
    
    render(){

    return(
        <>
        {this.state.loading
        ? 'loading' 
        :<>
        <div className="container cards-container">
            <h4 className="m-3">Continent: {this.props.continentName} </h4>
            <div className="row justify-content-center">
                {this.state.dataFetched.map(card =>(
                        <div key={card.objectId} className="card col-3 m-3" style={{width: "18rem"}} >
                            <div className="card-body">
                                <h5 className="card-title">{card.name}, {card.code} | <span role="img">{card.emoji}</span></h5>
                                <h6 className="card-title">Capital: {card.capital}</h6>
                                <p className="card-text">Continent: {card.continent.name}, {card.continent.code}</p>
                                <button onClick={() => console.log(card.objectId)} className="btn btn-primary">Go somewhere</button>
                            </div>
                        </div>
                ))}
            </div>
            {this.state.loadMoreLoading
            ? 'loadingAAAAAAAA'
            : <button onClick={this.handleClickLoadMore} className="btn btn-secondary button-loadMore">Load more</button>
            }
         </div>
         </>
        }
        </>
    )

}}

export default CardCountry;
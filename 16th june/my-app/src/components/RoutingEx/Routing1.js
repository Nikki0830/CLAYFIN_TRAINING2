import React from 'react'
import { Link,Switch ,Route,useParams,useRouteMatch,useHistory} from 'react-router-dom';

export default function Routing1() {
    return (
        <div>
            <Link to="/">home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/setting">Setting</Link>
            <Link to="/Mumbai">Mumbai</Link>
            <Link to="/Chennai">Chennai</Link>
            <Link to="/Jammu">Jammu</Link>
            <Link to="/India/Jammu/hindi">Jammu</Link>

            <h1> route config</h1>
<Switch>
            <Route exact path="/">
                    <Home/>
            </Route>
            <Route path="/contact">
                    <Contact/>
            </Route>
            <Route path="/setting">
                    <Settings/>
            </Route>
            
            <Route   path="/topics" component={Topics}>
            </Route>
            
          
            <Route  path="/:city" component={Param}>
                  
            </Route>
            <Route path="/:country/:city/:lang" component={Param}>
                  
            </Route>                    
            </Switch>
        </div>
    )
}
const Home=()=>{
    return "home";
}
const Contact=()=>{
    return "contact";
}
const Settings=()=>{
    return "setting";
}
const Param=(props)=>{
    const hist=props.history;
    console.log(hist);
    let history=useHistory();
    const takeMeHome=()=>{
        history.goBack();
    }
    console.log(props);
    let {country,city,lang}=useParams();
    return  <div> <button onClick={takeMeHome}>home page</button>
     `parameter : ${country} - ${city} - ${lang}`</div>;
}
//props in class

const Topics=(props)=>{
    // const url=props.match.url;
    // const path=props.match.path;
    // console.log(url,path);
    let { path, url } = useRouteMatch();
    return(<div>
         <Link to={`${url}/page1`}>topic1</Link>
         <Link to={`${url}/page2`}>topic2</Link>
        <Switch>
        <Route exact path={path}>
          <h3>select topic.</h3>
        </Route>
       
         <Route  path={`${path}`}><TopicItem/></Route>
         <Route  path={`${path}`}><TopicItem/></Route>
        </Switch>  
        </div>
        );
}

const TopicItem=()=>{
    return "item ?";
}

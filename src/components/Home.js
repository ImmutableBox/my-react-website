import React, {Component} from 'react';

class Home extends Component{
    render(){
        return(
            <div class="container"> 
             <div class="row">
                <div class="col-sm-6">
                    <h2>Rush (Incomplete) <span class="logo"><i class="fas fa-gamepad"></i></span></h2>
                    <div class="thumbnail">
                    <div class="caption" align="center">
                        <a class="btn-primary" href="/rush">Click here to play</a> 
                    </div>
                    </div>
                </div>
        
                <div class="col-sm-6">
                    <h2>Hard Time <span class="logo"><i class="fas fa-gamepad"></i></span></h2>
                    <div class="thumbnail">
                        <div class="caption" align="center">
                        <a class="btn-primary" href="/hardtime">Click here to play</a> 
                        </div>
                    </div>
        
                </div>
              </div>
            </div>
        );
    }

}

export default Home;
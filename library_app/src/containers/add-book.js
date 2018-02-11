import React from 'react';
import { Link } from 'react-router-dom';
import {addBook} from '../actions/addBook';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddBook extends React.Component {
    submitForm(event){
        var title =document.getElementById("title").value;
        var author =document.getElementById("author").value;
        var description =document.getElementById("desc").value;
        if(title.trim()==="" || author.trim()===""|| description.trim()===""){
            document.getElementById("error").innerHTML="Fill in the requried Fields";
            document.getElementById('error').className='alert alert-danger';
            event.preventDefault();
        }else{
            this.props.addBook({title,author,description});
        }
    }
    render() {
        return (
            <div>
                <h2>Add Book Form</h2>
                <form>
                    <div className='col-xs-8'>
                    <div id='error'></div>
                        <div className='form-group'>
                            <label>Title</label>
                            <input type="text" id="title" className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>Author</label>
                            <input type="text" id ="author" className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>Description</label>
                            <textarea rows="16" col="50"  id ="desc" className='form-control'></textarea>
                        </div>
                        <div className='row'>
                            <div className='col-xs-2'>
                                <Link to={{ pathname: "/" }} onClick={(event)=>this.submitForm(event)} className='btn btn-primary'>Submit</Link>
                            </div>
                            <div className='col-xs-offset-8 col-xs-2'>
                                <Link to={{ pathname: "/" }} className='btn btn-danger'>Cancel</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


function mapStateToProps(state) {
   return {
   };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addBook:addBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
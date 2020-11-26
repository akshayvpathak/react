import React, { Component } from 'react';
import {Button,Modal , ModalHeader, ModalBody, FormGroup, Label, Input,Form} from 'reactstrap';
class CommentForm extends Component{
  constructor(props){
    super(props);
    this.state=  {
      isModalOpen : false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }
  handleComment(event){
    this.toggleModal();
    alert("Username: " + this.username.value  + "Password : " + this.password.value  );
  }
  render(){
    return(
      <>
      <Button onClick={this.toggleModal} >
          <span className="fa fa-comment fa-lg" color="secondary"></span>Submit Comment
      </Button>
       <Modal isOpen={this.state.isModalOpen} toggle= {this.toggleModal}>
       <ModalHeader toggle= {this.toggleModal}>Submit Comment</ModalHeader>
       <ModalBody>
         <Form onSubmit= {this.handleComment}>
           <FormGroup>
             <Label htmlfor="username">Username</Label>
             <Input type="text" id="username" name="username" innerRef={(input) =>this.username = input}>

             </Input>
           </FormGroup>
           <FormGroup>
             <Label htmlfor="auther">Author name</Label>
             <Input type="text" id="author" name="password" innerRef={(input) =>this.password = input}>
               
             </Input>
           </FormGroup>
           <FormGroup>
             <Label htmlfor="comment">Comment</Label>
             <Input type="text-area" id="comment" name="comment" innerRef={(input) =>this.comment = input}>
               
             </Input>
           </FormGroup>
           <Button type="submit" value="submit" color="primary">
             Login
           </Button>
         </Form>
       </ModalBody>
     </Modal>
      </>
      
    )
  }

}

export default CommentForm;
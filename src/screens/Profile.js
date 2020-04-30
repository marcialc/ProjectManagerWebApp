import React, { Component } from "react";
import '../css/Profile.css';

export default class Profile extends Component {
  render() {
    return (
      <div className="contact-body">
        <grid className="contact-grid">
          <cell col={10}>
            <h2>Luciano Cuneo</h2>
            <img 
            src="https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png"
            alt="avatar"
            style={{height: '250px'}}
            class="center"
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
            <h4>Software Engineer</h4>
            <h6>(305)-846-0797</h6>
            <h6>Miami, FL</h6>
            </p>
          </cell> 
          <cell col={6}>
          <h2>Contact Me</h2>
          <hr/>
          </cell>
        </grid>
      </div>
    );
  }
}

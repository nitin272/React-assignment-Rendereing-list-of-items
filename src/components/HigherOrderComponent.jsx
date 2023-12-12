import React, { Component } from "react";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
      ]
    };
  }
  renderItems() {
    return this.state.userData.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name : {item.name}</span>
        <span>User Type: {item.user_type}</span>
      </li>
    ));
  }
  renderBasedOnUserType = () => {
    const designerData = this.state.userData.filter((item) => item.user_type === "Designer");

    return designerData.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name : {item.name}</span>
        <span>User Type: {item.user_type}</span>
      </li>
    ));
  }
  renderBasedOnLetterJ = () => {
    const jData = this.state.userData.filter((item) => item.name.startsWith("J"));

    return jData.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name : {item.name}</span>
        <span>User Type: {item.user_type}</span>
      </li>
    ));
  }
  renderBasedOnAge = () => {
    const ageData = this.state.userData.filter((item) => item.age <= 50 && item.age > 28);

    return ageData.map((item) => (
      <li key={item.id} className="list-elements">
        <span>Id: {item.id}</span>
        <span>Name : {item.name}</span>
        <span>User Type: {item.user_type}</span>
        <span>Age: {item.age}</span>
      </li>
    ));
  }
  renderTotalAgeOfDesigners = () => {
    const totalDesignerExperience = this.state.userData
      .filter((item) => item.user_type === "Designer")
      .reduce((accumulator, currentValue) => accumulator + currentValue.years, 0);

    return totalDesignerExperience;
  }

  render() {
    return (
      <>
          <h1>Display all items</h1>
          <div className="display-box">
            <ul>{this.renderItems()}</ul>
          </div>
          <h1>Display based on user type</h1>
          <div className="display-box">
            <ul>{this.renderBasedOnUserType()}</ul>
          </div>
          <h1>Filter all data starting with letter J </h1>
          <div className="display-box">
            <ul>{this.renderBasedOnLetterJ()}</ul>
          </div>

          <h1>Filter all data based on age greater than 28 and age less than or equal to 50 </h1>
          <div className="display-box">
            <ul>{this.renderBasedOnAge()}</ul>
          </div>

          <h1>Find the total years of the designers </h1>
          <div className="display-box">
            <ul>{this.renderTotalAgeOfDesigners()}</ul>
          </div>

      </>
    );
  };
}

export default HigherOrderComponent;

import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

   /**
   * with short circuit
   */
       render() {
        return (
            <div>
                {this.state.isLoggedIn && <div>Welcome Gandhi</div>}
                {!this.state.isLoggedIn && <div>Welcome Guest</div>}
            </div>
        )
      }

   /**
   * with ternary operator
   */
     render3() {
        return (
            <div>
                {this.state.isLoggedIn ? <div>Welcome Gandhi</div> : <div>Welcome Guest</div>}
            </div>
        ) 
      }

  /**
   * with element variable
   */
  render2() {
    let user
    if (this.state.isLoggedIn) user = <div>Welcome Gandhi</div>
    else user = <div>Welcome Guest</div>
    return (
        <div>
            {user}
        </div>
    ) 
  }

  /**
   * With if else
   * @returns 
   */
  render1() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <div>Welcome Gandhi</div>
        </div>
      );
    } else {
      return (
        <div>
          <div>Welcome Guest</div>
        </div>
      );
    }
  }
}

export default UserGreeting;

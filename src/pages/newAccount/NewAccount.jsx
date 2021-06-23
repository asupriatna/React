import "./newAccount.css";

export default function NewAccount() {
  return (
    <div className="newAccount">
      <h1 className="newAccountTitle">New Account</h1>
      <form action="" className="newAccountForm">
        <div className="newAccountItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newAccountItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newAccountItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newAccountItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newAccountItem">
          <label>Phone</label>
          <input type="text" placeholder="+62 888 9999" />
        </div>
        <div className="newAccountItem">
          <label>Address</label>
          <input type="text" placeholder="Jakarta | ID" />
        </div>
        <div className="newAccountItem">
          <label>Gender</label>
          <div className="newAccountGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newAccountItem">
          <label>Active</label>
          <select className="newAccountSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newAccountButton">Create</button>
      </form>
    </div>
  );
}

import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <body>
    <div class="container">
      <div id="s1">
        <h1>Learn to code by <p></p> watching others</h1>
        <p>See how experienced developers solve problems in real-time.<p></p>
        Watching scripted tutorials is great, but understanding how
        developers think is invaluable.</p>
      </div>
      <div id="s2">
        <button><strong>Try it free 7 days</strong> then $20/mo.thereafter </button>
        <form>
          <div>
            <input type="text" id="firstname" name="first_name" required placeholder="First Name" />
          </div>
          <div>
            <input type="text" id="lastname" name="last_name" required placeholder="Last Name" />
          </div>
          <div>
            <input type="email" id="email" name="email" required placeholder="Email Address" />
          </div>
          <div>
            <input type="password" id="password" name="password" required placeholder="Password"/>
          </div>
          <input type="submit" id="submit" value="CLAIM YOUR FREE TRIAL"/>
          <p></p>
          <small>By clicking the button, you are agreeing to our <strong id="ts">Terms and Services</strong></small>
        </form>
      </div>
    </div>
    </body>
  );
}

export default App;

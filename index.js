const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f4f6f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .container {
            background: white;
            padding: 30px 40px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          input {
            padding: 10px;
            margin-top: 10px;
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 16px;
          }
          button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
          }
          button:hover {
            background: #45a049;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Enter Your Name</h2>
          <form action="/submit" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.send(`
    <html>
      <head>
        <title>Hello</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f4f6f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .message {
            background: white;
            padding: 30px 40px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          a {
            display: inline-block;
            margin-top: 20px;
            text-decoration: none;
            color: #4CAF50;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="message">
          <h2>Hello, ${name}!</h2>
          <a href="/">Go Back</a>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

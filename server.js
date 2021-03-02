const express = require('express');
const app = express();
const cors = require('cors');

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

const data = {
  "Response":"Success",
  "Message":"",
  "HasWarning":false,
  "Type":100,
  "RateLimit":{},
  "Data":
    {"Aggregated":false,
    "TimeFrom":1613520000,
    "TimeTo":1614384000,
    "Data":[{
      "time":1613520000,
      "high":52622.68,
      "low":48967.72,
      "open":49184.63,
      "volumefrom":67133.49,
      "volumeto":3423930178.2,
      "close":52154.91,
      "conversionType":"direct",
      "conversionSymbol":""
    },{
      "time":1613606400,
      "high":52550.6,
      "low":50874.81,
      "open":52154.91,
      "volumefrom":42530.26,
      "volumeto":2205232619.94,
      "close":51591.61,
      "conversionType":"direct",
      "conversionSymbol":""
    },{
      "time":1613692800,"high":56331.09,"low":50766.83,"open":51591.61,"volumefrom":72433.44,"volumeto":3893034056.64,"close":55933.47,"conversionType":"direct","conversionSymbol":""},{"time":1613779200,"high":57528.16,"low":54140.61,"open":55933.47,"volumefrom":52924.57,"volumeto":2974872569.57,"close":55900.84,"conversionType":"direct","conversionSymbol":""},{"time":1613865600,"high":58348.75,"low":55516.07,"open":55900.84,"volumefrom":33823.01,"volumeto":1934005633.01,"close":57469.95,"conversionType":"direct","conversionSymbol":""},{"time":1613952000,"high":57540.74,"low":48194.31,"open":57469.95,"volumefrom":130806.33,"volumeto":6995162441.1,"close":54121.17,"conversionType":"direct","conversionSymbol":""},{"time":1614038400,"high":54164.35,"low":44983.39,"open":54121.17,"volumefrom":165758.08,"volumeto":8016450648.12,"close":48898.7,"conversionType":"direct","conversionSymbol":""},{"time":1614124800,"high":51399.55,"low":47015.55,"open":48898.7,"volumefrom":74972.28,"volumeto":3729774704.65,"close":49738.17,"conversionType":"direct","conversionSymbol":""},{"time":1614211200,"high":52086.34,"low":46728.88,"open":49738.17,"volumefrom":73102.42,"volumeto":3643008748.86,"close":47082.87,"conversionType":"direct","conversionSymbol":""},{"time":1614297600,"high":48438.38,"low":44153.46,"open":47082.87,"volumefrom":90519.05,"volumeto":4204800171.81,"close":46324.5,"conversionType":"direct","conversionSymbol":""},{"time":1614384000,"high":48362.8,"low":46199.09,"open":46324.5,"volumefrom":17504.08,"volumeto":827675823.87,"close":47388.84,"conversionType":"direct","conversionSymbol":""}
    ]}
  }


const info = [{
  "time":1613520000,
  "high":52622.68,
  "low":48967.72,
  "open":49184.63,
  "volumefrom":67133.49,
  "volumeto":3423930178.2,
  "close":52154.91,
  "conversionType":"direct",
  "conversionSymbol":""
},{
  "time":1613606400,
  "high":52550.6,
  "low":50874.81,
  "open":52154.91,
  "volumefrom":42530.26,
  "volumeto":2205232619.94,
  "close":51591.61,
  "conversionType":"direct",
  "conversionSymbol":""
},{
  "time":1613692800,"high":56331.09,"low":50766.83,"open":51591.61,"volumefrom":72433.44,"volumeto":3893034056.64,"close":55933.47,"conversionType":"direct","conversionSymbol":""},{"time":1613779200,"high":57528.16,"low":54140.61,"open":55933.47,"volumefrom":52924.57,"volumeto":2974872569.57,"close":55900.84,"conversionType":"direct","conversionSymbol":""},{"time":1613865600,"high":58348.75,"low":55516.07,"open":55900.84,"volumefrom":33823.01,"volumeto":1934005633.01,"close":57469.95,"conversionType":"direct","conversionSymbol":""},{"time":1613952000,"high":57540.74,"low":48194.31,"open":57469.95,"volumefrom":130806.33,"volumeto":6995162441.1,"close":54121.17,"conversionType":"direct","conversionSymbol":""},{"time":1614038400,"high":54164.35,"low":44983.39,"open":54121.17,"volumefrom":165758.08,"volumeto":8016450648.12,"close":48898.7,"conversionType":"direct","conversionSymbol":""},{"time":1614124800,"high":51399.55,"low":47015.55,"open":48898.7,"volumefrom":74972.28,"volumeto":3729774704.65,"close":49738.17,"conversionType":"direct","conversionSymbol":""},{"time":1614211200,"high":52086.34,"low":46728.88,"open":49738.17,"volumefrom":73102.42,"volumeto":3643008748.86,"close":47082.87,"conversionType":"direct","conversionSymbol":""},{"time":1614297600,"high":48438.38,"low":44153.46,"open":47082.87,"volumefrom":90519.05,"volumeto":4204800171.81,"close":46324.5,"conversionType":"direct","conversionSymbol":""},{"time":1614384000,"high":48362.8,"low":46199.09,"open":46324.5,"volumefrom":17504.08,"volumeto":827675823.87,"close":47388.84,"conversionType":"direct","conversionSymbol":""}
];


app.get('/api/', (req, res)=>{
  console.log('Api works');
  res.json(data)
});

app.get('/api/info', (req, res)=>{
  console.log('Api info works');
  res.json(info)
});


app.listen(3000, ()=> {
  console.log('Express server is running')
});
